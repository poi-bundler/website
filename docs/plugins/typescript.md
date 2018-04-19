# @poi/plugin-typescript

## Installation

```bash
yarn add typescript @poi/plugin-typescript --dev
```

## How to use

```js
// poi.config.js
module.exports = {
  plugins: [
    require('@poi/plugin-typescript')(/* options */)
  ]
}
```

You will also need a `tsconfig.json` in your project, to make it work in Vue project, please check out [https://vuejs.org/v2/guide/typescript.html ](https://vuejs.org/v2/guide/typescript.html).

## Plugin API

### options

#### options.loaderOptions

Options for `ts-loader`.

#### options.tsChecker

Options for [fork-ts-checker-webpack-plugin](https://github.com/Realytics/fork-ts-checker-webpack-plugin)

Default:

```js
{
  vue: true
}
```