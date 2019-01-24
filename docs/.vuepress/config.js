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
          '/guide/installation',
          '/guide/getting-started',
          '/guide/cli-usages',
          '/guide/creating-new-projects',
          '/guide/transforms',
          '/guide/frameworks',
          '/guide/environment-variables',
          '/guide/custom-html-template',
          '/guide/html-entry',
          '/guide/using-plugins'
        ]
      },
      {
        title: 'Styles and Assets',
        collapsable: false,
        children: [
          '/guide/adding-stylesheets',
          '/guide/adding-css-modules',
          '/guide/pre-processing-css',
          '/guide/post-processing-css'
        ]
      },
      {
        title: 'Development',
        collapsable: false,
        children: [
          '/guide/proxying-api-requests'
        ]
      },
      {
        title: 'Misc',
        collapsable: false,
        children: [
          '/migration-guide/9-to-12'
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
            text: 'PWA',
            link: '/guide/plugin-pwa'
          },
          {
            text: 'Puppet',
            link: '/guide/plugin-puppet'
          },
          {
            text: 'Vue Static',
            link: '/guide/plugin-vue-static'
          }
        ]
      },
      {
        text: 'API',
        link: '/api'
      },
      {
        text: 'Twitter',
        link: 'https://twitter.com/poi__js'
      }
    ],
    editLinks: true,
    repo: 'egoist/poi',
    docsRepo: 'poi-bundler/website',
    docsDir: 'docs'
  }
}
