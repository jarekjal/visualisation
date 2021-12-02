import { babel } from '@rollup/plugin-babel';

const config = {
  input: 'index3.js',
  output: {
    file: 'bundle3.js',
    format: 'iife'
  },
  plugins: [babel({ babelHelpers: 'bundled' })]
};

export default config;