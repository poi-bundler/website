# HTML template file


Poi uses [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) to generate `index.html`.

This is the [template file](https://github.com/egoist/poi/blob/master/packages/poi/lib/index.ejs) we use, basically it automatically injects webpack assets and supports `lodash.template` syntax.

To use a custom one, you can populate an `index.ejs` file in the root of your project, it will be automatically picked up.