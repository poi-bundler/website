# Adding TypeScript

__Poi by default strips types in `.ts` `.tsx` and `lang="ts"` block in Vue files with no configs__, however it doesn't type-check those files.

If you want to perform type checking when running `poi dev` or `poi build`, you can use the `@poi/plugin-ts-check` plugin:

```bash
yarn add @poi/plugin-ts-check@next typescript --dev
```

Then load the plugin in your `poi.config.js`:

```js
module.exports = {
  entry: './src/index.ts',
  plugins: [
    {
      resolve: '@poi/plugin-ts-check',
      // Override options for https://github.com/Realytics/fork-ts-checker-webpack-plugin
      options: {}
    }
  ]
}
```

A `tsconfig.json` is required to perform proper type checking:

```json
{
  "compilerOptions": {
    "outDir": "dist",
    "module": "esnext",
    "target": "es5",
    "lib": ["es6", "dom"],
    "sourceMap": true,
    "allowJs": true,
    "jsx": "react",
    "moduleResolution": "node",
    "rootDir": "src",
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "allowSyntheticDefaultImports": true
  },
  "exclude": [
    "node_modules",
    "dist"
  ]
}
```
