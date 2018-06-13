module.exports = {
  title: 'Poi',
  description: 'A zero-config bundler for the web.',
  themeConfig: {
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '/guide/installation',
          '/guide/getting-started',
          '/guide/features',
          '/guide/transforms',
          '/guide/hot-reloading',
          '/guide/update-webpack-config'
        ]
      },
      '/options',
      '/migrate-from-9-to-10'
    ],
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      {
        text: 'Plugins',
        items: [
          { text: 'TypeScript', link: '/plugins/typescript' },
          { text: 'Svelte', link: '/plugins/svelte' },
          { text: 'Vue Static', link: '/plugins/vue-static' }
        ]
      }
    ],
    editLinks: true,
    repo: 'egoist/poi',
    docsDir: 'docs',
    docsRepo: 'poi-bundler/website'
  }
}
