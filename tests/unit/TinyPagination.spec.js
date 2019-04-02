import { shallowMount } from '@vue/test-utils';
import TinyPagination from '../../packages/TinyPagination/src/main.vue';

const vm = shallowMount(TinyPagination, {
  propsData: {
    total: 100,
  },
});

// Helper function to create a component
const createComponent = propsData => shallowMount(TinyPagination, { propsData });

describe('TinyPagination.vue', () => {
  let cmp;
  it('has a created hook', () => {
    expect(typeof TinyPagination.created).toBe('function');
  });

  it('should match the snapshot', () => {
    expect(vm.$el).toMatchSnapshot();
  });

  describe('Properties', () => {
    it('when the component is created without page prop, Page 1 is the page by default', () => {
      cmp = createComponent({ total: 300 });
      expect(cmp.vm.page).toBe(1);
    });

    it('when the page property is set, the currentPage is equals', () => {
      cmp = createComponent({ total: 300, page: 2 });
      expect(cmp.vm.currentPage).toBe(2);
    });

    it('when the component is created, English is the language by default', () => {
      cmp = createComponent({ total: 300 });
      expect(cmp.vm.lang).toBe('en');
      expect(cmp.vm.translation.title).toBe('Page');
    });

    it('when the lang prop is set to spanish, the component is translated', () => {
      cmp = createComponent({ total: 300, lang: 'es' });
      expect(cmp.vm.lang).toBe('es');
      expect(cmp.vm.translation.title).toBe('Página');
    });

    it('when the lang prop is set to not available language, English is the language by default', () => {
      cmp = createComponent({ total: 300, lang: 'fr' });
      expect(cmp.vm.translation.title).toBe('Page');
    });

    it('when the show limit is not set, true is by default', () => {
      cmp = createComponent({ total: 100 });
      expect(cmp.vm.showLimit).toBe(true);
    });

    it('when the showLimit is set, prop is same', () => {
      const showLimit = true;
      cmp = createComponent({ total: 100, showLimit });
      expect(cmp.vm.showLimit).toBe(showLimit);
    });
  });

  describe('Watchers', () => {
    it('currentPage watcher is called with the new value', () => {
      cmp = createComponent({ total: 100 });
      cmp.setData({ currentPage: 3 });
      expect(cmp.emitted()['tiny:change-page']).toBeTruthy();
    });

    it('currentLimit watcher is called with the new value', () => {
      cmp = createComponent({ total: 200 });
      cmp.setData({ currentLimit: 20 });
      expect(cmp.emitted()['tiny:change-limit']).toBeTruthy();
    });

    it('when the currentPage watcher is called, the tiny:change-page event is emitted', () => {
      const stub = jest.fn();
      cmp = createComponent({ total: 100 });
      cmp.vm.$on('tiny:change-page', stub);

      cmp.setData({ currentPage: 3 });
      expect(stub).toBeCalledWith({ page: 3 });
    });

    it('when the currentLimit watcher is called, the tiny:change-limit event is emitted', () => {
      const stub = jest.fn();
      cmp = createComponent({ total: 100 });
      cmp.vm.$on('tiny:change-limit', stub);

      cmp.setData({ currentLimit: 20 });
      expect(stub).toBeCalledWith({ limit: 20 });
    });
  });

  describe('Events', () => {
    beforeEach(() => {
      cmp = createComponent({ total: 20 });
    });

    it('calls nextPage when click on next button', () => {
      cmp.vm.nextPage = jest.fn();

      cmp.find('.btn-next-page').trigger('click');
      expect(cmp.vm.nextPage).toBeCalled();
    });

    it('call lastPage when click on prev button', () => {
      cmp.vm.lastPage = jest.fn();

      cmp.find('.btn-prev-page').trigger('click');
      expect(cmp.vm.lastPage).toBeCalled();
    });
  });
});
