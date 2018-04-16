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
      }
    ],
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'GitHub', link: 'https://github.com/egoist/poi' },
    ]
  }
}