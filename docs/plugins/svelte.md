# @poi/plugin-svelte

[Svelte: The magical disappearing UI framework](https://svelte.technology/).

## Installation

```bash
yarn add @poi/plugin-svelte --dev
```

## How to use

Add this plugin to your config file:

📝 __poi.config.js__:

```js{4}
module.exports = {
  entry: './src/index.js',
  plugins: [
    require('@poi/plugin-svelte')(/* options */)
  ]
}
```

An example entry file:

📝 __src/index.js__:

```js
import App from './App.html';

const app = new App({
  target: document.body,
  data: {
    name: 'world'
  }
});
```

📝 __src/App.html__:

```html
<h1>Hello {name}!</h1>

<style>
  h1 {
    color: purple;
  }
</style>
```

## API

### options

#### options.loaderOptions

Options for `svelte-loader`. 

::: warning
Override options with cautions!
:::