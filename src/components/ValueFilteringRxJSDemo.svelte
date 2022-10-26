<script lang="ts">
	import { fruit$ } from '../services/fruitObservable';
	import BouncyFruit from './BouncyFruit.svelte';
	import { filter, Observable } from 'rxjs';
	import type { FruitEvent } from '../services/shared';

	const banana$: Observable<FruitEvent> = fruit$.pipe(
		filter(event => event?.fruit === 'banana'),
	);
	const kiwi$: Observable<FruitEvent> = fruit$.pipe(
		filter(event => event?.fruit === 'kiwi'),
	);
	const tomato$: Observable<FruitEvent> = fruit$.pipe(
		filter(event => event?.fruit === 'tomato'),
	);
</script>

<div id="bouncy_fruits">
	<BouncyFruit fruitEmoji="🍌" fruitCount$={banana$}/>
	<BouncyFruit fruitEmoji="🥝" fruitCount$={kiwi$}/>
	<BouncyFruit fruitEmoji="🍅" fruitCount$={tomato$}/>
</div>

<style>
	#bouncy_fruits {
		display: inline-flex;
	}
</style>
