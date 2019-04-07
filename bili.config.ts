import { Config } from 'bili';

const config: Config = {
  input: 'index.js',
  output: {
    moduleName: 'VueTinyPagination',
    extractCSS: false,
    format: ['esm', 'umd', 'cjs'],
    fileName({ format }, defaultFileName) {
      if (format === 'esm') {
        return 'vue-tiny-pagination.esm.js';
      }
      if (format === 'umd') {
        return 'vue-tiny-pagination.js';
      }
      if (format === 'cjs') {
        return 'vue-tiny-pagination.cjs.js';
      }
      return defaultFileName;
    },
    sourceMapExcludeSources: true
  },
  babel: {
    minimal: true
  },
  plugins: {
    vue: true,
  },
  extendConfig(config, { format }) {
    if (format === 'umd') {
      config.output.minify = true;
      config.env = Object.assign({}, config.env, {
        NODE_ENV: 'production',
      });
    }
    return config;
  },
};

export default config;
