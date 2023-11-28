import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
export default [
  {
    input: './src/index.ts', // entry point
    output: [
      {
        file: '../dist/bundles/cjs.js', // CommonJS output for Node
        format: 'cjs'
      },
      {
        file: '../dist/bundles/esm.js', // ES Module output
        format: 'esm'
      },
      {
        file: '../dist/bundles/umd.js', // UMD output for browser
        format: 'umd',
        name: 'TUL' // Library's global variable name
      }
    ],
    plugins: [resolve(), typescript(), commonjs(), terser(), json()]
  },
  {
    input: './src/cli/index.ts', // Path to your CLI entry file
    output: {
      file: '../dist/bin/tul-cli.js', // Output file in the bin directory
      format: 'cjs', // CommonJS format, suitable for Node.js
      banner: '#!/usr/bin/env node' // Shebang to make file executable in Unix-like environments
    },
    plugins: [
      resolve({
        preferBuiltins: true
      }),
      commonjs(),
      babel({
        presets: ['@babel/preset-env', '@babel/preset-typescript'],
        babelHelpers: 'bundled',
        extensions: ['.js', '.ts']
      }),
      terser(),
      json()
    ]
    // external: ['yargs', 'other-external-dependencies'] // Any external dependencies that shouldn't be bundled
  }
];
