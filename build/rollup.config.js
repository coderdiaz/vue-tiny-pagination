import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
import uglify from 'rollup-plugin-uglify-es'

export default {
  input: 'index.js',
  output: {
    name: 'VueTinyPagination',
    exports: 'named'
  },
  plugins: [
    vue({
      css: true,
      compileTemplate: true
    }),
    buble(),
    uglify()
  ]
}
