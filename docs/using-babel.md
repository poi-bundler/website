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

Please note that Poi supports Vue JSX by default, but you can change it to React JSX or any JSX pragma by using the `babel` option in config file:

[TODO]

```js
module.exports = {
  babel: {
    // React JSX
    jsx: 'react',
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
    include: ['/element-ready/']
  }
}
```
