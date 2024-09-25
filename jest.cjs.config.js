module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/tests/cjs/*.test.js'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest' // If you are using Babel
  },
  moduleDirectories: ['node_modules', '<rootDir>/dist'],
  collectCoverage: false
};
