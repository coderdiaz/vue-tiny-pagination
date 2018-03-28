import TinyPagination from './src/components/TinyPagination.vue'

const install = (Vue, opts ={}) => {
  if (install.installed) return
  install.installed = true
  Vue.component('TinyPagination', TinyPagination)
}

const plugin = {
  version: '0.2.1-beta.6',
  install,
  TinyPagination
}

let GlobalVue = null
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue
}
if (GlobalVue) {
	GlobalVue.use(plugin)
}

module.exports = plugin
module.exports.default = module.exports
