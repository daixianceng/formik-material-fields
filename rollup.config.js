import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';
import pkg from './package.json';

const env = process.env.NODE_ENV;

const config = {
  input: 'src/index.js',
  output: {
    name: 'FormikMaterialFields',
    format: 'umd',
  },
  plugins: [
    resolve({
      browser: true,
      customResolveOptions: {
        moduleDirectory: 'node_modules',
      },
    }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
    }),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};

if (env === 'production') {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
      },
    }),
  );
}

export default config;
