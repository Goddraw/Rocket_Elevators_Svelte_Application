<script context="module">
	import { browser, dev } from '$app/env';
	//import { testApi2 } from './api.js';
	// import { web3 } from 'svelte-web3';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod

	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />

	<!-- <script>
		async function connectWallet() {
			if (window.ethereum) {
				window.web3 = new web3(ethereum);
				await window.ethereum.enable();
				metaMaskConnected = window.ethereum.isConnected();
			}
		}
		$: promise = connectWallet();
		$: metaMaskConnected = window.ethereum ? window.ethereum.isConnected() : false;

		function onClickConnectWallet() {
			promise = connectWallet();
		}
	</script> -->
</svelte:head>

<div class="content">
	<button on:click={testApi2}>test api</button>
	<!-- 
	{#if window.ethereum}
		<p>Browser wallet already connected to metamask {metaMaskConnected}</p>
	{/if}
	{#if window.ethereum && !metaMaskConnected}
		<button on:click={onClickConnectWallet}>Connect Wallet</button>
	{:else}
		<p>Wallet Connected</p>
	{/if} -->

	<h1>Buy NFTs Here</h1>
	<!-- Need to do an API call here (in a script) to see all the NFTs, loop through them as objects and show their props (name, description, image) -->

	<!-- BOUTON ECRIT MINT -->
	<p>You can buy NFTs using Rocket Elevator Tokens or Matic.</p>

	<p>
		Once you are done you can go see all the pieces you own in our section <a href="/todos"
			>Portfolio</a
		> and admire fine pieces of art.
	</p>

	<p>
		Do not forget that for every NFTs we sell 50% goes to various charities to help people who were
		traumatized by elevators in the past!
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
	.content p {
		font-size: larger;
		text-align: center;
	}
	.content a {
		color: red;
	}
</style>
