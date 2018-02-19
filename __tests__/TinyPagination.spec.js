import {mount} from 'vue-test-utils'
import TinyPagination from '../src/components/TinyPagination.vue'

// Helper function to create a component
const createComponent = propsData => mount(TinyPagination, {propsData})

describe('TinyPagination.vue', () => {
  let cmp

  it('has a created hook', () => {
    expect(typeof TinyPagination.created).toBe('function')
  })

  it('when the page property is set, the currentPage is equals', () => {
    cmp = createComponent({total: 300, page: 2})
    expect(cmp.vm.currentPage).toBe(2)
  })

  it('when the component is created without page prop, Page 1 is the page by default', () => {
    cmp = createComponent({total: 300})
    expect(cmp.vm.page).toBe(1)
  })

  it('when the component is created, English is the language by default', () => {
    cmp = createComponent({total: 300})
    expect(cmp.vm.lang).toBe('en')
    expect(cmp.vm.translation.title).toBe('Page')
  })

  it('when the lang prop is set to spanish, the component is translated', () => {
    cmp = createComponent({total: 300, lang: 'es'})
    expect(cmp.vm.lang).toBe('es')
    expect(cmp.vm.translation.title).toBe('Página')
  })

})
