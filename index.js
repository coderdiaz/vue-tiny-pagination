import TinyPagination from './packages/TinyPagination/index';

const install = (Vue) => {
  Vue.component(TinyPagination.name, TinyPagination);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '0.3.2',
  install,
  TinyPagination,
};
