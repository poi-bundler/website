# Features

## Adding Development Environment Variables In `.env`

> This feature is greatly inspired by `create-react-app`.

Poi will load `.env` file from your project root by default:

```ini
MY_APP_SECRET=blahblah
```

Then you can access this variable via `process.env.MY_APP_SECRET` in your app code, if you try to `console.log(process.env.MY_APP_SECRET)` in your Poi config file, it also works.

::: tip
.env files should be checked into source control (with the exclusion of .env*.local).
:::

__What other `.env` files can be used?__

- `.env`: Default.
- `.env.local`: Local overrides. This file is loaded for all environments except test.
- `.env.development`, `.env.test`, `.env.production`: Environment-specific settings.
- `.env.development.local`, `.env.test.local`, `.env.production.local`: Local overrides of environment-specific settings.

Files on the left have more priority than files on the right:

- `poi`: `.env.development.local`, `.env.development`, `.env.local`, `.env`
- `poi build`: `.env.production.local`, .env.production, .env.local, .env
- `poi test`: `.env.test.local`, `.env.test`, `.env` (note `.env.local` is missing)

## HTML template file

Poi uses [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) to generate `index.html`.

Here is the [template file](https://github.com/egoist/poi/blob/master/packages/poi/lib/index.ejs) we use, basically it automatically injects webpack assets to the HTML and using `lodash.template` syntax.

To use a custom one, you can populate an `index.ejs` file in the root of your project, it will be automatically picked up.
