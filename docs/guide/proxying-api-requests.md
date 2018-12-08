# Proxying API Requests

> This option is inspired by [create-react-app](https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development).

People often serve the front-end app from the same host and port as their backend implementation.
For example, a production setup might look like this after the app is deployed:

```
/             - static server returns index.html with client app
/todos        - static server returns index.html with client app
/api/todos    - server handles any `/api/*` requests using the backend implementation
```

Such setup is not required. However, if you do have a setup like this, it is convenient to write requests like `fetch('/api/todos')` without worrying about redirecting them to another host or port during development.

To tell the development server to proxy any unknown requests to your API server in development, use `devServer.proxy` option in your config file, for example:

```js
// poi.config.js
module.exports = {
  devServer: {
    proxy: 'http://localhost:4000'
  }
}
```

This way, when you `fetch('/api/todos')` in development, the development server will recognize that it’s not a static asset, and will proxy your request to `http://localhost:4000/api/todos` as a fallback. The development server will __only__ attempt to send requests without `text/html` in its `Accept` header to the proxy.

Conveniently, this avoids [CORS](http://stackoverflow.com/questions/21854516/understanding-ajax-cors-and-security-considerations) issues and error messages like this in development:

```
Fetch API cannot load http://localhost:4000/api/todos. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```

Keep in mind that proxy only has effect in development (with `--serve` flag), and it is up to you to ensure that URLs like `/api/todos` point to the right thing in production. You don’t have to use the `/api` prefix. Any unrecognized request without a `text/html` accept header will be redirected to the specified proxy.

The `devServer.proxy` option supports HTTP, HTTPS and WebSocket connections.

If you want to have more control over the proxy behavior, you can also use an object with `path: options` pairs. Consult [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware#proxycontext-config) for full options:

```js
// poi.config.js
module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      },
      '^/foo': {
        target: '<other_url>'
      }
    }
  }
}
```