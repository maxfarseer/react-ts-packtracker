import { IApiClient, LogError } from '@shore/types';
import { IMerchant, IMerchantAccount } from './types';

async function loadMerchant({
  apiClient,
  merchantId,
  logError,
}: {
  apiClient: IApiClient;
  merchantId: string;
  logError: LogError;
}): Promise<IMerchant | null> {
  try {
    const response = await apiClient.merchantV2.find<{
      withOrg: true;
      withFeatureToggles: true;
    }>(merchantId, {
      fields: {
        merchants: [
          'name',
          'currency',
          'slug',
          'address',
          'time_zone',
          'feature_toggles',
          'organization',
        ],
        organizations: ['name'],
      },
      include: ['organization'],
    });

    const {
      id,
      feature_toggles,
      name,
      slug,
      address,
      time_zone,
      currency,
      organization,
    } = response;

    return {
      id,
      feature_toggles,
      name,
      slug,
      address,
      time_zone,
      currency,
      organization,
    };
  } catch (e) {
    logError(e);
    return null;
  }
}

async function loadMerchantAccount({
  apiClient,
  logError,
}: {
  apiClient: IApiClient;
  logError: LogError;
}): Promise<IMerchantAccount | null> {
  try {
    return apiClient.merchantAccountV2.me({
      include: ['organization'],
    });
  } catch (e) {
    logError(e);
    return null;
  }
}

export { loadMerchant, loadMerchantAccount };
