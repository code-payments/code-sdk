import{Z as c,$ as d,f as m,s,a0 as p,a1 as l,a2 as f,a3 as h,a4 as y,a5 as g,a6 as A,a7 as C,a8 as b,a9 as v,aa as E,d as L,u as P,j as w,y as R,ab as S,ac as D,ad as T}from"./chunks/framework.0c8e00f4.js";import{t as i}from"./chunks/theme.74da89bf.js";const j={extends:i,Layout:()=>{const e=c();{let t=function(a){const r=document.documentElement;a===m("/")?r.classList.add("home"):r.classList.remove("home")};const n=document.createElement("script");n.type="module",n.textContent=`
      // Wait for DOM to be ready
      function ready(fn) {
        if (document.readyState !== 'loading') {
          fn();
          return;
        }
        document.addEventListener('DOMContentLoaded', fn);
      }

      // Overrides
      ready(() => {
        // Hack to change the link to the introduction page, VitePress seems to
        // have a bug applying the setting from config.mts

        if (!document.querySelector('a.title').href.includes('introduction.html')) {
          document.querySelector('a.title').href += 'guide/introduction.html';
        }
      });

      // Code SDK
      import code from 'https://js.getcode.com/v1';
      ready(() => {
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
      });

      // Mermaid
      import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";
      ready(() => {
        document.querySelectorAll('.language-mermaid')
        .forEach($el => {
          $el.outerHTML = \`<pre class="mermaid">\${$el.innerText.replace('mermaid', '')}</pre>\`
        })

        mermaid.init();
      });
      `,document.body.appendChild(n),t(e.route.path),e.onAfterRouteChanged=async a=>{t(a)}}return d(i.Layout,null,{})},enhanceApp({app:e,router:t,siteData:n}){}};function u(e){if(e.extends){const t=u(e.extends);return{...t,...e,async enhanceApp(n){t.enhanceApp&&await t.enhanceApp(n),e.enhanceApp&&await e.enhanceApp(n)}}}return e}const o=u(j),M=L({name:"VitePressApp",setup(){const{site:e}=P();return w(()=>{R(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),S(),D(),T(),o.setup&&o.setup(),()=>d(o.Layout)}});async function V(){const e=x(),t=$();t.provide(l,e);const n=f(e.route);return t.provide(h,n),t.component("Content",y),t.component("ClientOnly",g),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:t,router:e,siteData:A}),{app:t,router:e,data:n}}function $(){return C(M)}function x(){let e=s,t;return b(n=>{let a=v(n),r=null;return a&&(e&&(t=a),(e||t===a)&&(a=a.replace(/\.js$/,".lean.js")),r=E(()=>import(a),[])),s&&(e=!1),r},o.NotFound)}s&&V().then(({app:e,router:t,data:n})=>{t.go().then(()=>{p(t.route,n.site),e.mount("#app")})});export{V as createApp};
