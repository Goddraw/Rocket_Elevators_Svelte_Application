/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	interface Locals {
		userid: string;
	}
	interface Window {
		ethereum: any;
	}

	// interface Platform {}

	// interface Session {}

	// interface Stuff {}
}
