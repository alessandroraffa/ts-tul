export const passwordLength = 8;
export const passwordCharset =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~|}{[]:;?><,.-=';
export const generatePassword = (length?: number): string => {
  const actualLength = length || passwordLength;
  if (actualLength < passwordLength) {
    throw new Error(
      `Password length must be at least ${passwordLength} characters`
    );
  }
  if (actualLength > 128) {
    throw new Error(`Password length must be less than 128 characters`);
  }
  let password = '';
  for (let i = 0; i < actualLength; i++) {
    password += passwordCharset.charAt(
      Math.floor(Math.random() * passwordCharset.length)
    );
  }
  return password;
};
