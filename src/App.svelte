<script lang="ts">
	import SubscribeAndDerivedDemo from './components/SubscribeAndDerivedDemo.svelte';
	import ValueFilteringDemo from './components/ValueFilteringDemo.svelte';
</script>

<main>
	<h1>Svelte 🧡 RxJS</h1>
	<h5>Maxime Orione - Renta</h5>

	<SubscribeAndDerivedDemo/>

	<p>---</p>

	<ValueFilteringDemo/>
</main>

<style>
	:root {
		text-align: center;
		font-size: x-large;
		font-family: "Comic Sans MS", serif;
	}

	:global(section) {
		border: dashed black 1px;
		margin: 5px;
	}

	h1, :global(h2) {
		font-family: Calibri, sans-serif;
		font-weight: bold;
		color: #ff3e00;
	}

	h1 {
		margin-bottom: 0;
	}

	h5 {
		margin-top: 0;
		font-weight: normal;
	}
</style>
