const axios = require('axios')
const fs = require('fs-extra')

async function fetchHtmlTemplate() {
  const { data } = await axios.get(
    'https://raw.githubusercontent.com/egoist/poi/master/core/poi/lib/webpack/default-template.html'
  )
  await fs.writeFile('data/default-template.html', data, 'utf8')
}

async function fetchPluginReadme() {
  const plugins = [
    'typescript',
    'eslint',
    'karma',
    'pwa',
    'puppet',
    'vue-static',
    'astroturf'
  ]

  await Promise.all(
    plugins.map(async name => {
      const { data } = await axios.get(
        `https://raw.githubusercontent.com/egoist/poi/master/plugins/${name}/README.md`
      )
      const editLink = `https://github.com/egoist/poi/blob/master/plugins/${name}/README.md`
      await fs.writeFile(
        `docs/guide/plugin-${name}.md`,
        `---\nsidebar: auto\nactualEditLink: ${editLink}\n---\n\n${data}
    
<script>
export default {
  mounted() {
    const el = document.querySelector('.edit-link a')
    el.href = this.$page.frontmatter.actualEditLink
  }
}
</script>
    `,
        'utf8'
      )
    })
  )
}

async function injectHTMLEntryDoc() {
  const file =
    'https://raw.githubusercontent.com/egoist/poi/master/plugins/html-entry/README.md'
  const { data } = await axios.get(file)
  const result = data.slice(data.indexOf('##')).replace(/## License[\s\S]+/, '')
  const content = await fs.readFile('docs/guide/html-entry.md', 'utf8')
  const newContent = content.replace(
    /<!--inject:start-->([\s\S]+)<!--inject:end-->/,
    () => `<!--inject:start-->\n${result}\n<!--inject:end-->`
  )
  await fs.writeFile('docs/guide/html-entry.md', newContent, 'utf8')
}

async function main() {
  await Promise.all([
    fetchHtmlTemplate(),
    fetchPluginReadme(),
    injectHTMLEntryDoc()
  ])
}

main()
