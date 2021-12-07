#!/bin/sh

export NODE_ENV=development

export CDN_BASE_URL=//${HOST:-0.0.0.0}:${PORT:-3002}/src/assets/

webpack-dev-server --config=./config/webpack/webpack.dev.js