# Transforms

Here's a list of built-in transforms that Poi supports, for other types of files you may need a plugin instead.

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
- Stylus: `yarn add stylus stylus-loader --dev`
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

## GraphQL

GraphQL file is automatically transformed by [graphql-tag/loader](https://github.com/apollographql/graphql-tag).

## Reason / OCaml


Poi uses [BuckleScript](https://bucklescript.github.io/) to compile Reason/Ocaml to JavaScript.

You need to install bs-platform and create a bsconfig.json in your project:

```bash
yarn add bs-platform --dev
```

[Sample `bsconfig.json`](https://github.com/BuckleScript/bucklescript/blob/master/jscomp/bsb/templates/basic-reason/bsconfig.json):

```json
{
  "name": "whatever",
  "sources": {
    "dir": "src",
    "subdirs": true
  },
  "package-specs": {
    "module": "es6",
    "in-source": true
  },
  "suffix": ".bs.js",
  "bs-dependencies": [
  ],
  "warnings": {
    "error": "+101"
  },
  "namespace": true,
  "refmt": 3
}
```

📝 __src/index.js__:

```js
import { sum } from './sum.re'

console.log(sum(1, 2))
//=> 3
```

📝 __src/sum.re__:

```reason
let sum = (x, y) => x + y;
```

## Pug

To import `.pug` files, you should have `pug-loader` and `pug` installed in your project:

```bash
yarn add pug-loader pug --dev
```

Then you can use it like this:

```js
import template from './file.pug'

const html = template({/* locals */})
```

To use `pug` in `<template>` block in `.vue` file, you need to install `pug-plain-loader` instead:

```bash
yarn add pug-plain-loader pug --dev
```

```vue
<template lang="pug">
  .message Hello {{ message }}
</template>
```


