---
sidebar: auto
---

# Plugin Dev Guide

## Overview

A plugin is essential an object with some properties or methods like `name`, `apply` etc.

```js
exports.name = 'foo'

exports.apply = (api, options) => {
  // ...
}
```

## Properties and Methods

### name

- __Type__: `string`
- __Required__: `true`

The plugin name which has no meaningful reason of existence for now.

### apply

- __Type__: `(api: PluginAPI, options: any) => void`
- __Required__: `false`

### commandInternals

- __Type__: `CommandInternals`

Set the internal config for commands. For example we set the mode to `production` in the plugin that adds the `build` command:

```js
exports.commandInternals = {
  build: {
    mode: 'production'
  }
}
```

The type is:

```ts
interface CommandInternals {
  mode?: 'production' | 'development'
  watchPkg?: boolean
}
```

## Plugin API

### api.command

- Type: `string`

Get the current command.

### api.mode

- Type: `string`

Get the mode that the bundler is running under.

### api.chainWebpack

Using [webpack-chain](https://github.com/mozilla-neutrino/webpack-chain) to modify internal webpack config.

```js
api.chainWebpack(config => {
  // `config` is a webpack-chain instance
})
```

### api.configureDevServer

Extending the dev server ([Express](https://expressjs.com/en/4x/api.html#app)) instance.

```js
api.configureDevServer(server => {
  server.get('/foo', (req, res) => res.send('foo'))
})
```

### api.resolve

Resolve path from base directory.

```js
api.resolve('foo.js')
```

### api.resolveWebpackConfig

Resolve webpack config object. By calling this method, Poi will create a fresh instance of webpack-chain and run all `chainWebpack` functions against it.

```js
api.resolveWebpackConfig(opts)
```

`opts` is optional here, it will be merged with `{ type: 'client'}` and used as the second argument of each `chainWebpack` function:

```js
// You can call this multiple times to get multiple webpack configs
const serverConfig = api.resolveWebpackConfig({ type: 'server' })
const clientConfig = api.resolveWebpackConfig()

api.chainWebpack((config, { type } => {
  // now `type` will be `server` or `client`
  if (type === 'server') {
    // Do something to server config
  }
}))
```

### api.runWebpack

Run webpack compiler:

```js
const webpackConfig = api.resolveWebpackConfig()

api.runWebpack(webpackConfig)
  .then(stats => {
    console.log(stats.toString())
  })
```