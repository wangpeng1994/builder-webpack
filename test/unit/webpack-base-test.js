var assert = require('assert');

describe('webpack.base.js test case', () => {

  const baseConfig = require('../../lib/webpack.base.js');

  console.log(baseConfig);

  it('entry', () => {
    assert.equal(baseConfig.entry.index.includes('builder-webpack/test/smoke/template/src/index/index.js'), true);
    assert.equal(baseConfig.entry.search.includes('builder-webpack/test/smoke/template/src/search/index.js'), true);
  });
});
