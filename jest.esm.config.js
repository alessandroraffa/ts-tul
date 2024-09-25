module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/tests/esm/*.test.js'],
  transform: {},
  moduleDirectories: ['node_modules', '<rootDir>/dist'],
  collectCoverage: false
};
