---
id: getting-started
title: Getting Started
---

## Installation

```bash
yarn add poi@next --dev
```

It's generally __better__ to install `poi` in your project as devDependecy, but for fast prototyping, you may install it globally:

```bash
yarn global add poi@next
```

## Your first project

Create a new directory and populate an `index.js` inside:

```bash
mkdir try-poi
cd try-poi
vim index.js
# Or open index.js with the editor of choice
```

Next write some code in this file to see how it works, here're some examples for popular JavaScript frameworks:

<details><summary>Vanilla JS</summary>

`index.js`:

```js
const button = document.createElement('button')
button.textContent = 0
button.addEventListener('click', () => {
  button.textContent = parseInt(button.textContent) + 1
})
document.getElementById('app').appendChild(button)
```
</details>

<details><summary>Vue</summary>

`index.js`:

```js
import Vue from 'vue'
import Counter from './Counter.vue'

new Vue({
  el: '#app',
  render: h => h(Counter)
})
```

`Counter.vue`:

```vue
<template>
  <button @click="count++">{{ count }}</button>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>
```
</details>

<details><summary>React</summary>

First you need to install `react` and `react-dom` in your project.

`index.js`:

```js
import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './Counter'

ReactDOM.render(<Counter />, document.getElementById('app'))
```

`Counter.js`:

```js
import React from 'react'

export default class Counter extends React.Component {
  state = { count: 0 }

  inc = () => this.setState({ count: this.state.count + 1 })

  render() {
    return <button onClick={this.inc}>{this.state.count}</button>
  }
}
```
</details>
