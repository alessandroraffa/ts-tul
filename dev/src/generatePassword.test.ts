import { passwordLength } from './generatePassword';
import { generatePassword } from './index';
describe('test generatePassword', () => {
  it('should throw', () => {
    expect(() => generatePassword(7)).toThrow(Error);
  });
  it('should throw', () => {
    expect(() => generatePassword(7)).toThrow(
      /Password length must be at least \d+ characters/
    );
  });
  it('should throw', () => {
    expect(() => generatePassword(7)).toThrow(
      `Password length must be at least ${passwordLength} characters`
    );
  });
  it('should throw', () => {
    expect(() => generatePassword(129)).toThrow(Error);
  });
  it('should throw', () => {
    expect(() => generatePassword(129)).toThrow(
      /Password length must be less than 128 characters/
    );
  });
  it('should return a string', () => {
    const result = generatePassword();
    expect(result).toEqual(expect.any(String));
  });
  it('should return a string of length 8', () => {
    const result = generatePassword();
    expect(result).toHaveLength(8);
  });
  it('should return a string of length 16', () => {
    const result = generatePassword(16);
    expect(result).toHaveLength(16);
  });
  it('should return a string that contains characters from the charset', () => {
    const result = generatePassword();
    expect(result).toMatch(/[a-zA-Z0-9!@#$%^&*()_+~`|}{[\]:;?><,./-=\\]/);
  });
});
