module.exports = {
  title: 'Poi',
  description: 'A zero-config bundler for the web.',
  themeConfig: {
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '/guide/getting-started',
          '/guide/installation',
          '/guide/transforms',
          '/guide/hot-reloading',
          '/guide/html-template-file',
          '/guide/update-webpack-config'
        ]
      },
      '/options',
      '/migrate-from-9-to-10'
    ],
    nav: [
      { text: 'Guide', link: '/guide/getting-started' }
    ],
    editLinks: true,
    repo: 'poi-bundler/website',
    docsDir: 'docs'
  }
}