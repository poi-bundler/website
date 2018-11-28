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
        title: 'Advanced',
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
        text: 'Plugins',
        items: [
          {
            text: 'TypeScript',
            link: '/guide/plugin-typescript'
          },
          {
            text: 'ESLint',
            link: '/guide/plugin-eslint'
          },
          {
            text: 'Karma',
            link: '/guide/plugin-karma'
          },
          {
            text: 'Reason',
            link: '/guide/plugin-reason'
          }
        ]
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
