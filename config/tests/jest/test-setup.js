import moment from 'moment-timezone';

// Initialize environment variables
process.env.CDN_BASE_URL = 'http://0.0.0.0:3002/';

/**
 * we are not loaded moment for this project,
 * because we already have this module in global scope
 * (app-shell) has moment as well.
 * We have moment package only for test purposes
 * https://stackoverflow.com/a/57684993/1916578
 */
global.moment = moment;

// Setup global moment timezone for tests
moment.tz.setDefault('Europe/Berlin');

/**
 * hide console.log and console.warn output
 * when using jest
 * https://stackoverflow.com/a/49591765/1916578
 * If you need console.log in tests
 * just change log: jest.fn() -> log: console.log
 */
global.console = {
  log: jest.fn(),
  error: console.error,
  warn: jest.fn(),
  info: console.info,
  debug: console.debug,
};