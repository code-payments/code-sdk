import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/code-sdk/docs/',
  title: "Code Developer",
  description: "Permissionless micropayments for the web",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { 
      alt: 'Code SDK',
      light: '/logo-light.svg',
      dark: '/logo-dark.svg',
      link: '/guide/introduction'
    },
    
    siteTitle: false,

    nav: [
      { text: 'Home', link: '/guide/introduction' },
      { text: 'Examples', link: '/example/request-payment' }
    ],

    sidebar: [
      /*
      {
        text: 'Release Notes',
        items: [
          { text: 'Latest', link: '/release-notes' },
          { text: 'Contribution Guide', link: '/guide/contribution-guide' },
        ],
      },
      */

      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/guide/introduction' },
          { text: 'Quick Start', link: '/guide/quick-start' },
          {
            text: 'Installation',
            link: '/guide/installation',
            collapsed: true,
            items: [
              { text: 'Client (browser)', link: '/guide/installation-client' },
              { text: 'Server (node.js)', link: '/guide/installation-server' },
            ],
          },
        ],
      },

      {
        text: 'Essentials',
        items: [
          { text: 'Intents', link: '/intents/introduction' },
          { text: 'Payment Requests', link: '/intents/payment-requests' },
          { text: 'Idempotency', link: '/reference/idempotency' },
          { text: 'Browser Events', link: '/reference/browser-events' },
          { text: 'Webhook Events', link: '/reference/webhook' },
          { text: 'Element Appearance', link: '/reference/element-appearance' },
        ],
      },

      {
        text: 'Examples',
        items: [
          { text: 'Full Examples', link: '/example/introduction' },
          {
            text: 'Payment Request',
            items: [
              { text: 'Minimal (html)', link: '/example/request-payment' },
              { text: 'React Example', link: '/example/react-example' },
              { text: 'Vue Example', link: '/example/vue-example' },
            ]
          },
          { text: 'Payment Verification', link: '/example/payment-verification' },
          { text: 'Payment Events', link: '/example/payment-events' },
        ]
      },

      {
        text: 'Extra Topics',
        items: [
          { text: 'Code App', link: '/reference/app' },
          { text: 'Code Sequencer', link: '/reference/sequencer' },
          { text: 'Code Privacy Protocol', link: '/reference/splitter' },
          { text: 'Timelock Program', link: '/reference/timelock' },
          { text: 'Rendezvous', link: '/reference/rendezvous' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/code-wallet/code-sdk' },
      { icon: 'twitter', link: 'https://twitter.com/getcode' }
    ]
  },
})
