<template>
  <div id="app">
    <section class="section-hero">
      <div class="grid-hero container grid-lg text-center">
        <img src="https://vuejs.org/images/logo.png" width="150">
        <h1>&lt;vue-tiny-pagination /&gt;</h1>
        <h2>a Vue component for create a <u>tiny</u> pagination</h2>
        <p class="text-gray">
          <a href="https://github.com/coderdiaz/vue-tiny-pagination" target="_blank">GitHub</a> | Latest version: <span class="version"></span>
        </p>
      </div>
    </section>
    <section class="section-features bg-primary text-center">
      <div class="container grid-lg">
        <h2>Introduction</h2>
        <div class="columns">
          <div class="column col-10 col-sm-12 col-mx-auto">
            <p class="text-secondary">
              This component provides a basic styles for pagination and a minimalistic design. This pagination can be used for paginate tables, data lists, etc.
            </p>
            <p class="text-center">
              <tiny-pagination
                :total="3000"
                custom-class="tiny-white"></tiny-pagination>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-usage bg-gray">
      <div class="container grid-lg">
        <h2>Installation</h2>
        <p class="h5">Install with NPM</p>
        <pre class="code" data-lang="Bash"><code><span class="tag">$</span>npm install <span class="atv">vue-tiny-pagination</span> --save</code></pre>
        <p class="h5">Install with Yarn</p>
        <pre class="code" data-lang="Bash"><code><span class="tag">$</span>yarn add <span class="atv">vue-tiny-pagination</span></code></pre>
        <br>
        <h2>Basic usage</h2>
        <pre class="code" data-lang="HTML"><code>&lt;<span class="tag">div</span> id=<span class="atv">"app"</span>&gt;
  &lt;<span class="tag">tiny-pagination</span>&gt;
  <span class="tag">:total</span>=<span class="atv">"total"</span>
  <span class="tag">@tiny:change-page</span>=<span class="atv">"changePage"</span>&gt;&lt;/<span class="tag">tiny-pagination</span>&gt;
&lt;/<span class="tag">div</span>&gt;</code></pre>
        <pre class="code" data-lang="Javascript"><code><span class="tag">import</span> Vue <span class="tag">from</span> <span class="atv">'vue'</span>
<span class="tag">import</span> TinyPagination <span class="tag">from</span> <span class="atv">'vue-tiny-pagination'</span>

