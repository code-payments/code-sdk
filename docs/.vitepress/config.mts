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
        text: 'Examples',
        items: [
          {
            text: 'Payments',
            collapsed: true,
            items: [
              { text: 'Minimal (html)', link: '/example/request-payment' },
              { text: 'React', link: '/example/react-example' },
              { text: 'Vue', link: '/example/vue-example' },
            ]
          },
          {
            text: 'Login',
            collapsed: true,
            items: [
              { text: 'Simple Login', link: 'https://github.com/code-payments/code-sdk/tree/main/examples/7-minimal-login' },
              { text: 'Login With Payment', link: 'https://github.com/code-payments/code-sdk/tree/main/examples/6-minimal-purchase-with-login' },
              { text: 'Pennypost', link: 'https://github.com/code-payments/code-pennypost/tree/main/packages/backend/src/routes/login' },
            ]
          },
          { text: 'More...', link: '/example/introduction' },
        ]
      },

      {
        text: 'SDK (simple)',
        items: [
          { text: 'Payments', link: '/intents/payment-requests' },
          { text: 'Fees', link: '/intents/payment-fees' },
          { text: 'Tips', link: '/intents/tipping' },
          { text: 'Login', link: '/intents/login' },
        ],
      },

      {
        text: 'API (advanced)', 
        items: [
          { text: 'Introduction', link: '/intents/custom-backends#introduction' },
          {  
            text: 'Getting Started', link: '/intents/custom-backends#getting-started',
            collapsed: true,
            items: [
              { text: 'API Endpoints', link: '/intents/custom-backends#grpc-proxy' },
              { text: 'Proto Defs', link: '/intents/custom-backends#protobuf' },
              { text: 'Building Your Own Client', link: '/intents/custom-backends#building-a-client' },
              { text: 'Intents', link: '/intents/custom-backends#intents' },
            ],
          },
          {  
            text: 'Examples',
            collapsed: true,
            items: [
              { text: 'Status', link: '/intents/custom-backends#get-status' },
              { text: 'Payments', link: '/intents/custom-backends#payment-requests' },
              { text: 'Login', link: '/intents/custom-backends#login-intents' },
            ],
          },
          { text: 'Contributing', link: '/intents/custom-backends#contributing' },
        ]
      },

      {
        text: 'Reference',
        items: [
          { text: 'Appearance', link: '/reference/element-appearance' },
          { text: 'Browser Events', link: '/reference/browser-events' },
          { text: 'Payment Verification', link: '/example/payment-verification' },
          { text: 'Payment Lifecycle', link: '/example/payment-events' },
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
