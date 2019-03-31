import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

const NODE_ENV = process.env.NODE_ENV || 'development';
const outputFile = NODE_ENV === 'production' ? './lib/prod.js' : './lib/dev.js';

module.exports = {
  input: 'src/index.js',
  output: {
    file: outputFile,
    format: 'cjs'
  },
  plugins: [
    postcss({
      extract: true,
      extensions: ['.css', '.sass'],
      minimize: true
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs(),
    NODE_ENV === 'production' ? uglify() : undefined
  ],
  external: id => /^react|react-dom/.test(id)
};
