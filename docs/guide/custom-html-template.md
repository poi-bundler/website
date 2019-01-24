# Custom HTML Template

When you're using JavaScript entrypoinys, `index.html` will be generated from a HTML template file, this is the [default one](https://github.com/egoist/poi/blob/master/core/poi/lib/webpack/default-template.html) we use:

<<< @/data/default-template.html

Generated assets will be injected into this file. If you want to use another template file, create one at `public/index.html` and it will be automatically used.

If you're using HTML entrypoint, please check out [HTML Entry](./html-entry.md).

## Template Syntax

The template file uses [lodash.template](https://lodash.com/docs/4.17.11#template) to interpolate data properties.

## Template Data

### html

`html` is basically the `html` option you passed [here](../config.md#html).

### pkg

`pkg` is the data of the `package.json` from your project. Note that `html.title` defaults to `pkg.name`.

### envs

In app code you can use `process.env` to access embeded [Environment Variables](./environment-variables.md), while in the template file you access is via the `envs` contant.

### constants

`constants` is the `constants` option you passed [here](../config.md#constants).