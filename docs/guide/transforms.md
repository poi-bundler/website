# Transforms

In Poi, you can reference a file in another one, they are so-called assets. For many kinds of assets, Poi will perform proper transformations, e.g. transform ES2015 syntax to ES5 using Babel.

Here's a list of all built-in transforms:

|Type|Associated Extension(s)|Required Dependencie(s)|
|---|---|---|
|JavaScript|`.js` `.jsx`||
|Vue|`.vue`|`vue` `vue-template-compiler`|
|CoffeeScript|`.coffee`|`coffee-loader` `coffeescript`|
|GraphQL|`.gql` `.graphql`|`graphql-tag`|
|YAML|`.yml` `.yaml`|`yaml-loader`|
|TOML|`.toml`|`toml-loader`|
|JSON|`.json`||
|ReasonML|`.re`|`@poi/plugin-reason` `bs-platform`|
|CSS|`.css`|
|SCSS|`.scss`|`sass-loader` `sass`|
|SASS|`.sass`|`sass-loader` `sass`|
|LESS|`.less`|`less-loader` `less`|
|Stylus|`.styl` `.stylus`|`stylus-loader` `stylus`|
|CSS modules|`.module.{css,less,styl,stylus,sass,scss}`||


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
    ['module:poi/babel', options]
  ]
}
```

#### options.jsx

- Type: `'react' | 'vue' | string`
- Default: Automatically inferred.

JSX syntax is automatically inferred from your project's dependencies by this order:

- When `vue` is installed, set to `'vue'`
- When `preact` is installed, set to `'h'`
- When `mithril` is installed, set to `'m'`
- Otherwise `'react'`

#### options.flow

- Type: `boolean`
- Default: `true`

Enable Flow support.

#### options.typescript

- Type: `boolean`
- Default: `true`

Enable TypeScript support, only apply to `.tsx?` files and `lang="ts"` block in `.vue` files. 

## CSS

CSS files will be processed by [PostCSS](https://postcss.org/) when a PostCSS config file is found in your project.

### Pre-Processors

Common CSS pre-processors are also supported but you need to install relevant loaders manually in your project:

```bash
# Sass
yarn add sass-loader node-sass --dev

# Less
yarn add less-loader less --dev

# Stylus
yarn add stylus-loader stylus --dev
```

### CSS Modules

To import CSS or other pre-processor files as CSS Modules in JavaScript, the filename should end with `.module.(css|less|sass|scss|styl)`:

```js
import styles from './foo.module.css'
// works for all supported pre-processors as well
import sassStyles from './foo.module.scss'
```

### Passing Options to Pre-Processor Loaders

Sometimes you may want to pass options to the pre-processor's webpack loader. You can do that using the css.loaderOptions option in `poi.config.js`. For example, to pass some shared global variables to all your Sass styles:

```js
// poi.config.js
module.exports = {
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "@/variables.scss";`
      }
    }
  }
}
```

## Reason/BuckleScript

ReasonML compiles OCaml to JavaScript with the help of BuckleScript. You can use ReasonML by installing dependencies and creating `bsconfig.json`:

```bash
yarn add @poi/plugin-reason@next bs-platform --dev
```

📝 __poi.config.js:__

```js
module.exports = {
  entry: './src/index.re'
  plugins: [
    {
      resolve: '@poi/plugin-reason'
    }
  ]
}
```

📝 __bsconfig.json:__

```json
{
  "name": "whatever",
  "sources": {
    "dir": "src",
    "subdirs": true
  },
  "package-specs": {
    "module": "commonjs",
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

📝 __src/index.re:__

```reason
print_endline("Hello World");
```