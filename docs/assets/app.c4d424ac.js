import{Z as d,$ as u,f as p,s,a0 as m,a1 as l,a2 as f,a3 as h,a4 as y,a5 as g,a6 as A,a7 as C,a8 as b,a9 as v,aa as E,d as w,u as P,j as L,y as R,ab as S,ac as T,ad as j}from"./chunks/framework.0c8e00f4.js";import{t as i}from"./chunks/theme.74da89bf.js";const $={extends:i,Layout:()=>{const e=d();{let t=function(a){const r=document.documentElement;a===p("/")?r.classList.add("home"):r.classList.remove("home")};const n=document.createElement("script");n.type="module",n.textContent=`
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
      `,document.body.appendChild(n),t(e.route.path),e.onAfterRouteChanged=async a=>{t(a)}}return u(i.Layout,null,{})},enhanceApp({app:e,router:t,siteData:n}){}};function c(e){if(e.extends){const t=c(e.extends);return{...t,...e,async enhanceApp(n){t.enhanceApp&&await t.enhanceApp(n),e.enhanceApp&&await e.enhanceApp(n)}}}return e}const o=c($),x=w({name:"VitePressApp",setup(){const{site:e}=P();return L(()=>{R(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),S(),T(),j(),o.setup&&o.setup(),()=>u(o.Layout)}});async function D(){const e=_(),t=V();t.provide(l,e);const n=f(e.route);return t.provide(h,n),t.component("Content",y),t.component("ClientOnly",g),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:t,router:e,siteData:A}),{app:t,router:e,data:n}}function V(){return C(x)}function _(){let e=s,t;return b(n=>{let a=v(n),r=null;return a&&(e&&(t=a),(e||t===a)&&(a=a.replace(/\.js$/,".lean.js")),r=E(()=>import(a),[])),s&&(e=!1),r},o.NotFound)}s&&D().then(({app:e,router:t,data:n})=>{t.go().then(()=>{m(t.route,n.site),e.mount("#app")})});export{D as createApp};
