const { E } = require('../..')
const { readFileSync } = require('fs');
const { globSync } = require('tinyglobby');
const errors = Object.keys(E).map(name => `E.${name}`)
const bal = []

  for (const error of errors) {

    const files = [];
    for(const file of globSync('src/**/*.js')) {
      const counts = readFileSync(file, 'utf8').split(error).length - 1;

	  if(counts > 0) files.push(file)
    }

    // console.log(`${error}: ${files.length}`)
    if (files.length > 0) {
      bal.push(`${files.length} ${error}`)
    }
  }
  bal.sort()
  console.log(bal.join('\n'))

