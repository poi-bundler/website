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

The plugin name, it's mainly used to retrieve plugin options from config file. For example if the name is `foo`, then we will use `pluginOptions.foo` from config file as the second argument of the [`apply`](#apply) method.

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