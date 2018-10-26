# Static Websites in Vue.js

You might be familar with building a SPA using Vue, Vue Router and Poi (webpack) already, here we're introducing a Poi plugin that pre-renders each page of your SPA using vue-server-renderer at build time.

## Install

Install this plugin in a Vue project:

```bash
yarn add @poi/plugin-vue-static@next --dev
```

You should also ensure these dependencies are installed in your project:

```bash
yarn add vue vue-template-compiler
yarn add poi@next --dev # How dare you forget this?
```

Now you can load this plugin in `poi.config.js`:

```js {5}
module.exports = {
  entry: './src/index.js',
  plugins: [
    {
      resolve: '@poi/plugin-vue-static'
    }
  ]
}
```

And update npm scripts in `package.json` as follows:

```json
{
  "scripts": {
    "dev": "poi dev",
    "build": "poi build",
    "generate": "poi generate"
  }
}
```

Notably:

- `entry` file is now optional.
- The behavior of `poi build` does NOT change.
- `poi generate` will build the assets AND generate static HTML files.

## Adding a Page

`vue-static` uses the file system as the router API, basically it automatically loads `pages/**/*.{vue,js}` (with an exception of dot files and files starting with underscore) as route records for `vue-router` when the folder exists.

Populate a `pages/index.vue` in your project:

```vue
<template>
  <div>
    <h1>Hello Poi!</h1>
  </div>
</template>
```

Now run `poi dev` in your project, you can see a big `Hello Poi!` right in front of your eyes.

Notably, when running with `poi dev`, the app is still rendered as a normal SPA, no server-side rendering is involved.

### Dynamic Routes

To define a dynamic route with a parameter, you need to define a page component OR a directory in `[name]` format which will be transformed to `:name`.

```bash
pages/
--| [slug]/
-----| comments.vue
-----| index.vue
--| users/
-----| [id].vue
--| index.vue
```

Will be transformed to following routes:

```js
[
  {
    path: '/',
    component: 'pages/index.vue'
  },
  {
    path: '/users/:id',
    component: 'pages/users/[id].vue'
  },
  {
    path: '/:slug',
    component: 'pages/[slug]/index.vue'
  },
  {
    path: '/:slug/comments',
    component: 'pages/[slug]/comments.vue'
  }
]
```

::: warning
Dynamic routes can't be automaitcally generated into static HTML pages by `poi generate` command, check out [this](#generate-static-website) for solutions.
:::

### Nested Routes

[Nested routes](https://router.vuejs.org/guide/essentials/nested-routes.html) in vue-router is also supported by the file system API:

```bash
pages/
--| users/
-----| [id].vue
-----| index.vue
--| users.vue
```

will give you:

```js
[
  {
    path: '/users',
    component: 'pages/users.vue',
    children: [
      {
        path: '',
        component: 'pages/users/index.vue',
      },
      {
        path: ':id',
        component: 'pages/users/[id].vue',
      }
    ]
  }
]
```

## Entry File

Entry file is optional when `vue-static` plugin is enabled, you'll only need it when you want customizations, such as using your own `vue-router` instance:

```js
// src/index.js
import Router from 'vue-router'

export default () => {
  const router = new Router({
    mode: 'history',
    // Maybe adding some routes at runtime instead of using `pages` folder?
    // routes: []
  })

  // Returned object will be used as the options 
  // for root Vue instance
  return {
    router
  }
}
```

## Generate Static Website

Now we are talking about the fun part. `vue-static` introduces a new command `poi generate` which builds the assets first and then renders the app into static HTML files, using `vue-server-renderer`. It works pretty much the same as VuePress and the `nuxt generate` command in Nuxt.js.

By default this command requires no config unless you're using [dynamic routes](#dynamic-routes), or adding routes via `router.addRoutes(routes)` at runtime. If you do, you should manually add those routes via `staticRoutes` option:

```js
// poi.config.js
// Assuming you have created a dynamic route: `pages/user/[user].vue`
module.exports = {
  entry: './src/index.js',
  plugins: [
    {
      resolve: '@poi/plugin-vue-static',
      options: {
        staticRoutes: [
          '/user/egoist',
          '/user/cristiano'
        ]
      }
    }
  ]
}
```

## FAQ

### How do I modify webpack config for specific build?

The `chainWebpack` option actually has a second argument:

```js
// poi.config.js
module.exports = {
  chainWebpack(config, { type }) {
    console.log(type)
  }
}
```

Without this plugin, `type` always equals to `'client'`. When using `vue-static` plugin it will be `'server'` for server build.

Notably:

- There's only client build when running `poi dev` or `poi build` since it still renders as SPA only.
- `poi generate` will generate two builds, client build and server build.

### How do I write code applying to client build only?

Via the environment variable in your app code:

```js
if (process.server) {
  // this is the server build
}
if (process.client) {
  // this is the client build
  // you can safely access browser API here
  // like `window.document`
}
```

## Showcase

A list of websites built with `vue-static`:

- [Vue Land](https://vue-land.js.org): website for Vue Land the official Vue.js Discord Community.