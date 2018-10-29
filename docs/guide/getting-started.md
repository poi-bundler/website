# Getting Started

## Introduction

Poi is a toolkit for your web apps, Electron apps, libraries and so on.

Poi is built on the top of [webpack](https://webpack.js.org/), combining the flexibility of webpack with the philosophy of simplicity.

Poi takes an entry file which is generally a JavaScript file or something that can be transformed to run in your targeted environment like the browser. Poi parses the entry file, transforms the dependencies and merges them together into a small set of output files alongside a `index.html` which could properly load those files.

Poi tries to support as many kinds of file types as possible, from some well-known web technologies like `.css` `.js` `.vue`  to compile-to-js and compile-to-wasm languages like `Flow` `TypeScript` `ReasonML` `Elm` `Rust` and so on, you name it!

Poi is also extermely extensible thanks to its plugin API.

## Quick Start

Before we get started, you need to ensure that [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/) (or npm) are installed properly on your machine:

```bash
# Check node version
# Should be >= 8
node -v

# Check out npm or yarn version
# You will use either one of them to install Poi later
npm -v
yarn -v
```

Now create a `package.json` in a new folder with your package manager of choice, here we're using Yarn since it's faster and more reliable than npm as of now:

```bash
# Initialize a new project
mkdir my-project
cd my-project
yarn init

# Install Poi as a local devDependency
# From @next channel since it's not officially released yet
yarn add poi@next --dev
```

Now you can add `scripts` to your `package.json` like this:

```json
{
  "scripts": {
    "dev": "poi dev",
    "build": "poi build",
  }
}
```

After that, populate `index.js` inside your project:

```js
const el = document.createElement('div')
el.textContent = 'Hello Poi!'

document.body.appendChild(el)
```

Finally just run `yarn dev` and go to `http://localhost:4000`.

So far we get:

- Automatic transpilation and bundling (with [webpack](https://webpack.js.org/) and [babel](https://babeljs.io/))
- Hot code reloading
- Static file serving. `./public/` is mapped to `/`
