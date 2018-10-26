module.exports = {
  title: 'Poi',
  description: 'Delightful web development.',
  ga: 'UA-54857209-14',
  themeConfig: {
    lastUpdated: 'Last Updated',
    sidebar: [
      {
        title: 'Basics',
        collapsable: false,
        children: [
          '/guide/getting-started',
          '/guide/transforms',
          '/guide/environment-variables',
          '/guide/custom-html-template'
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
      },
      {
        title: 'Building your App',
        collapsable: false,
        children: [
          '/guide/adding-typescript',
          '/guide/static-websites-in-vue'
        ]
      },
      {
        title: 'Back-End Integration',
        collapsable: false,
        children: [
          '/guide/proxying-api-requests-in-development'
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
