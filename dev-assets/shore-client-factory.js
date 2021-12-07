window.Shore.client = (function createShoreClient(Client) {
  const API_BASE_URL = window.BASE_URL_API;
  const CORE_BASE_URL = window.BASE_URL_CORE;
  const FILE_STORAGE_BASE_URL = window.BASE_URL_FILE_STORAGE;
  const { MERCHANT_ACCOUNT_ID } = window;
  const { MERCHANT_UUID } = window;

  return Client.create({
    authBaseUrl: `${CORE_BASE_URL}/merchant/api/auth`,
    apiV2BaseUrl: `${API_BASE_URL}/v2`,
    apiV1BaseUrl: `${API_BASE_URL}/v1`,
    availabilityBaseUrl: `${API_BASE_URL}/v1`,
    customerBaseUrl: `${CORE_BASE_URL}/css/v1`,
    customerMerchantBaseUrl: `${CORE_BASE_URL}/merchant/api/customers`,
    serviceBaseUrl: `${API_BASE_URL}/v1`,
    resourceBaseUrl: `${API_BASE_URL}/v1`,
    employeeBaseUrl: `${API_BASE_URL}/v1`,
    employeeV2BaseUrl: `${API_BASE_URL}/v2`,
    merchantBaseUrl: `${API_BASE_URL}/v1`,
    appointmentBaseUrl: `${API_BASE_URL}/v1`,
    appointmentV2BaseUrl: `${API_BASE_URL}/v2`,
    resourcesV2BaseUrl: `${API_BASE_URL}/v2`,
    merchantAccountBaseUrl: `${API_BASE_URL}/v1`,
    merchantAccountV2BaseUrl: `${API_BASE_URL}/v2`,
    messagingBaseUrl: `${API_BASE_URL}/v1`,
    notificationsBaseUrl: `${API_BASE_URL}/v1`,
    merchantV2BaseUrl: `${API_BASE_URL}/v2`,
    customersV2BaseUrl: `${API_BASE_URL}/v2`,
    appointmentGroupBaseUrl: `${API_BASE_URL}/v1`,
    filestorageBaseUrl: `${FILE_STORAGE_BASE_URL}/v1`,
    seriesV2BaseUrl: `${API_BASE_URL}/v2`,
    paymentsBaseUrl: `${CORE_BASE_URL}/merchant/api/charges`,
    merchantId: MERCHANT_UUID,
    realtime: {
      appKey: window.REALTIME_APP_KEY,
      authEndpoint: window.REALTIME_AUTH_ENDPOINT,
      httpHost: window.REALTIME_HTTP_HOST,
      wsHost: window.REALTIME_WS_HOST,
      encrypted: true,
    },
    merchantAccountId: MERCHANT_ACCOUNT_ID,
  });
})(window.Shore.Client);
