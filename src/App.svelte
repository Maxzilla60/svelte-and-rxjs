<script lang="ts">
	import { fruit$ } from './services/fruitStore';

	let eventsLog = [];
	fruit$.subscribe(event => eventsLog = [event, ...eventsLog]);
</script>

<main>
	<h1>Svelte 🧡 RxJS</h1>
	<h5>Maxime Orione - Renta</h5>

	<div id="event_log">
		{#each eventsLog as event}
			<div>{JSON.stringify(event)}</div>
		{/each}
	</div>
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

	#event_log {
		padding-left: 15px;
		height: 100px;
		overflow-y: scroll;
		font-size: small;
	}
</style>
