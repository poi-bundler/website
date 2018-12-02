# Adding CSS Modules

Poi supports [CSS Modules](https://github.com/css-modules/css-modules) alongside regular stylesheets using the `[name].module.css` file naming convention. CSS Modules allows the scoping of CSS by automatically creating a unique classname of the format `[filename]_[classname]__[hash]`.

::: tip
Should you want to preprocess a stylesheet with Sass / Styles / Less then make sure to follow the [installation instructions](./pre-processing-css) and then change the stylesheet file extension as follows: `[name].module.scss` `[name].module.styl` etc.
:::

CSS Modules let you use the same CSS class name in different files without worrying about naming clashes. Learn more about CSS Modules [here](https://css-tricks.com/css-modules-part-1-need/).

### `Button.module.css`

```css
.error {
  background-color: red;
}
```

### `another-stylesheet.css`

```css
.error {
  color: red;
}
```

### `Button.js`

```js
import React, { Component } from 'react';
import styles from './Button.module.css'; // Import css modules stylesheet as styles
import './another-stylesheet.css'; // Import regular stylesheet

class Button extends Component {
  render() {
    // reference as a js object
    return <button className={styles.error}>Error Button</button>;
  }
}
```

### Result

No clashes from other `.error` class names:

```html
<!-- This button has red background but not red text -->
<button class="Button_error_ax7yz"></div>
```