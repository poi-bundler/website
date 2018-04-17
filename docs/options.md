# Options

You can put the options in a config file, and you can also override it from __CLI flags__: e.g. `poi build --out-dir example/dist` or set something to false: `poi build --no-minimize`.

CLI flags will be automatically camelCased.

## Shared options

These options are shared in all commands.

### entry

- __Type__: `string` `string[]` `object`
- __Default__: `index.js`
- __CLI override__: `poi [entry]`

The entry file of your app.

### outDir

- __Type__: `string`
- __Default__: `dist`
- __CLI flags__: `--out-dir` `-d`

The output directory of bundled files.

### cleanOutDir

- __Type__: `boolean`
- __CLI flags__: `--clean-out-dir`

Clean the output directory before bundling. 

::: warning
We will always clean the output directory when output filename contains [hash](#hash).
:::

### publicPath

- __Type__: `string`
- __Default__: `/`
- __CLI flags__: `--public-path`

This option specifies the public URL of the output directory when referenced in a browser.

### format

- __Type__: `string`
- __Default__: `undefined`
- __Possible values__: `cjs` `umd`
- __CLI flags__: `--format`

Bundle format, not set by default meaning it will be bundled in iife format.

### babel

#### jsx

- __Type__: `string`
- __Default__: `react`
- __Possible values__: `react` `vue` or any JSX pragma like `h` for Preact et al.
- __CLI flags__: `--babel.jsx`

Controlling how to transform JSX.

::: warning
This only works if you __DON'T__ use a custom babel config file.
:::

#### include

- __Type__: `string[]`
- __Default__: `undefined`

Transpile certain modules with Babel.

### css

#### extract

- __Type__: `boolean`
- __Default__: `true` in `poi build`, `false` otherwise.

Extract CSS into standalone files.

#### modules

- __Type__: `boolean`
- __Default__: `false`

Enable CSS modules for all CSS files.

::: tip
CSS modules are enabled by default for `.module.css` etc.
:::

### moduleName

- __Type__: `string`
- __Default__: `undefined`
- __CLI flags__: `--module-name`

When you're bundling in umd [format](#format), you need to set module name so that your library can be accessed via `window.YOUR_MODULE_NAME`.

### env

- __Type__: `boolean`
- __Default__: `true`
- __CLI flags__: `--env`

Load `.env.{NODE_ENV}` file from current working directory, the defined env variables will be available in both Node.js process and your application code.

e.g. It will load `.env.development` file in development build or `.env.production` file in production build.

::: warning
This is not available in config file since env variables should be defined before loading your config file.
:::

### define

- __Type__: `object`
- __Default__: `undefined`

Define global constants which can be configured at compile time.

Please refer to relevant [webpack docs](https://webpack.js.org/plugins/define-plugin/#usage) for more usage of this.

### sourceMap

- __Type__: `boolean` `string`
- __Default__: `source-map` in `poi build`, `inline-source-map` in `poi test`, `eval-source-map` otherwise.
- __Possible values__: any [devtool](https://webpack.js.org/configuration/devtool/#devtool).
- __CLI flags__: `--source-map`

Disable or use custom sourcemap type.

### minimize

- __Type__: `boolean`
- __Default__: `true` in `poi build`, `false` otherwise
- __CLI flags__: `--minimize`

Minimize bundled code.

### filename

#### js

- __Type__: `string`
- __Default__: `[name].[chunkhash:8].js` in `poi build`, `[name].js` otherwise.
- __CLI flags__: `--filename.js`

Output filename for `.js` files.

#### css

- __Type__: `string`
- __Default__: `[name].[chunkhash:8].css` in `poi build`, `[name].css` otherwise.
- __CLI flags__: `--filename.css`

Output filename for `.js` files.

#### chunk

- __Type__: `string`
- __Default__: `[name].[chunkhash:8].js` in `poi build`, `[name].js` otherwise.
- __CLI flags__: `--filename.chunk`

Output filename for lazy-loaded chunk files.

#### font

- __Type__: `string`
- __Default__: `assets/fonts/[name].[hash:8].[ext]` in `poi build`, `assets/fonts/[name].[ext]` otherwise.
- __CLI flags__: `--filename.font`

Output filename for font files.

#### image

- __Type__: `string`
- __Default__: `assets/images/[name].[hash:8].[ext]`
- __CLI flags__: `--filename.image`

Output filename for image files.

### vue

#### fullBuild

- __Type__: `boolean`
- __Default__: `false`

Use [Runtime + Compile](https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only) build of Vue.js,

#### loaderOptions

- __Type__: `object` `loaderOptions => newLoaderOptions`

Merge this object with default options of `vue-loader` using `lodash.merge`.

### html

Options for [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin).

- __Default__:

(`pkg` is the data of your `package.json`)

```js
{
  // Default to `pkg.title` or directory name
  title,
  // Default to `pkg.description`
  description,
  // The environment variables you defined
  env,
  // Entire `pkg`
  pkg
}
```

You can access these options in template file via `htmlWebpackPlugin.options`.

## Dev options

These options are only for `poi` and `poi develop`.

### host

- __Type__: `string`
- __Default__: `process.env.HOST || '0.0.0.0'`

Host for development server.

### port

- __Type__: `number` `string`
- __Default__: `process.env.PORT || 4000`

Port for development server.

### devServer

Options for [webpack-dev-server](https://webpack.js.org/configuration/dev-server/#devserver).

### hotReload

- __Type__: `boolean`
- __Default__: `true` in `poi` and `poi develop`, `false` otherwise

Toggle HMR.

### hotEntry

- __Type__: `string` `string[]`
- __Default__: `main`

Add HMR client to specific entries.

### restartOnFileChanges

- __Type__: `string` `string[]`

Restart the Poi process when specific files are modified.

:::tip
We always watch Poi config file unless this option is set to `false`.
:::

## Build options

These options are only for `poi build`.

### hash

- __Type__: `boolean`
- __Default__: `true`

Toggle hash in [filename](#filename).