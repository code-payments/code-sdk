// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import Theme from 'vitepress/theme';
import { useRouter, withBase } from 'vitepress';
import './style.css';

export default {
  extends: Theme,
  Layout: () => {
    const router = useRouter();

    if (!(import.meta as any).env.SSR) {

      const script = document.createElement('script');
      script.type = 'module';
      script.textContent = `
      // Overrides
      if (!document.querySelector('a.title').href.includes('introduction.html')) {
        document.querySelector('a.title').href += 'guide/introduction.html';
      }

      // Code SDK

      import code from 'https://js.getcode.com/v1';

      if (document.querySelector('#button-container')) {
        const darkMode = document.documentElement.classList.contains('dark');
        const { button } = code.elements.create('button', {
            currency: 'usd',
            appearance: darkMode ? 'light' : 'dark',
            destination: 'E8otxw1CVX9bfyddKu3ZB3BVLa4VVF9J7CTPdnUwT9jR',
            amount: 0.05,
        });

        button.mount('#button-container');
      }

      // Mermaid

      import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";
      document.querySelectorAll('.language-mermaid')
      .forEach($el => {
        $el.outerHTML = \`<pre class="mermaid">\${$el.innerText.replace('mermaid', '')}</pre>\`
      })

      mermaid.init();
      `;

      document.body.appendChild(script);

      function handleHomeClass(path: string) {
        const htmlElement = document.documentElement;
        if (path === withBase("/")) {
          htmlElement.classList.add('home');
        } else {
          htmlElement.classList.remove('home');
        }
      }
      handleHomeClass(router.route.path);
      router.onAfterRouteChanged = async (to) => {
        handleHomeClass(to);
      }
    }

    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
