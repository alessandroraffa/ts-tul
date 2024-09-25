module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/src/**/*.test.ts'],
  moduleDirectories: ['node_modules'],
  // moduleFileExtensions: ['ts', 'json', 'node'],
  transform: {
    '^.+\\.ts$': ['ts-jest', { tsconfig: './tsconfig.json' }]
  },
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.ts',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/*.test.ts'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  }
};
