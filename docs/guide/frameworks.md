# Frameworks

How to use Poi with other frameworks and libraries.

## React

Poi works out of the box in a React app, for example a React app that is created by facebooks's [create-react-app](https://github.com/facebook/create-react-app).

### React Refresh Support

To enable react-refresh support, simply set  `reactRefresh` to `true` at your Poi config:

```js
module.exports = {
  reactRefresh: true
}
```

## Vue

To use Poi in a Vue project, you should have `vue` and `vue-template-compiler` installed in your project:

```bash
cd my-app
yarn add vue vue-template-compiler --dev
```

Poi actually uses webpack's `vue-loader` under the hood, so all the features of `.vue` file are supported.

If you want to use Vue JSX in the JavaScript files and Vue SFCs:

- Use [`--jsx vue` flag or `babel.jsx`](../config.md#babeljsx) config option when you're NOT using custom babel config file.
- Or [Use our default preset in your custom babel config file](./transforms.md#preset-options), and set `jsx` option to `vue`.
- Or if you are not using our default babel preset, you need to configure this yourself.

## Others

Poi should be able to work in any JavaScript app, if you find it hard to use Poi with your desired frameworks, please [open an issue](https://github.com/egoist/poi/issues/new).