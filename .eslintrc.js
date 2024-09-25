module.exports = {
  env: {
    node: true
  },
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2015
  },
  plugins: [
    // '@typescript-eslint',
    'prettier'
  ],
  extends: [
    'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-multiple-empty-lines': ['error', { max: 0, maxEOF: 0 }]
  },
  overrides: [
    // TypeScript source files and tests
    {
      files: ['src/**/*.ts', 'src/**/*.test.ts'],
      env: {
        browser: true,
        node: true,
        jest: true
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json'
      },
      plugins: ['@typescript-eslint', 'prettier'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended'
      ],
      rules: {}
    },
    // CJS tests files
    {
      files: ['tests/cjs/*.js'],
      env: {
        jest: true
      },
      rules: {}
    },
    // ESM tests files
    {
      files: ['tests/esm/*.js'],
      env: {
        jest: true
      },
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2015
      },
      rules: {}
    },
    // UMD tests files
    {
      files: ['tests/umd/*.js'],
      env: {
        jest: true,
        browser: true
      },
      rules: {}
    }
  ],
  ignorePatterns: ['dist', 'coverage', 'node_modules']
};
