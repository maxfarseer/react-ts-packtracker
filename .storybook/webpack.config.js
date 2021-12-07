const { resolve } = require('path');

module.exports = ({ config, mode }) => {
  
  // Alternately, for an alias:
  config.resolve.alias = {
    "@assets":resolve(__dirname, '../', 'src/assets'),
    "@components":resolve(__dirname, '../', 'src/components')
  }

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: ['babel-loader', 'ts-loader'],
  })

  return config
};