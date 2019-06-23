# Customizing Webpack Config

Poi uses a module called [webpack-chain](https://github.com/neutrinojs/webpack-chain) to create and manage the internal webpack config that is used to bundle your app.

> webpack's core configuration is based on creating and modifying a potentially unwieldy JavaScript object. While this is OK for configurations on individual projects, trying to share these objects across projects and make subsequent modifications gets messy, as you need to have a deep understanding of the underlying object structure to make those changes.
>
> webpack-chain attempts to improve this process by providing a chainable or fluent API for creating and modifying webpack configurations. Key portions of the API can be referenced by user-specified names, which helps to standardize how to modify a configuration across projects.

You can run Poi with the CLI flag `--inspect-webpack` to understand how the config is created using the webpack-chain API, Poi will open the webpack config with instructions in your default editor:

![inspect webpack example](https://user-images.githubusercontent.com/8784712/59977315-629bf600-9602-11e9-80aa-e2a2cf5a4360.png

As you can see in the screenshot, the `vue-loader` is added by `config.module.rule('vue').use('vue-loader')`, in order to tweak the options for `vue-loader`, you can:

```js
// poi.config.js
module.exports = {
  chainWebpack(config) {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.foo = bar // Modify options
        return options // Return new options
      })
  }
}
```

## Merge Custom Webpack Config

Besides the `chainWebpack` option, you can also use the `configureWebpack` option to merge your custom webpack config with the internal one:

```js
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'foo': './src/foo'
      }
    }
  }
}
```

We merge the config by using the [webpack-merge](https://github.com/survivejs/webpack-merge) module.

`configureWebpack` can also be a function:

```js
module.exports = {
  configureWebpack(config) {
    config.resolve.alias.foo = './src/foo'
    return config
  }
}
```

## A Note for CSS Loaders

Modifying the config for CSS Loaders is a bit more complex, because it uses webpack's [module.rule.oneOf](https://webpack.js.org/configuration/module/#ruleoneof) option to support CSS modules, normal CSS and Vue single file components.

::: warning
If you want to modify the options for CSS loaders, it's recommended to use [`css.loaderOptions`](/config.html#css-loaderoptions) instead.
:::

In the webpack config created by Poi, there're 6 rules for CSS files:

```js
{
  module: {
    rules: [
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /*...*/
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /*...*/
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /*...*/
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /*...*/
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /*...*/
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /*...*/
        ]
      }
    ]
  }
}
```

And each `oneOf` contains another 4 rules:

```js
{
  test: /\.css$/,
  oneOf: [
    /* config.module.rule('css').oneOf('vue-modules') */
    {
      resourceQuery: /module/,
      use: [
        /* config.module.rule('css').oneOf('vue-modules').use('vue-style-loader') */
        {/* omitted.. */},
        /* config.module.rule('css').oneOf('vue-modules').use('css-loader') */
        {/* omitted.. */}
      ]
    },
    /* config.module.rule('css').oneOf('vue') */
    {
      resourceQuery: /\?vue/,
      use: [
        /* config.module.rule('css').oneOf('vue').use('vue-style-loader') */
        {/* omitted.. */},
        /* config.module.rule('css').oneOf('vue').use('css-loader') */
        {/* omitted.. */}
      ]
    },
    /* config.module.rule('css').oneOf('normal-modules') */
    {
      test: /\.module\.\w+$/,
      use: [
        /* config.module.rule('css').oneOf('normal-modules').use('vue-style-loader') */
        {/* omitted.. */},
        /* config.module.rule('css').oneOf('normal-modules').use('css-loader') */
        {/* omitted.. */}
      ]
    },
    /* config.module.rule('css').oneOf('normal') */
    {
      use: [
        /* config.module.rule('css').oneOf('normal').use('vue-style-loader') */
        {/* omitted.. */},
        /* config.module.rule('css').oneOf('normal').use('css-loader') */
        {/* omitted.. */}
      ]
    }
  ]
}
````

About these `module.rule.oneOf` rules:

- `normal`: Normal CSS files, e.g. `.css` files or `.scss` files.
- `normal-modules`: Normal CSS module files, e.g. `.module.css` files or `.module.scss` files.
- `vue`: Apply to `<style>` blocks in `.vue` files.
- `vue-modules`: Apply to `<style module>` blocks in `.vue` files.
