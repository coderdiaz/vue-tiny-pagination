import vue from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: 'index.js',
    output: {
      format: 'esm',
      file: 'dist/vue-tiny-pagination.esm.js',
    },
    plugins: [
      vue(),
      commonjs(),
      terser(),
    ],
  },
  // UMD build.
  {
    input: 'index.js',
    output: {
      name: 'VueTinyPagination',
      format: 'umd',
      file: 'dist/vue-tiny-pagination.umd.js',
    },
    plugins: [
      vue(),
      commonjs(),
      terser(),
    ],
  },
  // SSR build.
  {
    input: 'index.js',
    output: {
      format: 'cjs',
      file: 'dist/vue-tiny-pagination.ssr.js',
    },
    plugins: [
      vue({ template: { optimizeSSR: true } }),
      commonjs(),
      terser(),
    ],
  },
  // Browser build.
  {
    input: 'index.js',
    output: {
      name: 'VueTinyPagination',
      format: 'iife',
      file: 'dist/vue-tiny-pagination.min.js',
    },
    plugins: [
      vue(),
      commonjs(),
      terser(),
    ],
  },
];
