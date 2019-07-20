# [Tiny Pagination](https://github.com/coderdiaz/vue-tiny-pagination) &middot; [![NPMVERSION](https://img.shields.io/npm/v/vue-tiny-pagination.svg?style=flat-square)](http://npmjs.com/package/vue-tiny-pagination) [![GITHUBSTARS](https://img.shields.io/github/stars/coderdiaz/vue-tiny-pagination.svg?style=flat-square)](https://github.com/coderdiaz/vue-tiny-pagination/stargazers) [![BUILD](https://travis-ci.org/coderdiaz/vue-tiny-pagination.svg?branch=master&style=flat-square)](https://travis-ci.org/coderdiaz/vue-tiny-pagination) [![DOWNLOADS](https://img.shields.io/npm/dt/vue-tiny-pagination.svg?style=flat-square)](https://npmjs.com/package/vue-tiny-pagination)
A Vue component for create a tiny paginate with Flexbox

## Install/Usage
<!-- Replace the docs for usage the plugin -->
```sh
# Install with npm
$ npm i -S vue-tiny-pagination

# or yarn
$ yarn add vue-tiny-pagination
```

```html
<div id="app">
  <tiny-pagination
    :total="currentTotal"
    @tiny:change-page="changePage" />
</div>
```

You can use **Local Registration**:
```js
import { TinyPagination } from 'vue-tiny-pagination';
new Vue({
  el: '#app',
  data() {
    return {
      currentTotal: 100,
      currentPage: 1,
    };
  },
  methods: {
    changePage (pagination) {
      this.currentPage = pagination.page;
    },
  },
  components: {
    TinyPagination,
  },
});
```

or **Global Registration**:
```js
import TinyPagination from 'vue-tiny-pagination';
Vue.use(TinyPagination);

// or with a custom component name
import { TinyPagination } from 'vue-tiny-pagination';
Vue.component('custom-name', TinyPagination);
```

### Usage in browser
<!-- Write an example for use the plugin in browser from CDN -->
In browser you can use Unpkg, Jsdelivr, CDN.js, etc.
```sh
# Unpkg
https://unpkg.com/vue-tiny-pagination@latest/dist/vue-tiny-pagination.js

# JSDelivr
https://cdn.jsdelivr.net/npm/vue-tiny-pagination@latest/dist/vue-tiny-pagination.min.js
```

## Documentation
<!-- Add all documentation about the plugin: props, events, etc -->
### Props
|Name|Description|Type|Default|Required|
|---|---|---|---|---|
|total|A number of total items|Number|-|true|
|page|Prop to set a default page|Number|1|false|
|lang|Default language to show (Available: en, es)|String|en|false|
|customClass|Prop to set a custom class.|String|""|false|
|limits|Prop to set a default limits to page sizes.|Array|[10, 15, 20,50,100]|false|
|showLimit|Prop to disable the limit selector|Boolean|true|false|

### Events
|Event|Description|
|---|---|
|tiny:change-page|Get the current page from pagination `payload: { page: 1 }`|
|tiny:change-limit|Get the current limit from pagination `payload: { limit: 1 }`|

## Community
All feedback and suggestions are welcome!

## License
This is a open-source software licensed under the [MIT license](https://raw.githubusercontent.com/coderdiaz/vue-tiny-pagination/master/LICENSE)