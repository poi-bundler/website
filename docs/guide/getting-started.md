# Getting Started

First create a project and install the *WIP* Poi v11:

```bash
# Initialize a new project
mkdir my-project
cd my-project
yarn init -y

# Install Poi
yarn add poi@next --dev
# Or npm
npm i poi@next -D
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