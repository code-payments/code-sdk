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
          { text: 'Deposit Address', link: '/guide/deposit-address' },
        ],
      },

      {
        text: 'Install',
        items: [
            { text: 'Client (Browser)', link: '/guide/installation-client' },
            { 
              text: 'Server', link: '/guide/installation-server',
              collapsed: true,
              items: [
                { text: 'Node', link: '/guide/quick-start-node' },
                { text: 'Python', link: '/guide/quick-start-python' },
                { text: 'Php', link: '/guide/quick-start-php' },
                { text: 'Go', link: '/guide/quick-start-go' },
              ],
            },
        ],
      },

      {
        text: 'SDK',
        items: [
          { text: 'Payments', link: '/intents/payment-requests' },
          { text: 'Fees', link: '/intents/payment-fees' },
          { text: 'Tipping', link: '/intents/tipping' },
          { text: 'Login', link: '/intents/login' },
        ],
      },

      {
        text: 'Examples',
        items: [
          { text: 'Events', link: '/example/payment-events' },
          {
            text: 'Payments',
            items: [
              { text: 'Minimal (html)', link: '/example/request-payment' },
              { text: 'React Example', link: '/example/react-example' },
              { text: 'Vue Example', link: '/example/vue-example' },
              { text: 'Pennypost', link: 'https://github.com/code-payments/code-pennypost/tree/main/packages/backend/src/routes/payment' },
            ]
          },
          { text: 'Verification', link: '/example/payment-verification' },
          { text: 'More...', link: '/example/introduction' },
        ]
      },

      {
        text: 'Reference',
        items: [
          { text: 'Appearance', link: '/reference/element-appearance' },
          { text: 'Custom Backends', link: '/intents/custom-backends' },
          { text: 'Events', link: '/reference/browser-events' },
          { text: 'Idempotency', link: '/reference/idempotency' },
          { text: 'Intents', link: '/intents/introduction' },
          { text: 'Private Payments', link: '/reference/splitter' },
          { text: 'Rendezvous', link: '/reference/rendezvous' },
          { text: 'Sequencer', link: '/reference/sequencer' },
          { text: 'Timelock', link: '/reference/timelock' },
          { text: 'Wallet App', link: '/reference/app' },
          { text: 'Webhooks', link: '/reference/webhook' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/code-payments/code-sdk' },
      { icon: 'twitter', link: 'https://twitter.com/getcode' }
    ]
  },
})
