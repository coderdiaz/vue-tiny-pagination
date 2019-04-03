<template>
  <div class="vue-tiny-pagination">
    <ul class="tiny-pagination" :class="customClass">
      <li class="page-item" :class="classFirstPage">
        <a class="btn-prev-page" href="#" @click.prevent="lastPage">{{translation.prev}}</a>
      </li>
      <li class="page-item">
        <span>{{titlePage}}</span>
      </li>
      <li class="page-item" :class="classLastPage">
        <a class="btn-next-page" href="#" @click.prevent="nextPage">{{translation.next}}</a>
      </li>
      <li v-if="showLimit" class="page-item">
        <select class="tiny-form-select" v-model="currentLimit" @change="onLimitChange">
          <option
            v-for="(limit, index) in limits"
            :value="limit"
            :key="index">{{limit}}/{{translation.title}}</option>
        </select>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TinyPagination',
  props: {
    total: {
      type: Number,
      required: true,
    },
    page: {
      type: Number,
      default: 1,
    },
    lang: {
      type: String,
      default: 'en',
    },
    customClass: {
      type: String,
    },
    limits: {
      type: Array,
      default () {
        return [10, 15, 20, 50, 100];
      },
    },
    showLimit: {
      type: Boolean,
      default: true,
    }
  },
  data () {
    return {
      version: '0.3.1',
      currentPage: 1,
      currentLimit: 10,
      translations: {
        en: {
          prev: 'Previous',
          title: 'Page',
          next: 'Next',
        },
        es: {
          prev: 'Anterior',
          title: 'Página',
          next: 'Siguiente',
        }
      },
      availableLanguages: ['en', 'es'],
    };
  },
  created () {
    this.currentPage = this.page
  },
  computed: {
    translation () {
      return (this.availableLanguages.includes(this.lang)) ?
        this.translations[this.lang]
      : this.translations['en']
    },
    totalPages () {
      return Math.ceil(this.total/this.currentLimit)
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
    },
    onLimitChange () {
      this.currentPage = 1
    }
  },
  watch: {
    currentPage (value) {
      this.$emit('tiny:change-page', {
        page: value
      })
    },
    currentLimit (value) {
      this.$emit('tiny:change-limit', {
        limit: value
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

  .tiny-form-select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    text-transform: lowercase;
    border: .05rem solid #caced7;
    border-radius: .1rem;
    font-size: .8rem;
    height: 1.8rem;
    line-height: 1rem;
    outline: none;
    padding: .35rem .4rem;
    vertical-align: middle;
    width: 100%;
    &:focus {
      border-color: #5755d9;
      box-shadow: 0 0 0 0.1rem rgba(87, 85, 217, .2)
    }
  }

  .tiny-form-select:not([multiple]):not([size]) {
    background: #fff url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns="http://www.w3.org/2000/svg"…path%20fill="%23667189"%20d="M2%200L0%202h4zm0%205L0%203h4z"/%3E%3C/svg%3E') no-repeat right .35rem center/.4rem .5rem;
    padding-right: 1.2rem;
  }
}
</style>