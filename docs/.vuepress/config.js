module.exports = {
  title: 'Poi',
  description: 'Modern tooling for web development.',
  themeConfig: {
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '/guide/transforms'
        ]
      }
    ],
    nav: [
      {
        text: 'Learn',
        items: [
          { text: 'Guide', link: '/guide/getting-started' },
          {
            text: 'Config File',
            link: '/config'
          },
          {
            text: 'Command Line',
            link: '/cli'
          }
        ]
      }
    ],
    editLinks: true,
    repo: 'egoist/poi',
    docsDir: 'docs',
    docsRepo: 'poi-bundler/website'
  }
}
