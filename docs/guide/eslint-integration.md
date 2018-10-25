# ESLint Integration

Install the official [ESLint](https://github.com/egoist/poi/tree/master/packages/plugin-eslint) plugin:

```bash
yarn add @poi/plugin-eslint@next --dev
```

Then you can load it in the Poi config file:

```js
module.exports = {
  plugins: [
    {
      resolve: '@poi/plugin-eslint'
    }
  ]
}
```

## Injected Command

This plugin injects a new command to Poi CLI: `poi lint`. 

This command works exactly in the same way as `eslint` CLI but with some tweaks for better Poi integration.

Run `poi lint --help` for more usages.

## Lint on Save

If you want to perform lint-on-save during development using [eslint-loader](https://github.com/webpack-contrib/eslint-loader), use the `lintOnSave` option:

```js
module.exports = {
  plugins: [
    {
      resolve: '@poi/plugin-eslint',
      options: {
        lintOnSave: true
      }
    }
  ]
}
```

