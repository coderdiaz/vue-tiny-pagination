import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'

import TinyPagination from '../src/components/TinyPagination.vue'

describe('TinyPagination.vue', () => {
  it('has a created hook', () => {
    expect(typeof TinyPagination.created).toBe('function')
  })
})
