import * as React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { IAppProps } from '@utils/types';
import i18n from '@utils/i18n';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 500px;
  overflow: hidden;
  padding: 3.8rem 1rem;
  align-items: center;
`;

const App = (props: IAppProps): JSX.Element => {
  const { history } = props;

  const renderApp = (): JSX.Element => (
    <AppContainer>Shore React-TS boilerplate</AppContainer>
  );

  const renderNotFound = (): JSX.Element => (
    <AppContainer>{i18n.t('errors.not-found')}</AppContainer>
  );

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact render={renderApp} />
        <Route render={renderNotFound} />
      </Switch>
    </Router>
  );
};

export { App };
