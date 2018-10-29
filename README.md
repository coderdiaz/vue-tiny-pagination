<p align="center">
  <a href="https://github.com/coderdiaz/vue-tiny-pagination">
    <img src="https://vuejs.org/images/logo.png" width="120">
  </a>
  <h2 align="center">&lt;vue-tiny-pagination /&gt;</h2>
</p>

<p align="center">
  A Vue component for create a tiny pagination with Flexbox
</p>

<p align="center">
    <a href="https://npmjs.com/package/vue-tiny-pagination"><img src="https://img.shields.io/npm/dt/vue-tiny-pagination.svg?style=flat-square"></a>
    <a href="https://github.com/coderdiaz/vue-tiny-pagination/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square"></a>
    <a href="https://github.com/coderdiaz/vue-tiny-pagination/stargazers"><img src="https://img.shields.io/github/stars/coderdiaz/vue-tiny-pagination.svg?style=flat-square"></a>
    <a href="http://npmjs.com/package/vue-tiny-pagination"><img src="https://img.shields.io/npm/v/vue-tiny-pagination.svg?style=flat-square"></a>
    <a href="http://npmjs.com/package/vue-tiny-pagination"><img src="https://img.shields.io/npm/dm/vue-tiny-pagination.svg?style=flat-square"></a>
    <a href="https://www.paypal.me/coderdiaz"><img src="https://img.shields.io/badge/invite-coffee-red.svg?style=flat-square"></a>
    <a href="https://travis-ci.org/coderdiaz/vue-tiny-pagination"><img src="https://travis-ci.org/coderdiaz/vue-tiny-pagination.svg?branch=master&style=flat-square"></a>
</a>

---

### Install/Usage

```
$ npm i -S vue-tiny-pagination
```

```html
<div id="#app">
  <tiny-pagination
    :total="currentTotal"
    @tiny:change-page="changePage"></tiny-pagination>
</div>
```

You can use **local registration**
```javascript
import {TinyPagination} from 'vue-tiny-pagination'

new Vue({
  el: '#app',
  data() {
    return {
      currentTotal: 100,
      currentPage: 1
    }
  },
  methods: {
    changePage (pagination) {
      this.currentPage = pagination.page
    }
  },
  components: {
    TinyPagination
  }
});
```
or **global registration**
```javascript
import TinyPagination from 'vue-tiny-pagination'
Vue.use(TinyPagination)
```

### Usage in browser

In browser you can use Unpkg:
```
https://unpkg.com/vue-tiny-pagination@latest/dist/vue-tiny-pagination.min.js
```

Example in browser here: https://jsfiddle.net/coderdiaz/g5vLex83/3/

### Documentation

For see the complete documentation go to the [official website](https://coderdiaz.me/vue-tiny-pagination).

### Contributions
All contributions are welcome send your PR and Issues.

### License
This is a open-source software licensed under the [MIT license](https://raw.githubusercontent.com/coderdiaz/vue-tiny-pagination/master/LICENSE)

##### Crafted by Javier Diaz