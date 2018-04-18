---
home: true
actionText: Get Started →
actionLink: /guide/getting-started
features:
  - title: Config-free
    details: Develop powerful web app with no build configs until you need.
  - title: Versatile
    details: You can use Poi to build web apps, distribute resuable components, bundle Electron apps et al.
  - title: Extensive
    details: Poi comes with best practices but you can still extend it to any shape you like via config file or Node.js API.
footer: MIT Licensed | Copyright © 2016-present EGOIST
---

::: warning
This is the website for Poi v10.

For the docs of Poi v9, please go to [https://poi9.netlify.com](https://poi9.netlify.com).
:::

## Hello World

Start writing application with a `index.js`, without any configurations:

📝 index.js

```js
// import another module
import main from './main'

main()
```

📝 main.js

```js
// Files ending with `.module.css` with be imported as CSS modules
import styles from './styles.module.css'

export default () => {
  console.log(styles.main)
}
```

📝 styles.module.css

```css
.main {
  color: red;
  /* Reference images */
  background-image: url('./images/main.png')
}
```