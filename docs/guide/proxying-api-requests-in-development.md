# Proxying API Requests in Development

If you want to serve your API at the same host and port as your front-end app, you may want to use the `devServer.proxy` option:

```js
// poi.config.js
module.exports = {
  //...
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
}
```

The rule above tells the dev server to proxy any requests under `/api` to your API server in development, now you can simply call `window.fetch('/api/users')` which in turns calls `http://localhost:3000/api/users`.

## Advanced 

[TODO]