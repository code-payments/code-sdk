import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.0c8e00f4.js";const u=JSON.parse('{"title":"Quick Start - Python","description":"Get up and running with the Code SDK in Python.","frontmatter":{"title":"Quick Start - Python","description":"Get up and running with the Code SDK in Python."},"headers":[],"relativePath":"guide/quick-start-python.md","filePath":"guide/quick-start-python.md"}'),t={name:"guide/quick-start-python.md"},p=e(`<h1 id="quick-start-python" tabindex="-1">Quick Start - Python <a class="header-anchor" href="#quick-start-python" aria-label="Permalink to &quot;Quick Start - Python&quot;">​</a></h1><p>This guide will help you integrate the Code SDK into your Python application, allowing you to create and verify payment intents seamlessly.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><ul><li><strong>Python</strong>: Ensure you have Python (version 3.7 or newer) installed.</li><li><strong>pip</strong>: Python package installer, usually included with Python installations.</li></ul><h2 id="step-1-install-the-code-python-sdk" tabindex="-1">Step 1: Install the Code Python SDK <a class="header-anchor" href="#step-1-install-the-code-python-sdk" aria-label="Permalink to &quot;Step 1: Install the Code Python SDK&quot;">​</a></h2><p>Use pip to install the Code SDK. Open your terminal and run:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">code-wallet</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">code-wallet</span></span></code></pre></div><p>If you&#39;re using a virtual environment, ensure it&#39;s activated before running the above command.</p><h2 id="step-2-create-a-payment-intent" tabindex="-1">Step 2: Create a Payment Intent <a class="header-anchor" href="#step-2-create-a-payment-intent" aria-label="Permalink to &quot;Step 2: Create a Payment Intent&quot;">​</a></h2><p>Create a Python script named <code>create_intent.py</code> and add the following code to create a payment intent:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># create_intent.py</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> code_wallet.client.intents </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> payment_intents</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">create_payment_intent</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    test_data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;destination&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;E8otxw1CVX9bfyddKu3ZB3BVLa4VVF9J7CTPdnUwT9jR&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;"># Replace with your destination address</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;amount&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0.05</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;"># Minimum amount is $0.05 USD</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;currency&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;usd&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># Create a payment request intent</span></span>
<span class="line"><span style="color:#E1E4E8;">        response </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> payment_intents.create(test_data)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Payment Intent Created:&quot;</span><span style="color:#E1E4E8;">, response)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">except</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Exception</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> e:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Error creating payment intent:&quot;</span><span style="color:#E1E4E8;">, e)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__name__</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;__main__&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    create_payment_intent()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># create_intent.py</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> code_wallet.client.intents </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> payment_intents</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">create_payment_intent</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    test_data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;destination&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;E8otxw1CVX9bfyddKu3ZB3BVLa4VVF9J7CTPdnUwT9jR&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;"># Replace with your destination address</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;amount&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0.05</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;"># Minimum amount is $0.05 USD</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;currency&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;usd&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">try</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># Create a payment request intent</span></span>
<span class="line"><span style="color:#24292E;">        response </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> payment_intents.create(test_data)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Payment Intent Created:&quot;</span><span style="color:#24292E;">, response)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">except</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Exception</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> e:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Error creating payment intent:&quot;</span><span style="color:#24292E;">, e)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__name__</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;__main__&quot;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    create_payment_intent()</span></span></code></pre></div><p>Run the script:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">python</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create_intent.py</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">python</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create_intent.py</span></span></code></pre></div><p>You should see a response indicating that the payment intent has been created, including an <code>id</code> and <code>clientSecret</code>.</p><h2 id="step-3-verify-the-payment-intent" tabindex="-1">Step 3: Verify the Payment Intent <a class="header-anchor" href="#step-3-verify-the-payment-intent" aria-label="Permalink to &quot;Step 3: Verify the Payment Intent&quot;">​</a></h2><p>Create another Python script named <code>verify_intent.py</code> to verify the status of the payment intent:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># verify_intent.py</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> code_wallet.client.intents </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> payment_intents</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">verify_payment_intent</span><span style="color:#E1E4E8;">(intent_id):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># Verify the intent status</span></span>
<span class="line"><span style="color:#E1E4E8;">        status </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> payment_intents.get_status(intent_id)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Payment Intent Status:&quot;</span><span style="color:#E1E4E8;">, status)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">except</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Exception</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> e:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Error verifying payment intent:&quot;</span><span style="color:#E1E4E8;">, e)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__name__</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;__main__&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># Replace &#39;your-intent-id&#39; with the actual intent ID returned from create_intent.py</span></span>
<span class="line"><span style="color:#E1E4E8;">    intent_id </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;your-intent-id&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    verify_payment_intent(intent_id)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># verify_intent.py</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> code_wallet.client.intents </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> payment_intents</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">verify_payment_intent</span><span style="color:#24292E;">(intent_id):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">try</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># Verify the intent status</span></span>
<span class="line"><span style="color:#24292E;">        status </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> payment_intents.get_status(intent_id)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Payment Intent Status:&quot;</span><span style="color:#24292E;">, status)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">except</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Exception</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> e:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Error verifying payment intent:&quot;</span><span style="color:#24292E;">, e)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__name__</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;__main__&quot;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># Replace &#39;your-intent-id&#39; with the actual intent ID returned from create_intent.py</span></span>
<span class="line"><span style="color:#24292E;">    intent_id </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;your-intent-id&#39;</span></span>
<span class="line"><span style="color:#24292E;">    verify_payment_intent(intent_id)</span></span></code></pre></div><p>Run the verification script:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">python</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">verify_intent.py</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">python</span><span style="color:#24292E;"> </span><span style="color:#032F62;">verify_intent.py</span></span></code></pre></div><p>This will output the current status of the specified payment intent.</p><h2 id="notes" tabindex="-1">Notes <a class="header-anchor" href="#notes" aria-label="Permalink to &quot;Notes&quot;">​</a></h2><ul><li><strong>Destination Address:</strong> Ensure that the <code>destination</code> address is a valid Solana address associated with your Code Wallet.</li><li><strong>Amount Constraints:</strong> The minimum payment amount is $0.05 USD, the maximum is $250 USD. Adjust the <code>amount</code> as needed.</li></ul><h2 id="further-steps" tabindex="-1">Further Steps <a class="header-anchor" href="#further-steps" aria-label="Permalink to &quot;Further Steps&quot;">​</a></h2><ul><li><strong>Integrate with Your Application:</strong> Incorporate the SDK into your application&#39;s backend to handle payments dynamically.</li><li><strong>Explore Advanced Features:</strong> Look into features like <a href="./../intents/payment-fees.html">Payment Fees</a>, <a href="./../intents/tipping.html">Tipping</a>, and <a href="./../reference/idempotency.html">Idempotency</a> to enhance your payment flows.</li><li><strong>Check Examples:</strong> Refer to the <a href="https://github.com/code-payments/code-sdk-python/tree/main/example" target="_blank" rel="noreferrer">Python Examples</a> repository for more comprehensive use cases.</li></ul><h2 id="need-help" tabindex="-1">Need Help? <a class="header-anchor" href="#need-help" aria-label="Permalink to &quot;Need Help?&quot;">​</a></h2><p>If you encounter any issues or have questions, join our community on <a href="https://discord.gg/T8Tpj8DBFp" target="_blank" rel="noreferrer">Discord</a> or follow us on <a href="https://twitter.com/getcode" target="_blank" rel="noreferrer">Twitter</a>.</p>`,26),l=[p];function o(r,c,i,y,E,d){return n(),a("div",null,l)}const m=s(t,[["render",o]]);export{u as __pageData,m as default};
