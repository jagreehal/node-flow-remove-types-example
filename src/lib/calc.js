// @flow

async function add(x: number, y: number): Promise<Result> {
  return Promise.resolve(x * y);
}

module.exports = {
  add
};
