import TinyPagination from './src/components/TinyPagination.vue'

const install = (Vue, opts ={}) => {
  Vue.component('TinyPagination', TinyPagination)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = {
  version: '0.2.1-beta.7',
  install,
  TinyPagination
}

module.exports.default = module.exports
