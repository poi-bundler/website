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
          '/guide/transforms',
          '/guide/hot-reloading'
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