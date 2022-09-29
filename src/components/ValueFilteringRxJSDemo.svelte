<script lang="ts">
	import { fruit$ } from '../services/fruitObservable';
	import BouncyFruit from './BouncyFruit.svelte';
	import { filter, Observable } from 'rxjs';
	import type { Fruit } from '../services/shared';

	const bananaCount$: Observable<Fruit> = fruit$.pipe(
		filter(event => event?.fruit === 'banana'),
	);
	const kiwiCount$: Observable<Fruit> = fruit$.pipe(
		filter(event => event?.fruit === 'kiwi'),
	);
	const tomatoCount$: Observable<Fruit> = fruit$.pipe(
		filter(event => event?.fruit === 'tomato'),
	);
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
