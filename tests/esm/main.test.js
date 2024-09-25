import { yourFunction } from '../../dist/bundles/esm.js';
describe('ESM Bundle Tests', () => {
  test('function should work as expected', () => {
    const result = yourFunction();
    expect(result).toBe(/* expected result */);
  });
});
