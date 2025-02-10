import{_ as e,o as a,c as t,Q as s}from"./chunks/framework.0c8e00f4.js";const g=JSON.parse('{"title":"Rendezvous Key","description":"","frontmatter":{},"headers":[],"relativePath":"reference/rendezvous.md","filePath":"reference/rendezvous.md"}'),n={name:"reference/rendezvous.md"},o=s(`<h1 id="rendezvous-key" tabindex="-1">Rendezvous Key <a class="header-anchor" href="#rendezvous-key" aria-label="Permalink to &quot;Rendezvous Key&quot;">​</a></h1><p>The Rendezvous Key is an integral component of the <a href="./app.html">Code App</a> and <a href="./sequencer.html">Code Sequencer</a>, it is a mechanism to establish a trusted communication channel. At its core, the system uses QR-like codes, which, when scanned, create a mechanism for opening a streaming channel for two parties to exchange intent details.</p><h2 id="what-is-it" tabindex="-1">What is it? <a class="header-anchor" href="#what-is-it" aria-label="Permalink to &quot;What is it?&quot;">​</a></h2><p>At its core, the Rendezvous Key is a <a href="https://github.com/code-payments/code-sdk/blob/095be2b7231c1d8f612c12b1f23afc0ebb2fdb8a/packages/intents/src/keys/rendezvous.ts#L37" target="_blank" rel="noreferrer">Keypair value</a>.</p><p>It allows two parties to establish a direct communication channel without having to know each other&#39;s identity beforehand. By scanning a code, they can instantly &#39;rendezvous&#39; and initiate an interaction. When users scan an <a href="./../intents/introduction.html">Intent</a> via the Code app, the underlying details are hashed into this key. All future messages and events regarding the intent are then signed using the rendezvous key. While the Code Sequencer can route messages based on this, it cannot alter them due to the key&#39;s private nature, ensuring message integrity. The Rendezvous Key elegantly merges SHA-256 hashing with QR code mechanics, simplifying user experience while underpinning robust security.</p><div class="info custom-block"><p class="custom-block-title">Note</p><p>Without the rendezvous key, the Code Sequencer could alter details about the submitted intents. The rendezvous key ensures that the sequencer can only route messages, not alter them.</p></div><h2 id="how-it-works" tabindex="-1">How it Works <a class="header-anchor" href="#how-it-works" aria-label="Permalink to &quot;How it Works&quot;">​</a></h2><p>Upon scanning an <code>Intent</code> via the Code app, be it a payment request or an incoming fund receipt, details of the intent are encoded into a QR-like code. This code&#39;s value undergoes a SHA-256 hashing process, generating a &#39;rendezvous&#39; key. This key, specifically its public part, is crucial for the Code Sequencer to route messages between the interacting parties. Crucially, the sequencer only has access to this public portion, ensuring it can route but not alter messages, as it lacks the private key necessary for signing.</p><p>The Rendezvous Key ensures the Code Sequencer remains an intermediary, directing communication but never having the authority to tamper or alter it. All messages under this system are signed using the rendezvous key, bolstering security against potential threats.</p><h2 id="structure" tabindex="-1">Structure <a class="header-anchor" href="#structure" aria-label="Permalink to &quot;Structure&quot;">​</a></h2><p>The rendezvous key is a 32-byte value that is derived using a SHA256 hash from a 20-byte payload. The payload is a 20-byte binary blob that contains the data for the scan code before it is encoded.</p><p>For payment requests, the payload is structured as follows:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">0   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19</span></span>
<span class="line"><span style="color:#e1e4e8;">+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+</span></span>
<span class="line"><span style="color:#e1e4e8;">| T | C |        Fiat               |                   Nonce                   |</span></span>
<span class="line"><span style="color:#e1e4e8;">+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">0   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19</span></span>
<span class="line"><span style="color:#24292e;">+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+</span></span>
<span class="line"><span style="color:#24292e;">| T | C |        Fiat               |                   Nonce                   |</span></span>
<span class="line"><span style="color:#24292e;">+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+</span></span></code></pre></div><p>You can find the payload details <a href="https://github.com/code-payments/code-sdk/blob/main/packages/kikcode/src/payload.ts" target="_blank" rel="noreferrer">here</a> and the communication protocol <a href="https://github.com/code-payments/code-sdk/blob/main/packages/rpc/src/generated/messaging/v1/messaging_service_connect.ts" target="_blank" rel="noreferrer">here</a>.</p>`,14),i=[o];function r(c,l,h,d,p,u){return a(),t("div",null,i)}const y=e(n,[["render",r]]);export{g as __pageData,y as default};
