<script context="module">
	export const prerender = true;
</script>

<script>
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<div class="welcome">
			<p>Welcome to our new and improved NFT paradise</p>
		</div>
	</h1>
	<h2>
		<div class="nft">
			<p>
				If it's your first time here<br />
				GET YOUR FREE NFT NOW! Everyone gets one!
			</p>
		</div>
	</h2>

	<button>
		GET A FREE NFT
		<!-- link to nft minting page -->
	</button>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.nft p {
		color: red;
		text-align: center;
		font-size: xx-large;
	}

	.welcome p {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
		color: blue;
	}
	button {
		font-size: xx-large;
	}
</style>
