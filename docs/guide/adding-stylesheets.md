# Adding Stylesheets

Poi supports almost all kinds of CSS assets, since it's built on the top of webpack, you can use the `import` statement in JavaScript to import CSS assets, here we use React as example since you may be already familar with it:

```css
.Button {
  padding: 20px;
}
```

```js
import React, { Component } from 'react';
// In dev mode, following CSS will be inserted to <head> as inline <style>
// In production, all imported CSS files will be extracted into standalone CSS files.
import './Button.css'

class Button extends Component {
  render() {
    // You can use them as regular CSS styles
    return <div className="Button" />
  }
}
```