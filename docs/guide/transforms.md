# Transforms

## Babel

Poi uses [babel-preset-poi](https://github.com/egoist/poi/blob/master/packages/babel-preset-poi/README.md) which includes following features:

- JSX (React / Vue / Custom)
- babel-preset-env (IE9+ or `node: 'current'` in test env)
- babel-macros
- transform-runtime
- dynamic-import
- object-rest-spread
- decorators-legacy
- class-properties

Please note that Poi supports React JSX by default, but you can change it to Vue JSX or any JSX pragma by using the `babel` option in config file:

```js
module.exports = {
  babel: {
    // Vue JSX
    jsx: 'vue',
    // Or `h` for preact
    jsx: 'h'
  }
}
```

However it's recommended to use `.babelrc` for this so that other tools like ESLint can use the same config.

### Transpile modules in `node_modules`

A module inside `node_modules` won't be transpiled by Babel, but you can still transpile certains modules if you want:

```js
module.exports = {
  babel: {
    // Include certain module names
    include: ['element-ready']
  }
}
```

### Using `.babelrc`

Poi will respect `.babelrc` or any kind of babel config file in current working directory (`process.cwd()`). It will use this file instead of the default `babel-preset-poi` when it's present.

## CSS

List of CSS transformations:

- `.css`: By PostCSS
- `.scss` `.sass`: By PostCSS and Sass
- `.styl` `.stylus`: By PostCSS and Stylus
- `.less`: By PostCSS and Less

### PostCSS

This works out of the box.

By default we don't use any PostCSS plugins, feel free to add `postcss.config.js` or any kind of PostCSS config file in your project, it will be automatically picked up by Poi.

### Sass/Stylus/Less

For these preprocessors to work, you need to install loader and compiler:

- Sass: `yarn add node-sass sass-loader --dev`
- Stylus: `yarn add stylus stylus-loader`
- Less: `yarn add less less-loader --dev`

### CSS modules

CSS modules is supported by default __without any configuration__, any file ending with `.module.css` `.module.scss` `.module.less` etc will be treat as CSS modules.

### Vue

To use PostCSS in Vue single-file component (`.vue`), no changes are required!

```vue
<style>
body {
  color: red
}
</style>
```

To use Sass/Stylus/Less, you need to set the `lang` attribute:

```vue
<style lang="scss">
.foo {
  .bar {
    color: red;
  }
}
</style>

<style lang="sass">
.foo
  .bar
    color: red;
</style>

<style lang="stylus" src="./external/style.styl">
```