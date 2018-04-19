# @poi/plugin-vue-static

Generating static HTML website with Vue.js!

## How does this work

`@poi/plugin-vue-static` is plugin that generates static HTML pages for you when you run `poi build`, thanks to [vue-server-renderer](https://ssr.vuejs.org/).

In development mode, i.e. when running with the `poi` or `poi develop` command, you app will still be running as an SPA.

## Installation

```bash
yarn add vue-router
yarn add @poi/plugin-vue-static --dev
```

## How to use

__tl;dr__

1. Add `@poi/plugin-vue-static` to config file
2. Export Vue instance (_without mounting_) in entry file
3. Use `vue-router` with `history` mode
4. Ensure the id of root element is `app`

---

Config changes:

📝 __poi.config.js__:

```js
module.exports = {
  entry: './index.js',
  plugins: [
    require('@poi/plugin-vue-static')({
      // The routes to generate
      // Only useful for `poi build`
      routes: ['/'] // default
    })
  ]
}
```

App code changes:

📝 __index.js__:

```js{7,12}
import Vue from 'vue'
import router from './router'
import App from './App.vue'

const app = new Vue({
  // !! Must use vue-router !!
  router,
  render: h => h(App)
})

// Export the Vue instance
export default app
```

📝 __App.vue__:

```vue{3}
<template>
  <!-- The id of outermost element must be set to `app` -->
  <div id="app">
    <router-view />
  </div>
</template>
```

📝 __router.js__:

```js{8}
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // history mode is required!
  mode: 'history',
  routes: [
    // ...
  ]
})
```

### Prefetching data

In a route component, do:

```js
export default {
  // store is the Vuex instance
  // route is the current route
  async prepare({ store, route }) {
    await store.dispatch('fetchUser', route.params.username)
  }
}
```

Your app will only be rendered when `prepare` is resolved.

### Manipulating `<head>`

In any Vue component, do:

```js
export default {
  name: 'HomePage',
  head: {
    title: 'Home - My Website'
  }
}
```

It uses [vue-meta](https://github.com/declandewet/vue-meta) under the hood.

Check out all [supported properties](https://github.com/declandewet/vue-meta#recognized-metainfo-properties) in `head` option.

## Plugin API

### options

#### options.routes

Type: `string[]`<br>
Default: `['/']`

The list of routes to generate.
