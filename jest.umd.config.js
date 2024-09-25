module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/tests/umd/*.test.js'],
  moduleDirectories: ['node_modules', '<rootDir>/dist'],
  collectCoverage: false
};
