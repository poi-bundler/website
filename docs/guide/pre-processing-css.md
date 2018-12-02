# Pre-Processing CSS

CSS pre-processors like Sass, SCSS, Less and Stylus are still popular today, so it's natual that Poi supports them out of the box. However relevant dependencies for transpilation are required, be sure to follow the installation instructions below.

## Sass / SCSS

```bash
yarn add sass-loader node-sass --dev
```

Then you can import `.scss` and `.sass` files. If you want to import files from `node_modules`, make sure to add `~` prefix as follows:

```scss
// importing a css file from the nprogress node module
@import '~nprogress/nprogress'; 
```

::: tip
Since `node-sass` requires a native library which may be difficult to install, you can also used the [`sass`](https://www.npmjs.com/package/sass) package which is compiled from [`dart-sass`](https://github.com/sass/dart-sass).
:::

## Less

```bash
yarn add less-loader less --dev
```

## Stylus

```bash
yarn add stylus-loader stylus --dev
```

## Passing Options to Pre-Processor Loaders


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