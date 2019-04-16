# Environment Variables

## Predefined Environment Variables 

- `NODE_ENV`: `production`, `development` or `test`
- `PUBLIC_URL`: The value of [output.publicUrl](../config.md#output-publicurl).

For example, you can use `process.env.NODE_ENV` in the app code to tell whether it's a production build or not. We also allow you use consume custom environment variables from `.env` files.

```js
if (process.env.NODE_ENV === 'production') {
  console.log('this is the production build!')
}
```

Or use `envs.PUBLIC_URL` in [`public/index.html`](./custom-html-template.md) to reference static files in [public folder](./using-the-public-files.md):

```html
<img src="<%= envs.PUBLIC_URL %>/image.png" />
```

## Adding Environment Variables In `.env`

To define permanent environment variables, create a file called `.env` in the root of your project:

```
POI_APP_SECRET_CODE=abcdef
```

Poi loads `.env` files by this order:

- `.env.{mode}.local`: Local overrides of environment-specific settings.
- `.env.{mode}` Environment-specific settings.
- `.env.local`: Local overrides. __This file is loaded for all environments except test.__
- `.env`: Default.

Notably:

- Files on the top have more priority than files on the bottom.
- `mode` is set using the CLI flags. It defaults to `development` but you can use `--prod, --production` (which sets it to production mode) and `--test` (which sets it to test mode).

::: warning
You must create custom environment variables beginning with `POI_APP_`. Any other variables except `NODE_ENV` will be ignored to avoid [accidentally exposing a private key on the machine that could have the same name](https://github.com/facebook/create-react-app/issues/865#issuecomment-252199527). Changing any environment variables will require you to restart the development server if it is running.
:::

## Adding Temporary Environment Variables In Your Shell

You can start the development server with a temporary variable defined.

First install [cross-env](https://npm.im/cross-env) so you can define env variables cross-platform:


```bash
yarn add cross-env --dev
```

Then in your npm scripts:

```json
{
  "scripts": {
    "start": "cross-env POI_APP_SECRET=abcdef poi --serve"
  }
}
```

In this case, your variable name also __MUST__ start with `POI_APP_` otherwise it will not be embeded in your app code.

## Adding Environment Variables In Poi Config File

You can also use `envs` option in `poi.config.js` to define permanent environment variables:

```js
module.exports = {
  envs: {
    __VERSION__: '0.0.0'
  }
}
```

In this way, your variable name doesn't have to start with `POI_APP_`.