<span class="tag">new</span> <span class="tag">Vue</span>({
  <span class="tag">el</span>: <span class="atv">'#app'</span>,
  <span class="tag">data ()</span> {
    <span class="tag">return</span> {
      total: <span class="atv">100</span>,
      currentPage: <span class="atv">1</span>
    }
  },
  <span class="tag">methods</span>: {
    <span class="tag">changePage</span> (pagination) {
      console.log(pagination.page)
    }
  },
  <span class="tag">components</span>: {
    TinyPagination
  }
})</code></pre>
        <br>
        <h2>Basic Example</h2>
        <div class="panel">
          <div class="panel-body custom-panel">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>First Name</th>
                  <th>Last name</th>
                  <th></th>
                </tr>
              </thead>
              <tbody v-if="users">
                <tr v-for="user in users" :key="user.id">
                  <td>{{user.id}}</td>
                  <td>{{user.first_name}}</td>
                  <td>{{user.last_name}}</td>
                  <td>
                    <figure class="avatar avatar-xl">
                      <img :src="user.avatar" :alt="user.first_name">
                    </figure>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br>
        <div class="divider text-center" data-content="PAGINATION"></div>
        <br>
        <div class="pagination centered bg-primary">
          <tiny-pagination
            :total="currentTotal"
            custom-class="custom-tiny-class"
            @tiny:change-page="changePage"
            @tiny:change-limit="changeLimit"></tiny-pagination>
        </div>
        <br>
        <kbd>Current page: {{currentPage}}</kbd>
        <br><br>
        <kbd>Total items: {{currentTotal}}</kbd>
        <br>
        <br>
        <h2>Documentation</h2>
        <h5>Props</h5>
        <div class="panel">
          <div class="panel-body custom-panel">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>total <i>(required)</i></td>
                  <td>Number</td>
                  <td>-</td>
                  <td>A number of total items.</td>
                </tr>
                <tr>
                  <td>page</td>
                  <td>Number</td>
                  <td>1</td>
                  <td>Prop to set a default page.</td>
                </tr>
                <tr>
                  <td>lang</td>
                  <td>String</td>
                  <td>en</td>
                  <td>Default language to show (<i>Available: en, es</i>).</td>
                </tr>
                <tr>
                  <td>customClass</td>
                  <td>String</td>
                  <td>""</td>
                  <td>Prop to set a custom class.</td>
                </tr>
                <tr>
                  <td>limits</td>
                  <td>Array</td>
                  <td>[10, 15, 20, 50, 100]</td>
                  <td>Prop to set a default limits to page sizes.</td>
                </tr>
                <tr>
                  <td>showLimit</td>
                  <td>Boolean</td>
                  <td>true</td>
                  <td>Prop to disable the limit selector.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br>
        <h5>Events</h5>
        <div class="panel">
          <div class="panel-body custom-panel">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>tiny:change-page</td>
                  <td>Get the current page from pagination <code>payload: {page: 1}</code>.</td>
                </tr>
                <tr>
                  <td>tiny:change-limit</td>
                  <td>Get the current limit from pagination <code>payload: {limit: 10}</code>.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br>
        <br>
        <div class="divider text-center" data-content="WHAT'S NEW"></div>
        <br>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-left">
              <a href="#timeline-example-1" class="timeline-icon tooltip" data-tooltip="February 2017"></a>
            </div>
            <div class="timeline-content">
              <div class="tile">
                <div class="tile-content">
                  <p class="tile-subtitle">February, 2017</p>
                  <p class="tile-title"><span class="text-primary">[v0.1.0]</span> Initial commit and first release.</p>
                  <p class="tile-title"><span class="text-primary">[v0.1.1]</span> Updated typo on README.md.</p>
                  <p class="tile-title"><span class="text-primary">[v0.1.2]</span>  Changed default pageSize from <code>15 to 10</code>. Added cursor <code>not-allowed</code> for disabled page-items.</p>
                  <p class="tile-title"><span class="text-primary">[v0.2.0]</span> Added prop for items per page and event for <code>$emit</code> the current limit (<code>payload: {limit: 10}</code>). Added testing for minor functionality.</p>
                  <p class="tile-title"><span class="text-primary">[v0.2.1]</span> Added builds for use in browser and refactoring project structure.</p>
                  <p class="tile-title"><span class="text-primary">[v0.2.2]</span> Now you can disable a limit selector using a <code>showLimit</code> prop.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-left">
              <a href="#timeline-example-1" class="timeline-icon tooltip" data-tooltip="February 2017"></a>
            </div>
            <div class="timeline-content">
              <div class="tile">
                <div class="tile-content">
                  <p class="tile-subtitle">March, 2017</p>
                  <p class="tile-title"><span class="text-primary">[v0.2.1]</span> Added builds for use in browser and refactoring project structure.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-left">
              <a href="#timeline-example-1" class="timeline-icon tooltip" data-tooltip="February 2017"></a>
            </div>
            <div class="timeline-content">
              <div class="tile">
                <div class="tile-content">
                  <p class="tile-subtitle">April, 2017</p>
                  <p class="tile-title"><span class="text-primary">[v0.2.2]</span> Now you can disable a limit selector using a <code>showLimit</code> prop.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="section-footer">
      <div  class="grid-footer container grid-lg">
        <p><a href="https://dribbble.com/coderdiaz" target="_blank">Dribbble</a> | <a href="https://github.com/coderdiaz/vue-tiny-pagination" target="_blank">GitHub</a> | Version <span class="version"></span></p>
        <p>Designed and built with <span class="text-error">♥</span> by <a href="https://twitter.com/coderdiaz" target="_blank">Javier Diaz</a>. Licensed under the <a href="https://github.com/coderdiaz/vue-tiny-pagination/blob/master/LICENSE" target="_blank">MIT License</a>.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import {getUsers} from './services/api'
import TinyPagination from "./components/TinyPagination";
export default {
  name: "app",
  data() {
    return {
      currentTotal: 0,
      currentPage: 1,
      currentLimit: 10,
      message: "A Vue component for create tiny pagination",
      users: [],
      error: {
        status: false,
        message: ''
      }
    };
  },
  created () {
    this.getData(this.currentPage)
  },
  methods: {
    getData (page, limit) {
      this.error.status = false
      getUsers(page, limit).then((response) => {
        this.users = response.data.data
        this.currentTotal = response.data.total
      }).catch((err) => {
        this.error.status = true
        this.error.message = err.message
      })  
    },
    changePage(pagination) {
      this.currentPage = pagination.page
      this.getData(this.currentPage, this.currentLimit)
    },
    changeLimit (payload) {
      this.currentLimit = payload.limit
      this.getData(this.currentPage, this.currentLimit)
    }
  },
  components: {
    TinyPagination
  }
};
</script>

<style lang="scss" src="./_scss/main.scss"></style>
