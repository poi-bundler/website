# CLI Usages

Poi CLI is built into the main package `poi`. While you can install it globally and run it, it is much better to install it locally into your project as a dev dependency.

```bash
yarn add poi@next --dev
```

You should also add some npm scripts to your `package.json` to run it easier.

```json
{
  "name": "my-project",
  "scripts": {
    "build": "poi --prod",
    "start": "poi --serve"
  },
  "devDependencies": {
    "poi": "next"
  }
}
```

Now you can run `yarn build` to create a production build and `yarn start` to start a dev server for your project.

## Modes

By default Poi bundles your app in `development` mode, so running `poi` alone doesn't really do much but generates an unminified bundle.

But you can combine it with `--serve` flag which starts a dev server to serve the development bundle with hot reloading support.

There's also `--prod, --production` flags which set the mode to `production` so that Poi will generate an optimized bundle for production use. And `--test` flag which sets the mode to `test`, you can combine it with some plugins like [Karma](./plugin-karma.md) to run your tests.

## CLI Args & Flags

Run `poi --help` and you'll get detailed help message.