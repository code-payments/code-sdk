import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.0c8e00f4.js";const h=JSON.parse('{"title":"Quick Start - Go","description":"Get up and running with the Code SDK in Go.","frontmatter":{"title":"Quick Start - Go","description":"Get up and running with the Code SDK in Go."},"headers":[],"relativePath":"guide/quick-start-go.md","filePath":"guide/quick-start-go.md"}'),e={name:"guide/quick-start-go.md"},p=l(`<h1 id="quick-start-go" tabindex="-1">Quick Start - Go <a class="header-anchor" href="#quick-start-go" aria-label="Permalink to &quot;Quick Start - Go&quot;">​</a></h1><p>This guide will help you integrate the Code SDK into your Go application, allowing you to create and verify payment intents seamlessly.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><ul><li><strong>Go</strong>: Ensure you have Go (version 1.16 or newer) installed.</li><li><strong>Git</strong>: Required for fetching dependencies. Install it from <a href="https://git-scm.com/downloads" target="_blank" rel="noreferrer">git-scm.com</a>.</li></ul><h2 id="step-1-install-the-code-go-sdk" tabindex="-1">Step 1: Install the Code Go SDK <a class="header-anchor" href="#step-1-install-the-code-go-sdk" aria-label="Permalink to &quot;Step 1: Install the Code Go SDK&quot;">​</a></h2><p>Use the Go toolset to install the Code SDK. Navigate to your project directory and run:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">go</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">github.com/code-payments/code-sdk-go</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">go</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">github.com/code-payments/code-sdk-go</span></span></code></pre></div><p>This command fetches the SDK and adds it to your project&#39;s dependencies.</p><h2 id="step-2-create-a-payment-intent" tabindex="-1">Step 2: Create a Payment Intent <a class="header-anchor" href="#step-2-create-a-payment-intent" aria-label="Permalink to &quot;Step 2: Create a Payment Intent&quot;">​</a></h2><p>Create a Go file named <code>createIntent.go</code> and add the following code to create a payment intent:</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// createIntent.go</span></span>
<span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">context</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">log</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">codesdk</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">github.com/code-payments/code-sdk-go/sdk</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">check</span><span style="color:#E1E4E8;">(err </span><span style="color:#F97583;">error</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> err </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">nil</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">		log.</span><span style="color:#79B8FF;">Fatal</span><span style="color:#E1E4E8;">(err)</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">	ctx </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> context.</span><span style="color:#79B8FF;">Background</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// Setup the Code web client</span></span>
<span class="line"><span style="color:#E1E4E8;">	client </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> codesdk.</span><span style="color:#79B8FF;">NewWebClient</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// Specify payment request details</span></span>
<span class="line"><span style="color:#E1E4E8;">	intent, err </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> codesdk.</span><span style="color:#79B8FF;">NewPaymentRequestIntent</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// Use the string &quot;usd&quot; for currency</span></span>
<span class="line"><span style="color:#E1E4E8;">		codesdk.USD,</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// Minimum amount is $0.05 USD</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">0.05</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// Code Deposit Address or any Solana token account</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#9ECBFF;">&quot;E8otxw1CVX9bfyddKu3ZB3BVLa4VVF9J7CTPdnUwT9jR&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	)</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">check</span><span style="color:#E1E4E8;">(err)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// Create a payment request intent</span></span>
<span class="line"><span style="color:#E1E4E8;">	createdIntent, err </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> client.</span><span style="color:#79B8FF;">CreatePaymentRequest</span><span style="color:#E1E4E8;">(ctx, intent)</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">check</span><span style="color:#E1E4E8;">(err)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	log.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Payment Intent Created:&quot;</span><span style="color:#E1E4E8;">, createdIntent.</span><span style="color:#79B8FF;">GetIntentId</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// createIntent.go</span></span>
<span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">context</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">log</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">codesdk</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">github.com/code-payments/code-sdk-go/sdk</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">check</span><span style="color:#24292E;">(err </span><span style="color:#D73A49;">error</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> err </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">nil</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">		log.</span><span style="color:#005CC5;">Fatal</span><span style="color:#24292E;">(err)</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">	ctx </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> context.</span><span style="color:#005CC5;">Background</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// Setup the Code web client</span></span>
<span class="line"><span style="color:#24292E;">	client </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> codesdk.</span><span style="color:#005CC5;">NewWebClient</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// Specify payment request details</span></span>
<span class="line"><span style="color:#24292E;">	intent, err </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> codesdk.</span><span style="color:#005CC5;">NewPaymentRequestIntent</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// Use the string &quot;usd&quot; for currency</span></span>
<span class="line"><span style="color:#24292E;">		codesdk.USD,</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// Minimum amount is $0.05 USD</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">0.05</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// Code Deposit Address or any Solana token account</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#032F62;">&quot;E8otxw1CVX9bfyddKu3ZB3BVLa4VVF9J7CTPdnUwT9jR&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	)</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">check</span><span style="color:#24292E;">(err)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// Create a payment request intent</span></span>
<span class="line"><span style="color:#24292E;">	createdIntent, err </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> client.</span><span style="color:#005CC5;">CreatePaymentRequest</span><span style="color:#24292E;">(ctx, intent)</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">check</span><span style="color:#24292E;">(err)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	log.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Payment Intent Created:&quot;</span><span style="color:#24292E;">, createdIntent.</span><span style="color:#005CC5;">GetIntentId</span><span style="color:#24292E;">())</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Run the script:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">go</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">createIntent.go</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">go</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">createIntent.go</span></span></code></pre></div><p>You should see a log message indicating that the payment intent has been created, along with its <code>IntentId</code>.</p><h2 id="step-3-verify-the-payment-intent" tabindex="-1">Step 3: Verify the Payment Intent <a class="header-anchor" href="#step-3-verify-the-payment-intent" aria-label="Permalink to &quot;Step 3: Verify the Payment Intent&quot;">​</a></h2><p>Create another Go file named <code>verifyIntent.go</code> to verify the status of the payment intent:</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// verifyIntent.go</span></span>
<span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">context</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">log</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">codesdk</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">github.com/code-payments/code-sdk-go/sdk</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">check</span><span style="color:#E1E4E8;">(err </span><span style="color:#F97583;">error</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> err </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">nil</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">		log.</span><span style="color:#79B8FF;">Fatal</span><span style="color:#E1E4E8;">(err)</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">	ctx </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> context.</span><span style="color:#79B8FF;">Background</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// Setup the Code web client</span></span>
<span class="line"><span style="color:#E1E4E8;">	client </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> codesdk.</span><span style="color:#79B8FF;">NewWebClient</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// Replace &#39;your-intent-id&#39; with the actual Intent ID returned from createIntent.go</span></span>
<span class="line"><span style="color:#E1E4E8;">	intentId </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;your-intent-id&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// Check the intent status</span></span>
<span class="line"><span style="color:#E1E4E8;">	status, err </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> client.</span><span style="color:#79B8FF;">GetIntentStatus</span><span style="color:#E1E4E8;">(ctx, intentId)</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">check</span><span style="color:#E1E4E8;">(err)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	log.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Payment Intent Status:&quot;</span><span style="color:#E1E4E8;">, status)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// verifyIntent.go</span></span>
<span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">context</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">log</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">codesdk</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">github.com/code-payments/code-sdk-go/sdk</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">check</span><span style="color:#24292E;">(err </span><span style="color:#D73A49;">error</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> err </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">nil</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">		log.</span><span style="color:#005CC5;">Fatal</span><span style="color:#24292E;">(err)</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">	ctx </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> context.</span><span style="color:#005CC5;">Background</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// Setup the Code web client</span></span>
<span class="line"><span style="color:#24292E;">	client </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> codesdk.</span><span style="color:#005CC5;">NewWebClient</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// Replace &#39;your-intent-id&#39; with the actual Intent ID returned from createIntent.go</span></span>
<span class="line"><span style="color:#24292E;">	intentId </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;your-intent-id&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// Check the intent status</span></span>
<span class="line"><span style="color:#24292E;">	status, err </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> client.</span><span style="color:#005CC5;">GetIntentStatus</span><span style="color:#24292E;">(ctx, intentId)</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">check</span><span style="color:#24292E;">(err)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	log.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Payment Intent Status:&quot;</span><span style="color:#24292E;">, status)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Run the verification script:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">go</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">verifyIntent.go</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">go</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">verifyIntent.go</span></span></code></pre></div><p>This will output the current status of the specified payment intent.</p><h2 id="notes" tabindex="-1">Notes <a class="header-anchor" href="#notes" aria-label="Permalink to &quot;Notes&quot;">​</a></h2><ul><li><strong>Destination Address:</strong> Ensure that the <code>destination</code> address is a valid Solana address associated with your Code Wallet.</li><li><strong>Amount Constraints:</strong> The minimum payment amount is $0.05 USD, the maximum is $250 USD. Adjust the <code>amount</code> as needed.</li></ul><h2 id="further-steps" tabindex="-1">Further Steps <a class="header-anchor" href="#further-steps" aria-label="Permalink to &quot;Further Steps&quot;">​</a></h2><ul><li><strong>Integrate with Your Application:</strong> Incorporate the SDK into your application&#39;s backend to handle payments dynamically.</li><li><strong>Explore Advanced Features:</strong> Look into features like <a href="./../intents/payment-fees.html">Payment Fees</a>, <a href="./../intents/tipping.html">Tipping</a>, and <a href="./../reference/idempotency.html">Idempotency</a> to enhance your payment flows.</li><li><strong>Check Examples:</strong> Refer to the <a href="https://github.com/code-payments/code-sdk-go/tree/main/example" target="_blank" rel="noreferrer">Go Examples</a> repository for more comprehensive use cases.</li></ul><h2 id="need-help" tabindex="-1">Need Help? <a class="header-anchor" href="#need-help" aria-label="Permalink to &quot;Need Help?&quot;">​</a></h2><p>If you encounter any issues or have questions, join our community on <a href="https://discord.gg/T8Tpj8DBFp" target="_blank" rel="noreferrer">Discord</a> or follow us on <a href="https://twitter.com/getcode" target="_blank" rel="noreferrer">Twitter</a>.</p>`,26),o=[p];function t(c,r,i,y,E,d){return n(),a("div",null,o)}const F=s(e,[["render",t]]);export{h as __pageData,F as default};
