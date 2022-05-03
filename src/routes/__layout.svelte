<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer id="footer">
	<div class="container">
		<div class="row">
			<div class="col-md-4">
				<!-- Footer Logo -->

				<h5>WHY US?</h5>
				<p>
					We have the conviction that we create the most innovative and reliable products on the
					market. Contact us today for any questions you might have.
				</p>

				<!-- Contact Address -->
				<address>
					<ul class="list-unstyled">
						<li class="footer-sprite address">
							4468 Wellington St Suite 204,<br />
							Verdun, Quebec H4G 1W5<br />
						</li>
						<li class="footer-sprite phone">Phone: (418) 555-1234</li>
						<li class="footer-sprite email">
							<a href="mailto:info@codeboxx.biz">info@codeboxx.biz</a>
						</li>
					</ul>
				</address>
				<!-- /Contact Address -->
			</div>

		</div>
	</div>

	<div class="copyright">
		<div class="container" />
	</div>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		text-align: center;
		padding: 40px;
		list-style-type: none;
	}

	ul {
		list-style-type: none;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
