---
sidebar: auto
---

# Config Reference

Poi will search `poi.config.js` or `poi` property in `package.json` from your [base directory](cli.md#base-directory), when not found it will search parent directory until reaching `process.cwd()`.

The config is essentially a pure object containing following properties.

```js
module.exports = {
  // ...config
}
```

## entry

- Type: `string` `string[]` `object`
- Default: `./index.js`

The entry files of your app. If a relative path is given, it's resolved from [base directory](cli.md#base-directory).

## outDir

- Type: `string`
- Default: `./dist`.

The directory to write generated files. If a relative path is given, it's resolved from [base directory](cli.md#base-directory).

## publicPath

- Type: `string`
- Default: `/`

Specify public URL of the output directory when referenced in a browser. A relative URL is resolved relative to the HTML page (or `<base>` tag). Server-relative URLs, protocol-relative URLs or absolute URLs are also possible and sometimes required, i. e. when hosting assets on a CDN.

The value of the option is prefixed to every URL created by the runtime or loaders. Because of this the value of this option ends with `/` in most cases.

## html

- Type: `Object`

Customize the HTML template for your app [entry](#entry).

It accepts all options in [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin#options).

## pages

- Type: `Object`
- Default: `undefined`

Build app in multi-page mode. The value should be an object where the key is the name of the page, the value is an object used to customize the page.

When this option is used the [`entry`](#entry) option and [`html`](#html) option will be ignore.

For instance you can generate `index.html` and `sub-page.html` like this:

```js
module.exports = {
  pages: {
    index: {
      entry: './src/index/main.js',
    },
    'sub-page': {
      entry: './src/sub-page/main.js'
    }
  }
}
```

Properties:

- `entry`: **required**. The entry files of this page, pretty much the same as [config.entry](#entry) option but for this page.
- `title`: The title that is used in `<title></title>` in the generated HTML file. It defaults to `pkg.title || 'Poi App'` where the `pkg` the data of your project's `package.json`.
- `filename`: The filename of generated HTML file, it default to `$page_name + '.html'`.
- `template`: The template HTML file that is used to render the generated HTML file. If not given, a default template file will be used.
- `chunks`: Include specific chunks in this page. Pages by default will always generate a `$page_name` chunk, optionally with `chunk-vendors` chunk and `chunk-common` chunk in production build, these chunks are included by default. You can use this option to customize it.
- ...basically all options in [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin#options).

## constants

- Type: `{[k: string]: string | number | boolean}`

Create global constants which can be configured at compile time.

## sourceMap

- Type: `boolean`
- Default: `true`

Whether to generate sourcemaps for `.js` and `.css` files

Generating sourcemaps in production build is useful for error reporting, analysing bundle size etc. However if you don't want sourcemaps, you can feel free to disable it.

## minimize

- Type: `boolean`
- Default: `undefined` which means `true` in production build, `false` otherwise

Minimize bundled JS and CSS files.

## babel.transpileModules

- Type: `string[]` `RegExp[]`

By default Babel would only transpile modules outside `node_modules` directory, however you can use this option to include certain modules.

## babel.defaultPresetOptions

- Type: `Object`

Specify the options of the default Babel preset we use:

- `jsx`: `default: 'react'` You can also set it to `'vue'` or any JSX pragma like `'h'` for Preact. This can be overridden via CLI flag `--jsx`.
- `jsxPragmaFrag`: `default: 'React.createFragment'`
- `loose`: `default: false` Enable loose transformation.

Note that the default Babel preset will not be used if you're using a custom Babel config file, however you can still add the preset to your Babel config file if you want:

```js
module.exports = {
  presets: [
    ['module:poi/babel', defaultPresetOptions]
  ]
}
```

## css.extract

- Type: `boolean`
- Default: `undefined` which means `true` in production mode, `false` otherwise

Whether to extract CSS into standalone `.css` files.

## css.loaderOptions

- Type: `Object`

Specify custom options for the CSS loaders:

```js
module.exports = {
  css: {
    loaderOptions: {
      // For sass-loader
      sass: {},
      // For stylus-loader
      stylus: {},
      // For less-loader
      less: {}
    }
  }
}
```

## filenameHash

- Type: `boolean`
- Default: `undefined` which means `true` in production mode, `false` otherwise.

By default, generated static assets contains hashes in their filenames for better caching control in production mode.


## filenames

- Type: `Filenames`
- Default: See [source code](https://github.com/egoist/poi/blob/8b20726a18407acc89569719343eeaf83ac23ff4/packages/poi/lib/utils/get-filenames.js#L4-L21).

If you want advanced filenames customization, use this option. Basically you can change the filename for all types of generated static assets.

```ts
interface Filenames {
  js?: string
  css?: string
  /* Async chunks */
  chunk?: string
  font?: string
  image?: string
}
```

## devServer

Options for [webpack-dev-server](https://webpack.js.org/configuration/dev-server/#devserver).

Addtional options:

- `devServer.hotEntries`: `default: ['index']` Make specific entry hot reloadable.

## chainWebpack

- Type: `(config: WebpackChain, opts: Opts) => void`

A function that is used to manipulate the internal [webpack-chain](https://github.com/mozilla-neutrino/webpack-chain) instance.

```ts
interface Opts {
  // 'client' by default
  type: string
  [k: string]: any
}
```


## plugins

- Type: `Array<Plugin>`

An array of plugins:

```ts
interface Plugin {
  /* A path to a local plugin or an npm package name */
  resolve: string
  options: any
}
```