# Getting Started

## Introduction

Poi is a bundler built on the top of webpack, trying to make developing and bundling apps with webpack as easy as possible.

## Features

- 📦 Out of box support for JS, CSS, File assets and more.
- ⚛ Framework-agnostic but also support JSX, Vue and more with no configs.
- 🔌 Great extensibility.
- 🐙 Fit most web apps, npm libs.
- 🚨 Great development experience.

## Quick Start

Before we get started, ensure that you have installed Node.js (>=8) and Yarn (or npm) on your machine.

Next inside your project, run `yarn init` or `npm init` to create a `package.json` and install Poi:

```bash
yarn init
yarn add poi@next --dev
```

Now all you need is to create an entry file, like if you're building a website, just create an `index.js`:

```js
const el = document.createElement('div')
el.textContent = 'Hello Poi!'

document.body.appendChild(el)
```

Now if you run:

```bash
yarn poi --serve
```

You will get a URL like `http://localhost:4000` which you can open to preview the app.

Next let's start adding some dependencies like a CSS file `style.module.css`:

```css
.title {
  color: pink;
}
```

```js
import styles from './style.module.css'

const el = document.createElement('div')
el.className = styles.title
el.textContent = 'Hello Poi!'

document.body.appendChild(el)
```

Save it and the browser will automatically reload to apply the changes!

So far we get:

- Automatic transpilation and bundling (with [webpack](https://webpack.js.org/) and [babel](https://babeljs.io/))
- Hot code reloading
- Static file serving. `./public/` is mapped to `/`

::: tip
Alternatively, here's a simple [starter](https://github.com/poi-starters/simple) that you can clone it locally to try Poi.
