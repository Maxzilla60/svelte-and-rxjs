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

	function createCountSubscription(count$: Writable<number>, fruitType: string): void {
		fruit$.subscribe(event => {
			if (event?.fruit === fruitType) {
				count$.update(c => c + 1);
			}
		});
	}
</script>

<div class="bouncy_fruit">
	<BouncyFruit fruitEmoji="🍌" fruitCount$={bananaCount$}/>
	<b>{$bananaCount$}</b>
</div>
<div class="bouncy_fruit">
	<BouncyFruit fruitEmoji="🥝" fruitCount$={kiwiCount$}/>
	<b>{$kiwiCount$}</b>
</div>
<div class="bouncy_fruit">
	<BouncyFruit fruitEmoji="🍅" fruitCount$={tomatoCount$}/>
	<b>{$tomatoCount$}</b>
</div>

<style>
	.bouncy_fruit {
		display: inline-block;
	}
</style>
