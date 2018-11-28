---
sidebar: auto
---

# Plugin Dev Guide

::: warning
This page is still work-in-progress
:::

## Overview

A plugin is essential an object with some properties or methods like `name`, `apply` etc.

```js
exports.name = 'foo'

exports.apply = (api, options) => {
  // ...
}
```

## Properties and Methods

### name

- Type: `string`
- Required: `true`

The plugin name which has no meaningful reason of existence for now.

### apply

- Type: `(api: PluginAPI, options: any) => void`
- Required: `false`


## Plugin API

### api.mode

- Type: `string`

Get the mode that the bundler is running under.
