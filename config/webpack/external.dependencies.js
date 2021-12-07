const cdnjsBaseUrl = '//cdnjs.cloudflare.com/ajax/libs';

// NOTE:
// - Order matters here if a dependency depends on another dependency!
// - If you want exclude a package just expose it with its global name'
// - If you want to load additional CSS files, just define key 'cdnUrl'

module.exports = [
  {
    moduleName: 'i18next-client',
    exposed: 'i18n',
    cdnUrl: `${cdnjsBaseUrl}/i18next/1.7.7/i18next.min.js`,
  },
  {
    moduleName: 'moment',
    exposed: 'moment',
    cdnUrl: `${cdnjsBaseUrl}/moment.js/2.16.0/moment.min.js`,
  },
  {
    cdnUrl:
      '//assets-cdn.shore.com/shore-components/master/current/shore-webcomponents.min.js',
  },
];
