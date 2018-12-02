# Post-Processing CSS

You can use Sass, SCSS, Less, and Stylus to pre-process the CSS files, in fact, these files will also be post-processed by [PostCSS] when a `postcss.config.js` is found in your project.

For example you can add `autoprefixer` in `postcss.config.js` to automatically add vendor prefixes based on the browsers you target:

```bash
yarn add autoprefixer --dev
```

Add this plugin in PostCSS config file:

```js
// postcss.config.js
module.exports = {
  plugins: [
    require('autoprefixer')()
  ]
}
```

Configure the browsers you wanna support in `package.json`:

```json
{
  "browserslist": ["ie > 8", "last 2 versions"]
}
```

Then such CSS:

```css
.App {
  display: flex;
  flex-direction: row;
  align-items: center;
}
```

Will become:

```css
.App {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
```

