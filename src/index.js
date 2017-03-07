// @flow

require('source-map-support').install();
const { add } = require('./lib/calc');

async function run(): Promise<Result> {
  return await add(1, 2);
}

run().then(r => {
  console.log(r);
});
