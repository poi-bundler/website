---
sidebar: auto
---

# Plugin Dev Guide

::: warning
This page is still work-in-progress
:::

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

- Type: `string`
- Required: `true`

The plugin name.

### apply

- Type: `(api: PluginAPI, options: any) => void`
- Required: `false`


## Plugin API

### api.mode

- Type: `string`
- Default: `test`
- Values: `production` `development` `test`

Get the mode that the bundler is running under.

### api.cli

- Type: `CAC`

The CLI instance, created from [CAC](https://github.com/cacjs/cac).

### api.config

- Type: `object`

Poi config.

### api.hook

### api.hook('onCreateCLI', handler: Handler)

```ts
type Handler = (opts: Opts) => void

interface Opts {
  /** The default Poi command */
  command: Command
  /** CLI args */
  args: Args
}

interface Args {
  has: (arg: string) => boolean
  value: (arg: string) => any
}
```

### api.hook('onCreateWebpackConfig', handler: Handler)

```ts
type Handler = (config: WebpackChain, opts: Opts) => void

interface Opts {
  /**
  * @default 'client'
  */
  type: string
  [k: string]: any
}
```