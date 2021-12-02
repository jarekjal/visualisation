import { babel } from '@rollup/plugin-babel';

const config = {
  input: 'index2.js',
  output: {
    file: 'bundle2.js',
    format: 'iife'
  },
  plugins: [babel({ babelHelpers: 'bundled' })]
};

export default config;