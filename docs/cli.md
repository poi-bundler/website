---
sidebar: auto
---

# CLI Reference

## Base Directory

Set the base directory to load files via CLI flag `--baseDir`:

```bash
# Load config files, resolve entries from ./web folder
poi build --baseDir web
```

In general you use use a directory which contains `package.json` as the base directory.

The default value is `.` which means current working directory.

## Entry files

Set the entry files via CLI argument: 

```bash
# Default to index.js
poi build
# Set custom entrypoints
poi build foo.js bar.js
```

When set it will override the [entry](config.md#entry) property in config file.

## Inspect Webpack Config

To print webpack config as a string in your terminal, you can add a `--inspectWebpack` flag to the command you run:

```bash
poi dev foo.js --inspectWebpack
poi build --inspectWebpack
```