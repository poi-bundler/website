# Environment Variables

Your project can consume variables declared in your environment as if they were declared locally in your JS files. By default you will have `NODE_ENV` defined for you, and any other environment variables defined in a `.env` file or your config file.

The environment variables are embedded during the build time.

You can access them like this in your app code:

```js
if (process.env.NODE_ENV === 'production') {
  // Apply some code only for production build
}
```

## Adding Environment Variables In `.env`

To define permanent environment variables, create a file called `.env` in the root of your project:

```
POI_APP_SECRET_CODE=abcdef
```

Poi loads `.env` files by this order:

- `.env.{NODE_ENV}.local`: Local overrides of environment-specific settings.
- `.env.{NODE_ENV}` Environment-specific settings.
- `.env.local`: Local overrides. __This file is loaded for all environments except test.__
- `.env`: Default.

Notably:

- Files on the top have more priority than files on the bottom.
- `NODE_ENV` defaults to `undefined` and we __NEVER__ change it. You're supposed to run Poi command with specific NODE_ENV such as `NODE_ENV=production poi build` if you want to use `.env.production` or `.env.production.local` files.

::: warning
You're recommended to create custom environment variables beginning with `POI_`, otherwise you may [accidentally exposing a private key](https://github.com/facebook/create-react-app/issues/865#issuecomment-252199527) on the machine that could have the same name. Changing any environment variables will require you to restart the development server if it is running.
:::

## Adding Environment Variables In Poi Config File

You can also use `envs` option in `poi.config.js` to define permanent environment variables:

```js
module.exports = {
  envs: {
    POI_APP_SECRET: 'abcdef'
  }
}
```

## Adding Temporary Environment Variables In Your Shell

You can start the development server with a temporary variable defined:

```bash
# Linux / MacOS
POI_APP_SECRET=abcdef poi dev

# Windows (cmd.exe)
set "POI_APP_SECRET=abcdef" && poi dev

# Windows (powershell)
($env:POI_APP_SECRET = "abcdef") -and (poi dev)
```

In this case, your variable name __MUST__ start with `POI_` otherwise it will not be embeded in your app code.