import TinyPagination from './src/components/TinyPagination.vue'

export function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('TinyPagination', TinyPagination)
}

const plugin = {
  install
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

export { TinyPagination }
export default plugin
