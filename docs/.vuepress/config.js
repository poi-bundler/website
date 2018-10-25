module.exports = {
  title: 'Poi',
  description: 'Delightful web development.',
  themeConfig: {
    lastUpdated: 'Last Updated',
    sidebar: [
      {
        title: 'Basics',
        collapsable: false,
        children: [
          '/guide/getting-started',
          '/guide/transforms',
          '/guide/environment-variables'
        ]
      },
      {
        title: 'Linting and Testing',
        collapsable: false,
        children: [
          '/guide/eslint-integration',
          '/guide/jest-integration',
          '/guide/cypress-integration'
        ]
      }
    ],
    nav: [
      {
        text: 'Guide',
        link: '/guide/getting-started'
      },
      {
        text: 'Config File',
        link: '/config'
      },
      {
        text: 'Plugin Dev Guide',
        link: '/plugin-dev'
      }
    ],
    editLinks: true,
    repo: 'egoist/poi',
    docsRepo: 'poi-bundler/website',
    docsDir: 'docs'
  }
}
