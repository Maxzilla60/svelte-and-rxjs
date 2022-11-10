<script lang="ts">
	import { fruit$ } from '../services/fruitObservable';
	import BouncyFruit from './BouncyFruit.svelte';
	import { filter, Observable, scan, startWith } from 'rxjs';

	const bananaCount$ = getCountObservable('banana');
	const kiwiCount$ = getCountObservable('kiwi');
	const tomatoCount$ = getCountObservable('tomato');

	function getCountObservable(fruitType: string): Observable<number> {
		return fruit$.pipe(
			filter(event => event?.fruit === fruitType),
			scan((sum) => sum + 1, 0),
			startWith(0),
		);
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
