!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.VueTinyPagination={})}(this,function(e){"use strict";function t(e){t.installed||(t.installed=!0,e.component("TinyPagination",n))}!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n='@charset "UTF-8"; .tiny-pagination { font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif; display: flex; list-style: none; margin: .2rem 0; padding: .2rem 0; } .tiny-pagination .page-item { margin: .2rem .05rem; } .tiny-pagination .page-item span { display: inline-block; padding: .2rem .2rem; } .tiny-pagination .page-item a { border-radius: .1rem; color: #667189; display: inline-block; padding: .2rem .4rem; text-decoration: none; } .tiny-pagination .page-item a:focus, .tiny-pagination .page-item a:hover { color: #5755d9; } .tiny-pagination .page-item.disabled a { cursor: default; opacity: .5; pointer-events: none; } .tiny-pagination .page-item.active a { background: #5755d9; color: #fff; } .tiny-pagination .page-item.page-prev, .tiny-pagination .page-item.page-next { flex: 1 0 50%; } .tiny-pagination .page-item.page-next { text-align: right; } .tiny-pagination .page-item .page-item-title { margin: 0; } .tiny-pagination .page-item .page-item-subtitle { margin: 0; opacity: .5; } .tiny-pagination .tiny-form-select { -webkit-appearance: none; -moz-appearance: none; appearance: none; text-transform: lowercase; border: .05rem solid #caced7; border-radius: .1rem; font-size: .8rem; height: 1.8rem; line-height: 1rem; outline: none; padding: .35rem .4rem; vertical-align: middle; width: 100%; } .tiny-pagination .tiny-form-select:focus { border-color: #5755d9; box-shadow: 0 0 0 0.1rem rgba(87, 85, 217, 0.2); } .tiny-pagination .tiny-form-select:not([multiple]):not([size]) { background: #fff url(\'data:image/svg+xml;charset=utf8,%3Csvg%20xmlns="http://www.w3.org/2000/svg"…path%20fill="%23667189"%20d="M2%200L0%202h4zm0%205L0%203h4z"/%3E%3C/svg%3E\') no-repeat right 0.35rem center/0.4rem 0.5rem; padding-right: 1.2rem; } ';t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}}();var n={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-tiny-pagination"},[n("ul",{staticClass:"tiny-pagination",class:e.customClass},[n("li",{staticClass:"page-item",class:e.classFirstPage},[n("a",{staticClass:"btn-prev-page",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.lastPage(t)}}},[e._v(e._s(e.translation.prev))])]),e._v(" "),n("li",{staticClass:"page-item"},[n("span",[e._v(e._s(e.titlePage))])]),e._v(" "),n("li",{staticClass:"page-item",class:e.classLastPage},[n("a",{staticClass:"btn-next-page",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.nextPage(t)}}},[e._v(e._s(e.translation.next))])]),e._v(" "),n("li",{staticClass:"page-item"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.currentLimit,expression:"currentLimit"}],staticClass:"tiny-form-select",on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.currentLimit=t.target.multiple?n:n[0]},e.onLimitChange]}},e._l(e.limits,function(t,i){return n("option",{key:i,domProps:{value:t}},[e._v(e._s(t)+"/"+e._s(e.translation.title))])}))])])])},staticRenderFns:[],name:"TinyPagination",props:{total:{type:Number,required:!0},page:{type:Number,default:1},lang:{type:String,default:"en"},customClass:{type:String},limits:{type:Array,default:function(){return[10,15,20,50,100]}}},data:function(){return{currentPage:1,currentLimit:10,translations:{en:{prev:"Previous",title:"Page",next:"Next"},es:{prev:"Anterior",title:"Página",next:"Siguiente"}},availableLanguages:["en","es"]}},created:function(){this.currentPage=this.page},computed:{translation:function(){return this.availableLanguages.includes(this.lang)?this.translations[this.lang]:this.translations.en},totalPages:function(){return Math.ceil(this.total/this.currentLimit)},titlePage:function(){return this.translation.title+" "+this.currentPage},classFirstPage:function(){return{disabled:1===this.currentPage,"c-not-allowed":!0}},classLastPage:function(){return{disabled:this.currentPage===this.totalPages,"c-not-allowed":!0}}},methods:{nextPage:function(){this.currentPage!==this.totalPages&&(this.currentPage+=1)},lastPage:function(){this.currentPage>1&&(this.currentPage-=1)},onLimitChange:function(){this.currentPage=1}},watch:{currentPage:function(e){this.$emit("tiny:change-page",{page:e})},currentLimit:function(e){this.$emit("tiny:change-limit",{limit:e})}}},i={install:t},a=null;"undefined"!=typeof window?a=window.Vue:"undefined"!=typeof global&&(a=global.Vue),a&&a.use(i),e.install=t,e.TinyPagination=n,e.default=i,Object.defineProperty(e,"__esModule",{value:!0})});