#! /usr/bin/env node
const { readFileSync, writeFileSync } = require('fs');
const { globSync } = require('tinyglobby');
var pkg = require('../../package.json');


for(const file of globSync('src/**/*.js')) {
  // @ts-ignore
  const contents = readFileSync(file, 'utf8').replaceAll('0.0.0-development', pkg.version);
  writeFileSync(file, contents);

}


