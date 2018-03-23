---
id: options
title: Options
---

## Entry file

The entry file of your project.

|Default|CLI override|API override|
|---|---|---|
|`index.js`|`poi [entry]`|`entry: string string[] object`|

## Output directory

The output directory of bundled files.

|Default|CLI override|API override|
|---|---|---|
|`dist`|`--out-dir/-d <string>`|`outDir: string`|

## Public path

This option specifies the public URL of the output directory when referenced in a browser.

|Default|CLI override|API override|
|---|---|---|
|`/`|`--public-path <string>`|`publicPath: string`|

## Bundle format

|Default|CLI override|API override|Possible values|
|---|---|---|---|
|`undefined`|`--format <string>`|`format: string`|`cjs` `umd`|


## JSX

Controlling how to transform JSX.

|Default|CLI override|API override|
|---|---|---|
|`react`|`--jsx <string>`|`babel.jsx: string`|

> __WARN__: note that this only works if you __DON'T__ use a custom babel config file.

## Module name

When you're bundling in `umd` format, you will need to set module name so that your library can be accessed via `window.YOUR_MODULE_NAME`.

|Default|CLI override|API override|
|---|---|---|
|`undefined`|`--module-name <string>`|`moduleName: string`|

## Load `.env` file

Load `.env` file from current working directory, the defined env variables are available in both node process and your application code.

|Default|CLI override|API override|
|---|---|---|
|`true`|<code>--dot-env <string&#124;boolean></code>|<code>dotEnv: string&#124;boolean</code>|
