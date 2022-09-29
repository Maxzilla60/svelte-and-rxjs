<script lang="ts">
	import { Writable, writable } from 'svelte/store';
	import { fruit$ } from './services/fruitStore';
	import BouncyFruit from './components/BouncyFruit.svelte';
	import SubscribeAndDerivedDemo from './components/SubscribeAndDerivedDemo.svelte';

	const bananaCount$ = writable<number>(0);
	const kiwiCount$ = writable<number>(0);
	const tomatoCount$ = writable<number>(0);

	createCountSubscription(bananaCount$, 'banana');
	createCountSubscription(kiwiCount$, 'kiwi');
	createCountSubscription(tomatoCount$, 'tomato');

	function createCountSubscription(count$: Writable<number>, tomato: string): void {
		fruit$.subscribe(fruit => {
			if (fruit?.fruit === tomato) {
				count$.update(c => c + 1);
			}
		});
	}
</script>

<main>
	<h1>Svelte 🧡 RxJS</h1>
	<h5>Maxime Orione - Renta</h5>

	<SubscribeAndDerivedDemo/>

	<p>---</p>

	<div id="bouncy_fruits">
		<BouncyFruit fruitEmoji="🍌" fruitCount$={bananaCount$}/>
		<BouncyFruit fruitEmoji="🥝" fruitCount$={kiwiCount$}/>
		<BouncyFruit fruitEmoji="🍅" fruitCount$={tomatoCount$}/>
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

	#bouncy_fruits {
		display: inline-flex;
	}
</style>
