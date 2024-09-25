const typescript = require('@rollup/plugin-typescript').default;
const commonjs = require('@rollup/plugin-commonjs').default;
// import babel from '@rollup/plugin-babel';
const terser = require('@rollup/plugin-terser').default;
const json = require('@rollup/plugin-json').default;
const resolve = require('@rollup/plugin-node-resolve').default;
module.exports = [
  {
    input: './src/index.ts', // entry point
    output: [
      {
        file: './dist/bundles/cjs.js', // CommonJS output for Node
        format: 'cjs'
      },
      {
        file: './dist/bundles/esm.js', // ES Module output
        format: 'esm'
      },
      {
        file: './dist/bundles/umd.js', // UMD output for browser
        format: 'umd',
        name: 'TUL' // Library's global variable name
      }
    ],
    plugins: [resolve(), typescript(), commonjs(), terser(), json()]
  }
  // {
  //   input: './src/cli/index.ts', // Path to your CLI entry file
  //   output: {
  //     file: '../dist/bin/tul-cli.js', // Output file in the bin directory
  //     format: 'cjs', // CommonJS format, suitable for Node.js
  //     banner: '#!/usr/bin/env node' // Shebang to make file executable in Unix-like environments
  //   },
  //   plugins: [
  //     resolve({
  //       preferBuiltins: true
  //     }),
  //     commonjs(),
  //     babel({
  //       presets: ['@babel/preset-env', '@babel/preset-typescript'],
  //       babelHelpers: 'bundled',
  //       extensions: ['.js', '.ts']
  //     }),
  //     terser(),
  //     json()
  //   ]
  //   // external: ['yargs', 'other-external-dependencies'] // Any external dependencies that shouldn't be bundled
  // }
];
