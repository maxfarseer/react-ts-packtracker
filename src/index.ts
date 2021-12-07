import moment, { Moment } from 'moment';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import {
  IApiClient,
  OnAction,
  LogError,
  TrackMethod,
  ApiEnvironment,
} from '@shore/types';
import { App } from './components/App';
import { Error } from './components/Error';
import { loadMerchant, loadMerchantAccount } from './api';
import { toHTMLElement } from './utils/converter';
import { createHistory } from './utils/history';
import i18n, { i18nLoadAppNamespace } from './utils/i18n';
import 'moment-timezone';
import './styles/global.css';
import { IAppProps } from './utils/types';

interface ICreateParams {
  mountPath: string;
  useHashHistory: boolean;
  container: string | HTMLElement;
  apiClient: IApiClient;
  settings: {
    locale: string;
    merchantId: string;
    apiEnv: ApiEnvironment;
    slug: string;
    currency: string;
  };
  onAction: OnAction;
  logError: LogError;
  trackMethod: TrackMethod;
}

async function create({
  mountPath = '/',
  useHashHistory = false,
  container = document.body,
  apiClient,
  settings,
  onAction,
  logError,
  trackMethod,
}: ICreateParams): Promise<{
  destroy: () => void;
}> {
  const resetTimeZone = (): Moment => moment.tz.setDefault('');
  const node = toHTMLElement(container);
  const destroy = (): void => {
    resetTimeZone();
    ReactDOM.unmountComponentAtNode(node as Element);
  };
  const destroyObject = Object.freeze({
    destroy,
  });

  await i18nLoadAppNamespace();

  const { merchantId } = settings;
  const merchantSettings = await loadMerchant({
    apiClient,
    merchantId,
    logError,
  });
  const merchantAccount = await loadMerchantAccount({ apiClient, logError });
  if (merchantSettings === null || merchantAccount === null) {
    const errorProps = {
      title: i18n.t('errors.maintenance-title'),
      message: i18n.t('errors.maintenance-message'),
    };
    ReactDOM.render(React.createElement(Error, errorProps), node as Element);
    return destroyObject;
  }

  const {
    name,
    slug,
    address,
    time_zone,
    feature_toggles,
    organization,
    currency,
  } = merchantSettings;

  moment.tz.setDefault(time_zone); // Setup moment with merchant timezone

  const history = createHistory(mountPath, useHashHistory);

  const props: IAppProps = {
    apiClient,
    history,
    onAction,
    logError,
    settings: {
      merchantId,
      name,
      address,
      isAdmin: merchantAccount.organization_admin,
      apiEnv: settings.apiEnv,
      featureToggles: feature_toggles,
      organization,
      timeZone: time_zone,
      merchantSlug: slug,
      locale: settings.locale,
      currency,
    },
    trackMethod,
  };

  if (module.hot) {
    const HotApp = hot(module)(App);
    ReactDOM.render(React.createElement(HotApp, props), node as Element);
  } else {
    ReactDOM.render(React.createElement(App, props), node as Element);
  }

  return destroyObject;
}

const { BUILD_DATE } = process.env;

export { create, BUILD_DATE };
