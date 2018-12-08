# Using Plugins

To use a plugin, you can configure it in the config file:

```js
// poi.config.js
module.exports = {
  plugins: [
    {
      resolve: '@poi/plugin-typescript',
      options: {}
    }
  ]
}
```

- `resolve`: A plugin package name or the path to it.
- `options`: Optionally pass options to this plugin.

## Naming Convention

Official plugins are published under `@poi` org on npm, like the `@poi/plugin-typescript` plugin.

Community plugins must follow the `poi-plugin-xxx` or `@org/poi-plugin-xxx` naming convention.

## Plugin Short-hand

For official plugins, i.e. published under `@poi` org on npm:

```js
module.exports = {
  plugins: [
    {
      // equivalent to`@poi/plugin-typescript`
      resolve: '@poi/typescript'
    }
  ]
}
```

For community plugins, i.e. the name starts with `poi-plugin-`:

```js
module.exports = {
  plugins: [
    {
      // equivalent to`poi-plugin-foo`
      resolve: 'foo'
    }
  ]
}
```

This also works with community scoped packages:

```js
module.exports = {
  plugins: [
    {
      // equivalent to`@org/poi-plugin-foo`
      resolve: '@org/foo'
    }
  ]
}
```

## Creating A Plugin

A plugin for Poi is an object which consists of following properties:

- `name`: Plugin name.
- `apply`: __Optional__. A method that is used to extend core API.
- `filterPlugins`: __Optional__. A method that is used to remove exiting plugins or add new plugins.

`apply` method accepts two arguments:

- `api`: The [Poi instance](../api.md).
- `options`: The `options` that is passed to this plugin from config file.

```js
exports.name = 'my-plugin'

exports.apply = (api, options = {}) => {
  api.hook('createWebpackChain', config => {
    config.resolve.alias.add('.mdx')
  })
}
```