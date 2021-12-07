import {
  IMerchantResponse,
  IMerchantAddress,
  ApiEnvironment,
  IOrganizationResponse,
  FeatureToggles,
} from '@shore/types';

export interface ISettings {
  merchantId: string;
  name: string;
  address: IMerchantAddress;
  isAdmin: boolean;
  apiEnv: ApiEnvironment;
  featureToggles: FeatureToggles;
  organization: IOrganizationResponse;
  timeZone: string;
  locale: string;
  merchantSlug: string;
  currency: string;
}

export interface IMerchantAccount {
  id: string;
  organization_admin: boolean;
}

type merchantExtraParams = {
  withOrg: true;
  withFeatureToggles: true;
};

export type IMerchant = Pick<
  IMerchantResponse<merchantExtraParams>,
  | 'id'
  | 'name'
  | 'slug'
  | 'address'
  | 'time_zone'
  | 'feature_toggles'
  | 'organization'
  | 'currency'
>;
