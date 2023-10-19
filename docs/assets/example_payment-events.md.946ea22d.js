import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.0c8e00f4.js";const h=JSON.parse('{"title":"Payment Events","description":"","frontmatter":{},"headers":[],"relativePath":"example/payment-events.md","filePath":"example/payment-events.md"}'),p={name:"example/payment-events.md"},o=l(`<h1 id="payment-events" tabindex="-1">Payment Events <a class="header-anchor" href="#payment-events" aria-label="Permalink to &quot;Payment Events&quot;">​</a></h1><p>You may want to know when a payment has been made, or when a user has canceled a payment. You can do this by listening to events.</p><p>You have the ability to listen for payment events on both the client- and server-side. The client-side uses a WebSocket connection to the Code Sequencer for <a href="./../reference/browser-events.html">events</a>, while the server-side SDK uses a <a href="./../reference/webhook.html">webhook</a> endpoint.</p><p>Below you&#39;ll find an example of how to use both.</p><br><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The webhook URL will need to be public before you create the intent.</p><p>You can use <a href="https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/install-and-setup/tunnel-guide/local/" target="_blank" rel="noreferrer">cloudflare tunnels</a> to test this locally.</p><br><p>For example, run <code>cloudflared tunnel --url localhost:3030</code></p><ol><li>Then replace the url below with the url provided by cloudflare tunnels</li><li>And finally, start the server with <code>node server.js</code></li></ol></div><h2 id="events-example" tabindex="-1">Events Example <a class="header-anchor" href="#events-example" aria-label="Permalink to &quot;Events Example&quot;">​</a></h2><p>The full example code can be found on <a href="https://github.com/code-wallet/code-sdk/tree/main/examples/4-minimal-with-webhook" target="_blank" rel="noreferrer">GitHub</a>.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-3rZbD" id="tab-ENUBrCL" checked="checked"><label for="tab-ENUBrCL">client-side</label><input type="radio" name="group-3rZbD" id="tab-9mqHJkT"><label for="tab-9mqHJkT">server-side</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> code </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;https://js.getcode.com/v1&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">button</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> code.elements.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;button&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    confirmParams: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        success: { url: </span><span style="color:#9ECBFF;">&#39;https://example.com/success/{{INTENT_ID}}&#39;</span><span style="color:#E1E4E8;">, }, </span><span style="color:#6A737D;">// Optional</span></span>
<span class="line"><span style="color:#E1E4E8;">        cancel: { url: </span><span style="color:#9ECBFF;">&#39;https://example.com/cancel&#39;</span><span style="color:#E1E4E8;">, }, </span><span style="color:#6A737D;">// Optional</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">button.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;success&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// Handle successful payment, the intent ID will be provided in the event object</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// return true; // Return true to prevent the browser from navigating to the optional success URL provided in the confirmParams</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">button.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;cancel&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// Handle cancelled payment, the intent ID will be provided in the event object</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// return true; // Return true to prevent the browser from navigating to the optional cancel URL provided in the confirmParams</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">button.</span><span style="color:#B392F0;">mount</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#button-container&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> code </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;https://js.getcode.com/v1&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">button</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> code.elements.</span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;button&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    confirmParams: {</span></span>
<span class="line"><span style="color:#24292E;">        success: { url: </span><span style="color:#032F62;">&#39;https://example.com/success/{{INTENT_ID}}&#39;</span><span style="color:#24292E;">, }, </span><span style="color:#6A737D;">// Optional</span></span>
<span class="line"><span style="color:#24292E;">        cancel: { url: </span><span style="color:#032F62;">&#39;https://example.com/cancel&#39;</span><span style="color:#24292E;">, }, </span><span style="color:#6A737D;">// Optional</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">button.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;success&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">event</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// Handle successful payment, the intent ID will be provided in the event object</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// return true; // Return true to prevent the browser from navigating to the optional success URL provided in the confirmParams</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">button.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;cancel&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">event</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// Handle cancelled payment, the intent ID will be provided in the event object</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// return true; // Return true to prevent the browser from navigating to the optional cancel URL provided in the confirmParams</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">button.</span><span style="color:#6F42C1;">mount</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#button-container&#39;</span><span style="color:#24292E;">);</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> code </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@code-wallet/client&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> express </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;express&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">express</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Create intent (notify the Code Sequencer that you want to receive a payment)</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">post</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/create-intent&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">clientSecret</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">id</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> code.paymentIntents.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// The location where we want to be notified once the payment is made. This</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// URL must be publicly accessible and live at the time this call is made.</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// You can use cloudflare tunnels to test this locally:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// See https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/install-and-setup/tunnel-guide/local/</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// For example, run \`cloudflared tunnel --url localhost:3030\`</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 1) Then replace the url below with the url provided by cloudflare tunnels</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 2) And finally, start the server with \`node server.js\`</span></span>
<span class="line"><span style="color:#E1E4E8;">    webhook: { url: </span><span style="color:#9ECBFF;">&#39;https://example.com/webhook&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Created intent&#39;</span><span style="color:#E1E4E8;">, id);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// This value needs to be sent to the browser so that the browser can use it</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// to setup a payment with this intent instance.</span></span>
<span class="line"><span style="color:#E1E4E8;">  res.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">({ clientSecret });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// This endpoint is where Code will let us know that a payment has been made.</span></span>
<span class="line"><span style="color:#6A737D;">// You can use this to gate content or update your database that a payment has</span></span>
<span class="line"><span style="color:#6A737D;">// been made.</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">post</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/webhook&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Received webhook event&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Once we receive a webhook event, we can use the JWT to verify that it was</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// sent by Code and that it hasn&#39;t been tampered with. It will be signed with</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// the public key \`codeHy87wGD5oMRLG75qKqsSi1vWE3oxNyYmXo5F9YR\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">jwt</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> req.body.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">header</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">payload</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">signature</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> jwt.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">part</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> Buffer.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(part, </span><span style="color:#9ECBFF;">&#39;base64&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;header:</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">, header.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;payload:</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">, payload.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;signature:</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">, signature.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hex&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Example response:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// header:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   {&quot;alg&quot;:&quot;EdDSA&quot;,&quot;typ&quot;:&quot;JWT&quot;}</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// payload:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   {&quot;amount&quot;:0.01,&quot;currency&quot;:&quot;USD&quot;,&quot;destination&quot;:&quot;E8otxw1CVX9bfyddKu3ZB3BVLa4VVF9J7CTPdnUwT9jR&quot;,&quot;exchangeRate&quot;:0.00000893,&quot;intent&quot;:&quot;9joz92rMXnS8NuK9Y3PnukdVi1W7S9cs388CTQxxg6r6&quot;,&quot;quarks&quot;:112000000,&quot;state&quot;:&quot;SUBMITTED&quot;}</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// signature:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   0d3e5361e13a727ca7cb0aaed9bb30652266d24701aae7ce26c3acc6f1886274310f69af3ca545f3057fc628ec9c45e74b606da7d44539f05637a6c8c56cde01</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// After verifying the JWT, you can check the payload to see if the payment</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// was successful.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// At this point you can store that the intent was paid for in your database</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  res.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">({ success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> code </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@code-wallet/client&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> express </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;express&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">express</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Create intent (notify the Code Sequencer that you want to receive a payment)</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">post</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/create-intent&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">req</span><span style="color:#24292E;">, </span><span style="color:#E36209;">res</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">clientSecret</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">id</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> code.paymentIntents.</span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// The location where we want to be notified once the payment is made. This</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// URL must be publicly accessible and live at the time this call is made.</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// You can use cloudflare tunnels to test this locally:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// See https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/install-and-setup/tunnel-guide/local/</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// For example, run \`cloudflared tunnel --url localhost:3030\`</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 1) Then replace the url below with the url provided by cloudflare tunnels</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 2) And finally, start the server with \`node server.js\`</span></span>
<span class="line"><span style="color:#24292E;">    webhook: { url: </span><span style="color:#032F62;">&#39;https://example.com/webhook&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Created intent&#39;</span><span style="color:#24292E;">, id);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// This value needs to be sent to the browser so that the browser can use it</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// to setup a payment with this intent instance.</span></span>
<span class="line"><span style="color:#24292E;">  res.</span><span style="color:#6F42C1;">send</span><span style="color:#24292E;">({ clientSecret });</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// This endpoint is where Code will let us know that a payment has been made.</span></span>
<span class="line"><span style="color:#6A737D;">// You can use this to gate content or update your database that a payment has</span></span>
<span class="line"><span style="color:#6A737D;">// been made.</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">post</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/webhook&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">req</span><span style="color:#24292E;">, </span><span style="color:#E36209;">res</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Received webhook event&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Once we receive a webhook event, we can use the JWT to verify that it was</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// sent by Code and that it hasn&#39;t been tampered with. It will be signed with</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// the public key \`codeHy87wGD5oMRLG75qKqsSi1vWE3oxNyYmXo5F9YR\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">jwt</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> req.body.</span><span style="color:#6F42C1;">split</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;.&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">header</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">payload</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">signature</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> jwt.</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">((</span><span style="color:#E36209;">part</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> Buffer.</span><span style="color:#6F42C1;">from</span><span style="color:#24292E;">(part, </span><span style="color:#032F62;">&#39;base64&#39;</span><span style="color:#24292E;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;header:</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">, header.</span><span style="color:#6F42C1;">toString</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;payload:</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">, payload.</span><span style="color:#6F42C1;">toString</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;signature:</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">, signature.</span><span style="color:#6F42C1;">toString</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;hex&#39;</span><span style="color:#24292E;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Example response:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// header:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   {&quot;alg&quot;:&quot;EdDSA&quot;,&quot;typ&quot;:&quot;JWT&quot;}</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// payload:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   {&quot;amount&quot;:0.01,&quot;currency&quot;:&quot;USD&quot;,&quot;destination&quot;:&quot;E8otxw1CVX9bfyddKu3ZB3BVLa4VVF9J7CTPdnUwT9jR&quot;,&quot;exchangeRate&quot;:0.00000893,&quot;intent&quot;:&quot;9joz92rMXnS8NuK9Y3PnukdVi1W7S9cs388CTQxxg6r6&quot;,&quot;quarks&quot;:112000000,&quot;state&quot;:&quot;SUBMITTED&quot;}</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// signature:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   0d3e5361e13a727ca7cb0aaed9bb30652266d24701aae7ce26c3acc6f1886274310f69af3ca545f3057fc628ec9c45e74b606da7d44539f05637a6c8c56cde01</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// After verifying the JWT, you can check the payload to see if the payment</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// was successful.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// At this point you can store that the intent was paid for in your database</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  res.</span><span style="color:#6F42C1;">send</span><span style="color:#24292E;">({ success: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> });</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div></div></div><p>This snippet creates a payment button that looks like this:</p><div id="button-container"></div>`,11),e=[o];function t(c,r,y,E,i,u){return n(),a("div",null,e)}const F=s(p,[["render",t]]);export{h as __pageData,F as default};
