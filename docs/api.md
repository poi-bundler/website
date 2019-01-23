---
sidebar: auto
---

# API

::: warning
This page is still work-in-progress
:::

Creating a Poi instance:

```js
const poi = new Poi()

console.log(poi.mode)
```

## `constructor(argv?)`

- `argv`: `string[]` Default to `process.argv`

## `mode`

- Type: `string`
- Default: `test`
- Values: `production` `development` `test`

Get the mode that the bundler is running under.

## `cli`

- Type: `CAC`

The CLI instance, created from [CAC](https://github.com/cacjs/cac).

## `command`

- Type: `CAC.Command`

The default command.

## `config`

- Type: `object`

Poi config.

## `resolveCwd(...args: string[])`

Like `path.resolve`.

## `localResolve(pkg)`

- Type: `(pkg: string) => string | null`

Resolve a package from current working directory.

## `localRequire(pkg)`

- Type: `(pkg: string) => string | null`

Require a package from current working directory.

## `getCacheConfig(dir, keys, files?)`

- Type: `(dir: string, keys: {[k: string]: string}, files: string[])`

Get the config for `cache-loader`. `keys` and the contents of `files` are used to generate cache identifier.

## `createWebpackChain(opts?)`

- Type: `(opts: {[k:string]:any}) => WebpackChain`

Create a webpack-chain instance.

`opts` will be available as the second argument of `chainWebpack` in the config file.

## `createWebpackCompiler(config)`

- Type: `(config: WebpackConfig)`

Create a webpack compiler from raw webpack config.


## `hook('createWebpackChain', handler: Handler)`

```ts
type Handler = (config: WebpackChain, opts: Opts) => void

interface Opts {
  type: string
  mode: 'production' | 'development' | 'test'
  [k: string]: any
}
```

## `run()`

- Type: `() => Promise<void>`

Parse CLI args and run commands.