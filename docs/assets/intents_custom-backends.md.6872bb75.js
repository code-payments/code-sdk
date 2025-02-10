import{_ as s,o as e,c as a,Q as n}from"./chunks/framework.0c8e00f4.js";const x=JSON.parse('{"title":"Custom Backends","description":"","frontmatter":{},"headers":[],"relativePath":"intents/custom-backends.md","filePath":"intents/custom-backends.md"}'),l={name:"intents/custom-backends.md"},o=n(`<h1 id="custom-backends" tabindex="-1">Custom Backends <a class="header-anchor" href="#custom-backends" aria-label="Permalink to &quot;Custom Backends&quot;">​</a></h1><p>Code uses the concept of a payment intent to represent a user&#39;s intent to pay another user. This is different from a blockchain transaction. A payment intent is a higher-level abstraction that represents a user&#39;s intent to pay another user which is a way to represent a payment in a way that&#39;s more familiar to users.</p><p>Unless you have a specific reason to use a custom backend, we recommend using one of our SDK <a href="./../guide/installation.html#packages">packages</a> to construct the payment request intent. You can learn more about the payment flow <a href="./../intents/payment-requests.html">here</a>.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This page is strictly for those who want to use a custom backend or a language that isn&#39;t supported yet. This is an advanced topic and we recommend using one of our SDKs to construct the payment request intent.</p></div><h2 id="payment-request-intents" tabindex="-1">Payment Request Intents <a class="header-anchor" href="#payment-request-intents" aria-label="Permalink to &quot;Payment Request Intents&quot;">​</a></h2><p>If you&#39;d like to use a custom backend or a language that isn&#39;t supported yet, it is possible to call our <code>createIntent</code> API directly.</p><p>A typical server-side integration will look something like this:</p><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">sequenceDiagram</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">autonumber</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">participant</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">User</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">participant</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">Client</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">User</span><span style="color:#F97583;">-&gt;&gt;</span><span style="color:#FFAB70;">Client</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Land on payment page</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">Client</span><span style="color:#F97583;">-&gt;&gt;</span><span style="color:#FFAB70;">Server</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Send order information</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">Server</span><span style="color:#F97583;">-&gt;&gt;</span><span style="color:#FFAB70;">Code Sequencer</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">POST /v1/createIntent</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">Code Sequencer</span><span style="color:#F97583;">-&gt;&gt;</span><span style="color:#FFAB70;">Server</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Return PaymentIntent status</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">Server</span><span style="color:#F97583;">-&gt;&gt;</span><span style="color:#FFAB70;">Client</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Return PaymentIntent&#39;s client_secret</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">Client</span><span style="color:#F97583;">-&gt;&gt;</span><span style="color:#FFAB70;">Code Sequencer</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Open message stream at rendezvous value</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">sequenceDiagram</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">autonumber</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">participant</span><span style="color:#24292E;"> </span><span style="color:#E36209;">User</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">participant</span><span style="color:#24292E;"> </span><span style="color:#E36209;">Client</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">User</span><span style="color:#D73A49;">-&gt;&gt;</span><span style="color:#E36209;">Client</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Land on payment page</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">Client</span><span style="color:#D73A49;">-&gt;&gt;</span><span style="color:#E36209;">Server</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Send order information</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">Server</span><span style="color:#D73A49;">-&gt;&gt;</span><span style="color:#E36209;">Code Sequencer</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">POST /v1/createIntent</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">Code Sequencer</span><span style="color:#D73A49;">-&gt;&gt;</span><span style="color:#E36209;">Server</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Return PaymentIntent status</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">Server</span><span style="color:#D73A49;">-&gt;&gt;</span><span style="color:#E36209;">Client</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Return PaymentIntent&#39;s client_secret</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">Client</span><span style="color:#D73A49;">-&gt;&gt;</span><span style="color:#E36209;">Code Sequencer</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Open message stream at rendezvous value</span></span></code></pre></div><p>You can learn more about the payment flow <a href="./../intents/payment-requests.html">here</a>.</p><p>In order to call the <code>createIntent</code> API manually, you&#39;ll need to construct the payment intent binary blob yourself and sign it with the <a href="./../reference/rendezvous.html">rendezvous key</a>.</p><p>You can do that one of two ways:</p><ul><li>Use a protobuf library to construct the binary blob</li><li>Construct the binary blob manually</li></ul><h3 id="protobuf" tabindex="-1">Protobuf <a class="header-anchor" href="#protobuf" aria-label="Permalink to &quot;Protobuf&quot;">​</a></h3><p>The protobuf defenition for <code>RequestToReceiveBill</code> is as follows:</p><div class="language-protobuf vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">protobuf</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">message SolanaAccountId {</span></span>
<span class="line"><span style="color:#e1e4e8;">    bytes value = 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">message Signature {</span></span>
<span class="line"><span style="color:#e1e4e8;">    bytes value = 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">message MessageId {</span></span>
<span class="line"><span style="color:#e1e4e8;">    bytes value = 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">message Message {</span></span>
<span class="line"><span style="color:#e1e4e8;">    MessageId id = 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">    Signature send_message_request_signature = 3;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    oneof kind {</span></span>
<span class="line"><span style="color:#e1e4e8;">        RequestToReceiveBill request_to_receive_bill = 5;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">message RequestToReceiveBill {</span></span>
<span class="line"><span style="color:#e1e4e8;">    SolanaAccountId requestor_account = 1;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    oneof exchange_data {</span></span>
<span class="line"><span style="color:#e1e4e8;">        ExchangeData            exact = 2;</span></span>
<span class="line"><span style="color:#e1e4e8;">        ExchangeDataWithoutRate partial = 3;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">message ExchangeData {</span></span>
<span class="line"><span style="color:#e1e4e8;">    string currency = 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">    double exchange_rate = 2;</span></span>
<span class="line"><span style="color:#e1e4e8;">    double native_amount = 3;</span></span>
<span class="line"><span style="color:#e1e4e8;">    uint64 quarks = 4;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">message ExchangeDataWithoutRate {</span></span>
<span class="line"><span style="color:#e1e4e8;">    string currency = 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">    double native_amount = 2;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">message SolanaAccountId {</span></span>
<span class="line"><span style="color:#24292e;">    bytes value = 1;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">message Signature {</span></span>
<span class="line"><span style="color:#24292e;">    bytes value = 1;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">message MessageId {</span></span>
<span class="line"><span style="color:#24292e;">    bytes value = 1;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">message Message {</span></span>
<span class="line"><span style="color:#24292e;">    MessageId id = 1;</span></span>
<span class="line"><span style="color:#24292e;">    Signature send_message_request_signature = 3;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    oneof kind {</span></span>
<span class="line"><span style="color:#24292e;">        RequestToReceiveBill request_to_receive_bill = 5;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">message RequestToReceiveBill {</span></span>
<span class="line"><span style="color:#24292e;">    SolanaAccountId requestor_account = 1;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    oneof exchange_data {</span></span>
<span class="line"><span style="color:#24292e;">        ExchangeData            exact = 2;</span></span>
<span class="line"><span style="color:#24292e;">        ExchangeDataWithoutRate partial = 3;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">message ExchangeData {</span></span>
<span class="line"><span style="color:#24292e;">    string currency = 1;</span></span>
<span class="line"><span style="color:#24292e;">    double exchange_rate = 2;</span></span>
<span class="line"><span style="color:#24292e;">    double native_amount = 3;</span></span>
<span class="line"><span style="color:#24292e;">    uint64 quarks = 4;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">message ExchangeDataWithoutRate {</span></span>
<span class="line"><span style="color:#24292e;">    string currency = 1;</span></span>
<span class="line"><span style="color:#24292e;">    double native_amount = 2;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Given the above protobuf definition, you can construct a payment intent as follows:</p><div class="language-raw vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">raw</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[</span></span>
<span class="line"><span style="color:#e1e4e8;">  0x2A, 0x34, 0x0A, 0x22, 0x0A, 0x20, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,</span></span>
<span class="line"><span style="color:#e1e4e8;">  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,</span></span>
<span class="line"><span style="color:#e1e4e8;">  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,</span></span>
<span class="line"><span style="color:#e1e4e8;">  0x00, 0x00, 0x1A, 0x0E, 0x0A, 0x03, 0x75, 0x73, 0x64, 0x11, 0x00, 0x00,</span></span>
<span class="line"><span style="color:#e1e4e8;">  0x00, 0x00, 0x00, 0x00, 0x24, 0x40</span></span>
<span class="line"><span style="color:#e1e4e8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[</span></span>
<span class="line"><span style="color:#24292e;">  0x2A, 0x34, 0x0A, 0x22, 0x0A, 0x20, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,</span></span>
<span class="line"><span style="color:#24292e;">  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,</span></span>
<span class="line"><span style="color:#24292e;">  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,</span></span>
<span class="line"><span style="color:#24292e;">  0x00, 0x00, 0x1A, 0x0E, 0x0A, 0x03, 0x75, 0x73, 0x64, 0x11, 0x00, 0x00,</span></span>
<span class="line"><span style="color:#24292e;">  0x00, 0x00, 0x00, 0x00, 0x24, 0x40</span></span>
<span class="line"><span style="color:#24292e;">]</span></span></code></pre></div><p>Let&#39;s decode the given binary serialization based on the protobuf definitions provided earlier.</p><h4 id="message-structure" tabindex="-1">Message structure <a class="header-anchor" href="#message-structure" aria-label="Permalink to &quot;Message structure&quot;">​</a></h4><ul><li><code>0x2A</code>: This indicates field number 5 (<code>request_to_receive_bill</code>) with a wire type of 2 (length-delimited).</li><li><code>0x34</code>: The length of the upcoming <code>RequestToReceiveBill</code> message is 52 bytes.</li></ul><h4 id="requesttoreceivebill-structure" tabindex="-1">RequestToReceiveBill structure <a class="header-anchor" href="#requesttoreceivebill-structure" aria-label="Permalink to &quot;RequestToReceiveBill structure&quot;">​</a></h4><ul><li><code>0x0A</code>: This indicates field number 1 (<code>requestor_account</code>) with a wire type of 2 (length-delimited).</li><li><code>0x22</code>: The length of the upcoming <code>SolanaAccountId</code> message is 34 bytes.</li></ul><h4 id="solanaaccountid-structure" tabindex="-1">SolanaAccountId structure <a class="header-anchor" href="#solanaaccountid-structure" aria-label="Permalink to &quot;SolanaAccountId structure&quot;">​</a></h4><ul><li><code>0x0A</code>: This indicates field number 1 (value) with a wire type of 2 (length-delimited).</li><li><code>0x20</code>: The length of the upcoming value is 32 bytes.</li><li>Following 32 bytes: 0x00 x 32: This is the account ID in bytes format, which in our example, is all zeros.</li></ul><h4 id="requesttoreceivebill-structure-continued" tabindex="-1">RequestToReceiveBill structure (continued) <a class="header-anchor" href="#requesttoreceivebill-structure-continued" aria-label="Permalink to &quot;RequestToReceiveBill structure (continued)&quot;">​</a></h4><ul><li><code>0x1A</code>: This indicates field number 3 (partial, which is of type <code>ExchangeDataWithoutRate</code>) with a wire type of 2 (length-delimited).</li><li><code>0x0E</code>: The length of the upcoming <code>ExchangeDataWithoutRate</code> message is 14 bytes.</li></ul><h4 id="exchangedatawithoutrate-structure" tabindex="-1">ExchangeDataWithoutRate structure: <a class="header-anchor" href="#exchangedatawithoutrate-structure" aria-label="Permalink to &quot;ExchangeDataWithoutRate structure:&quot;">​</a></h4><ul><li><code>0x0A</code>: This indicates field number 1 (currency) with a wire type of 2 (length-delimited).</li><li><code>0x03</code>: The length of the currency string is 3 bytes.</li><li>Following 3 bytes: <code>0x75 0x73 0x64</code>: This is ASCII for the string <code>&quot;usd&quot;</code>.</li><li><code>0x11</code>: This indicates field number 2 (native_amount) with a wire type of 1 (64-bit).</li><li>Following 8 bytes: <code>0x00 0x00 0x00 0x00 0x00 0x00 0x24 0x40</code>: This is the number representation of <code>10.0</code> for the native amount.</li></ul><h4 id="decoded-values" tabindex="-1">Decoded values <a class="header-anchor" href="#decoded-values" aria-label="Permalink to &quot;Decoded values&quot;">​</a></h4><p>From this binary serialization, the values decoded are:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">request_to_receive_bill:</span></span>
<span class="line"><span style="color:#e1e4e8;">  requestor_account: 0x00 x 32 (or &#39;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=&#39; in Base64)</span></span>
<span class="line"><span style="color:#e1e4e8;">  partial:</span></span>
<span class="line"><span style="color:#e1e4e8;">    currency: &quot;usd&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    native_amount: 10.0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">request_to_receive_bill:</span></span>
<span class="line"><span style="color:#24292e;">  requestor_account: 0x00 x 32 (or &#39;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=&#39; in Base64)</span></span>
<span class="line"><span style="color:#24292e;">  partial:</span></span>
<span class="line"><span style="color:#24292e;">    currency: &quot;usd&quot;</span></span>
<span class="line"><span style="color:#24292e;">    native_amount: 10.0</span></span></code></pre></div><p>This is then signed using the rendezvous key and <code>POST</code>ed to the Code Sequencer&#39;s <code>createIntent</code> endpoint.</p><p>You can see an example of this in our <a href="https://github.com/code-payments/code-sdk-python/blob/main/code_wallet/library/message.py" target="_blank" rel="noreferrer">Python SDK</a>.</p>`,34),t=[o];function p(c,r,i,u,y,d){return e(),a("div",null,t)}const g=s(l,[["render",p]]);export{x as __pageData,g as default};
