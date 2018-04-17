# Migrate from 9 to 10

## Presets

Presets are now ___Plugins___, and the official ones are published under the `@poi` organization on npm. e.g. for the old `poi-preset-karma` now it becomes:

```js
// poi.config.js
module.exports = {
  plugins: [
    require('@poi/plugin-karma')()
  ]
}
```

Third-party plugins follow the `poi-plugin-name` naming convention.

## Options

### dist

[dist](https://poi9.netlify.com/#/options?id=dist) is now [outDir](/options.md#outdir).

### homepage

[homepage](https://poi9.netlify.com/#/options?id=homepage) is now [publicPath](/options.md#publicpath).

### jsx

[jsx](https://poi9.netlify.com/#/options?id=jsx) is now [babel.jsx](/options.md#jsx), and defaults to `react` instead of `vue`.

### transformModules

[transformModules](https://poi9.netlify.com/#/options?id=transformmodules) is now [babel.include](/options.md#include).

### postcss

[postcss](https://poi9.netlify.com/#/options?id=postcss) option is removed, you should use the postcss config file instead.

### autoprefixer

This option is also removed.

### cssModules

[cssModules](https://poi9.netlify.com/#/options?id=cssmodules) is now [css.modules](/options.md#modules).

### extractCSS

[extractCSS](https://poi9.netlify.com/#/options?id=extractcss) is now [css.extract](/options.md#extract).

### env

[env](https://poi9.netlify.com/#/options?id=env) is now a boolean value, which indicates [whether to load `.env.{process.env.NODE_ENV}` file](/options.md#env).

### templateCompiler

[templateCompiler](https://poi9.netlify.com/#/options?id=templatecompiler) is now [vue.fullBuild](/options.md#fullbuild).

### removeDist

[removeDist](https://poi9.netlify.com/#/options?id=removedist) is now [cleanOutDir](/options.md#cleanoutdir).

### library

[TODO]

### vendor

[TODO]

### extendWebpack

This option is renamed to `chainWebpack`, but the old name still works.

### webpack

This option is renamed to `configureWebpack`, but the old name still works.