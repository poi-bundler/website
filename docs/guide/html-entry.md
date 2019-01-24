# Using HTML Entrypoint

When you're using JavaScript files as entrypoints, Poi will inject generated files in to an HTML template and then output that HTML template as `index.html`. However using an HTML file as entrypoint may be more straight-forward to many of you.

Luckily, you can do this with Poi too:

```bash
poi index.html --serve
```

<small>*It requires Poi 12.5.0 or above.*</small>

And you're good to go. 

<!--inject:start-->
## Features

### Process local scripts and styles

```html
<link rel="stylesheet" href="./style.css">
<script src="./main.js"></script>
```

Note that only relative paths will be processed by webpack, which means you can use absolute paths like `https://...` or `/static/foo.css` to reference external resources.

### Process certain HTML attributes

It processes certain HTML attributes:

- `<img>`: `src`
- `<image>`: `xlink:href`
- `<video>`: `src` `poster`
- `<source>`: `src`

### Reloading

Modifing HTML entry will trigger a full reload.

### Template Interpolations

Your HTML entry will also be processed by [lodash.template](https://lodash.com/docs/4.17.11#template), see [here](https://poi.js.org/guide/custom-html-template.html#template-data) for available template data.


<!--inject:end-->
  