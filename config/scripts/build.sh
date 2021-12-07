#!/bin/sh

set -eu pipefail

export NODE_ENV=production

MOD_BIN=./node_modules/.bin
PROJECT_NAME=$(cat ./project.name)

# create JS, CSS and other assets
$MOD_BIN/webpack --config=./config/webpack/webpack.prod.js

# create locales folder
mkdir -p build/locales

# copy and rename translation files of the App
for f in src/assets/locales/translation.*.json; do
  filename=$(basename "$f")
  extension=${filename#*.}
  $MOD_BIN/json-minify $f > build/locales/$PROJECT_NAME.$extension
done

# copy images from to build
cp -r src/assets/images/ build/