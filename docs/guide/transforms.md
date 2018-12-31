# Transforms

In Poi, you can reference a file in another one, they are so-called assets. For many kinds of assets, Poi will perform proper transformations, e.g. transform ES2015 syntax to ES5 using Babel.

Here's a list of all built-in transforms:

|Type|Associated Extension(s)|Required Dependencie(s)|
|---|---|---|
|JavaScript|`.js` `.jsx`|🎉|
|TypeScript|`.ts` `.tsx`|🎉|
|Vue|`.vue`|`vue` `vue-template-compiler`|
|CoffeeScript|`.coffee`|`coffee-loader` `coffeescript`|
|ReasonML|`.re` `.ml`|`@poi/plugin-reason` `ba-platform`|
|GraphQL|`.gql` `.graphql`|`graphql-tag`|
|YAML|`.yml` `.yaml`|`yaml-loader`|
|TOML|`.toml`|`toml-loader`|
|JSON|`.json`|🎉|
|CSS|`.css`|🎉|
|SCSS|`.scss`|`sass-loader` `node-sass`|
|Sass|`.sass`|`sass-loader` `node-sass`|
|LESS|`.less`|`less-loader` `less`|
|Stylus|`.styl` `.stylus`|`stylus-loader` `stylus`|
|CSS modules|`.module.{css,less,styl,stylus,sass,scss}`|🎉 The dependencies mentioned above are required for pre-processing, but `CSS modules` works out of the box|


## JavaScript

JavaScript is transpiled by [Babel](https://babeljs.io/docs/en) which is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in old browsers or environments.

When Babel config file was not found in your project root, Poi will use a default [Babel preset](https://github.com/egoist/poi/blob/master/packages/poi/lib/babel/preset.js) which includes everything needed for building a modern web app:

- ES2015 features
- [Async/await](https://github.com/tc39/ecmascript-asyncawait) (ES2017)
- [JSX](https://facebook.github.io/react/docs/introducing-jsx.html) syntax (React, Vue or custom JSX pragma)
- Strip [Flow](https://flow.org/) and [TypeScript](http://www.typescriptlang.org/) types (Does not type-check its input)
- [Object Rest/Spread Properties](https://github.com/tc39/proposal-object-rest-spread) (ES2018)
- [Class Fields and Static Properties](https://github.com/tc39/proposal-class-public-fields) (part of stage 3 proposal)
- [Dynamic import](https://github.com/tc39/proposal-dynamic-import) (part of stage 3 proposal)
- [babel-plugin-macros](https://github.com/kentcdodds/babel-plugin-macros)

::: warning
Poi does not add polyfills to your app, if you use some language features that require runtime polyfills (such as `Array.from` or `Object.assign`), make sure you are including the appropriate polyfills manually, or that the browsers you are targeting already support them.
:::

### Preset Options

You can use the default preset with some customzations:

```js
// babel.config.js
module.exports = {
  presets: [
    ['poi/babel', options]
  ]
}
```

#### options.jsx

- Type: `'react' | 'vue' | string`
- Default: `'react'`

#### options.flow

- Type: `boolean`
- Default: `true`

Enable Flow support.

#### options.typescript

- Type: `boolean`
- Default: `true`

Enable TypeScript support, only apply to `.tsx?` files and `lang="ts"` block in `.vue` files. 

## TypeScript

Our default Babel preset will use [`@babel/preset-typescript`](https://babeljs.io/docs/en/babel-preset-typescript) to transpile your TypeScript files, however sometimes you just can't use it:

- You're not using our default Babel preset.
- You don't want to use Babel at all.
- You miss the TypeScript features that `@babel/preset-typescript` doesn't support yet.
- You want type-checking at compile time.

But don't worry, we always get you covered. You can use [@poi/plugin-typescript](./plugin-typescript.md) instead to transpile TypeScript with the official `typescript` compiler.
