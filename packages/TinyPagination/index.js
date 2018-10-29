import TinyPagination from './src/main.vue';

TinyPagination.install = (Vue) => {
  Vue.component(TinyPagination.name, TinyPagination);
};

export default TinyPagination;
