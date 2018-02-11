<template>
  <div class="vue-tiny-pagination">
    <ul class="tiny-pagination" :class="customClass">
      <li class="page-item" :class="classFirstPage">
        <a href="#" @click.prevent="lastPage">{{translation.prev}}</a>
      </li>
      <li class="page-item">
        <span>{{titlePage}}</span>
      </li>
      <li class="page-item" :class="classLastPage">
        <a href="#" @click.prevent="nextPage">{{translation.next}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import {Language} from '../utils'
export default {
  name: 'TinyPagination',
  props: {
    total: {
      type: Number,
      required: true
    },
    page: {
      type: Number,
      default: 1
    },
    lang: {
      type: String,
      default: 'en'
    },
    customClass: {
      type: String
    }
  },
  data () {
    return {
      currentPage: 1
    }
  },
  created () {
    this.currentPage = this.page
  },
  computed: {
    translation () {
      return Language.translations[this.lang]
    },
    totalPages () {
      return Math.ceil(this.total/10)
    },
    titlePage () {
      return `${this.translation.title} ${this.currentPage}`
    },
    classFirstPage () {
      return {
        disabled: (this.currentPage === 1),
        'c-not-allowed': true
      }
    },
    classLastPage () {
      return {
        disabled: (this.currentPage === this.totalPages),
        'c-not-allowed': true
      }
    }
  },
  methods: {
    nextPage () {
      if (this.currentPage !== this.totalPages) {
        this.currentPage += 1
      }
    },
    lastPage () {
      if (this.currentPage > 1) {
        this.currentPage -= 1
      }
    }
  },
  watch: {
    currentPage (value) {
      this.$emit('tiny:change-page', {
        page: value
      })
    }
  }
}
</script>

<style lang="scss">
// Pagination
.tiny-pagination {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
  display: flex;
  list-style: none;
  margin: .2rem 0;
  padding: .2rem 0;

  .page-item {
    margin: .2rem .05rem;

    span {
      display: inline-block;
      padding: .2rem .2rem;
    }

    a {
      border-radius: .1rem;
      color: #667189;
      display: inline-block;
      padding: .2rem .4rem;
      text-decoration: none;
      &:focus,
      &:hover {
        color: #5755d9;
      }
    }

    &.disabled {
      a {
        cursor: default;
        opacity: .5;
        pointer-events: none;
      }
    }

    &.active {
      a {
        background: #5755d9;
        color: #fff;
      }
    }

    &.page-prev,
    &.page-next {
      flex: 1 0 50%;
    }

    &.page-next {
      text-align: right;
    }

    .page-item-title {
      margin: 0;
    }

    .page-item-subtitle {
      margin: 0;
      opacity: .5;
    }
  }
}
</style>