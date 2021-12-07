import i18n from '@shore/i18n/dist/no-bundled-i18next';

const namespace = process.env.PROJECT_NAME || '';

export const i18nLoadAppNamespace = (): void => i18n.loadNamespace(namespace);
export default i18n.useNamespace(namespace);
