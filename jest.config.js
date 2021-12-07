// https://jestjs.io/docs/en/configuration

module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  setupFiles: ['<rootDir>/config/tests/jest/test-setup.js'],
  testPathIgnorePatterns: ['/node_modules/', '/__fixtures__/'],
  moduleNameMapper: {
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
  },
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'jsx'],
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
};
