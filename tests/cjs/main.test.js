const { yourFunction } = require('../../dist/bundles/cjs.js');
describe('CJS Bundle Tests', () => {
  test('should work as expected', () => {
    expect(yourFunction()).toBe(/* expected result */);
  });
});
