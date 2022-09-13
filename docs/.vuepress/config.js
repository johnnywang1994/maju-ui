const { description } = require('../../package')

module.exports = {
  base: '/maju-ui/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Maju UI',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    // ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/maju-ui@latest/dist/css/maju.min.css' }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Docs',
        link: '/docs/',
      },
      // {
      //   text: 'VuePress',
      //   link: 'https://v1.vuepress.vuejs.org'
      // }
    ],
    sidebar: {
      '/docs/': [
        {
          title: 'Getting Started',
          collapsable: false,
          children: [
            '',
            'utilities.md',
            'helpers.md',
            'effects.md'
          ]
        },
        {
          title: 'Grid',
          collapsable: true,
          children: [
            'container.md',
            'grid-system.md',
            'position.md',
          ]
        },
        {
          title: 'Utilities',
          collapsable: true,
          children: [
            'utilities/placement.md',
            'utilities/order.md',
            'utilities/display.md',
            'utilities/spacing.md',
            'utilities/sizing.md',
            'utilities/text.md',
            'utilities/interactions.md',
            'utilities/float.md',
          ]
        },
        {
          title: 'Helpers',
          collapsable: true,
          children: [
            'helpers/ellipsis.md',
            'helpers/layout.md',
            'helpers/ratio.md',
            'helpers/scrollbar.md',
            'helpers/stretched-link.md',
            'helpers/action.md',
            'helpers/vrwd.md'
          ]
        },
        {
          title: 'Effects',
          collapsable: true,
          children: [
            'effects/text-gradient.md',
          ]
        },
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
