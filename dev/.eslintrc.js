module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true
  },
  parser: '@typescript-eslint/parser',
  // parserOptions: {
  //   project: '/Users/alessandroraffa/DEV/TUL/ts-tul/library/tsconfig.json' // This path needs to be correct
  // },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-multiple-empty-lines': ['error', { max: 0, maxEOF: 0 }]
  },
  ignorePatterns: ['build', 'coverage'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    {
      files: ['__tests__/**/*.ts'],
      env: {
        jest: true
      }
    }
  ]
};
