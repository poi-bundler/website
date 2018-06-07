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
      {
        title: 'Plugins',
        collapsable: false,
        children: [
          '/plugins/vue-static',
          '/plugins/typescript',
          '/plugins/svelte'
        ]
      },
      '/options',
      '/migrate-from-9-to-10'
    ],
    nav: [
      { text: 'Guide', link: '/guide/getting-started' }
    ],
    editLinks: true,
    repo: 'egoist/poi',
    docsDir: 'docs',
    docsRepo: 'poi-bundler/website'
  }
}