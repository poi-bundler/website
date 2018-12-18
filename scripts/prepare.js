const axios = require('axios')
const fs = require('fs-extra')

async function fetchHtmlTemplate() {
  const { data } = await axios.get('https://raw.githubusercontent.com/egoist/poi/master/core/poi/lib/webpack/default-template.html')
  await fs.writeFile('data/default-template.html', data, 'utf8')
}

async function fetchPluginReadme() {
  const plugins = ['typescript', 'eslint', 'karma', 'pwa', 'puppet', 'vue-static']

  await Promise.all(plugins.map(async name => {
    const { data } = await axios.get(`https://raw.githubusercontent.com/egoist/poi/master/plugins/${name}/README.md`)
    await fs.writeFile(`docs/guide/plugin-${name}.md`, `---\nsidebar: auto\n---\n\n${data}`, 'utf8')
  }))
}

async function main() {
  await Promise.all([
    fetchHtmlTemplate(),
    fetchPluginReadme()
  ])
}

main()