# Installation

You can install Poi globally for instant prototyping like this:

```bash
yarn global add poi@next

# sh
echo "alert('oops')" > index.js && poi -so
# fish
echo "alert('oops')" > index.js ; poi -so

# `poi -so` is a short-hand for `poi --serve --open`
```

However, for a real-world project you should install Poi locally in your project as a dev dependency:

```bash
cd my-project
yarn add poi@next --dev
```

Then you can use [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) _(comes with npm 5.2+)_ or Yarn to run the locally installed Poi:

```bash
yarn poi --serve
```

You should also add some npm scripts to your package.json to run it easier for everyone in your team:

```json
{
  "private": true,
  "name": "my-app",
  "scripts": {
    "build": "poi --prod",
    "dev": "poi --serve"
  },
  "devDependencies": {
    "poi": "next"
  }
}
```

Now you can run `yarn build` to bundle your project for production and `yarn dev` to start a dev server.