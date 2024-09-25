import { generateString } from '.';
describe('test generateString', () => {
  it('should return a string', () => {
    const result = generateString();
    expect(result).toEqual(expect.any(String));
  });
});
