---
id: using-babel
title: Using Babel
---

Poi uses [babel-preset-poi](https://github.com/egoist/poi/blob/master/packages/babel-preset-poi/README.md) which includes following features:

- JSX (React / Vue / Custom)
- babel-preset-env (IE9+)
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

## Transpile modules in `node_modules`

A module inside `node_modules` won't be transpiled by Babel, but you can still transpile certains modules if you want:

```js
module.exports = {
  babel: {
    // Include certain module names
    include: ['element-ready']
  }
}
```
