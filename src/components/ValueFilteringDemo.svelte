<script lang="ts">
	import { Writable, writable } from 'svelte/store';
	import { fruit$ } from '../services/fruitWritable';
	import BouncyFruit from './BouncyFruit.svelte';

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

<div id="bouncy_fruits">
	<BouncyFruit fruitEmoji="🍌" fruitCount$={bananaCount$}/>
	<BouncyFruit fruitEmoji="🥝" fruitCount$={kiwiCount$}/>
	<BouncyFruit fruitEmoji="🍅" fruitCount$={tomatoCount$}/>
</div>

<style>
	#bouncy_fruits {
		display: inline-flex;
	}
</style>
