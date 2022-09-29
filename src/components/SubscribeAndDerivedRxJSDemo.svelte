<script lang="ts">
	import { fruit$ } from '../services/fruitObservable';
	import { map, Observable, scan } from 'rxjs';

	const eventsLog$ = fruit$.pipe(
		scan((log, event) => [event, ...log], [])
	);

	const fruitEmojiString$: Observable<string> = fruit$.pipe(
		map(event => {
			switch (event?.fruit) {
				case 'banana':
					return '🍌';
				case 'kiwi':
					return '🥝';
				case 'tomato':
					return '🍅';
				default:
					return '❓';
			}
		})
	);
</script>

<div>{$fruitEmojiString$}</div>
<div id="event_log">
	{#each $eventsLog$ as event}
		<div>{JSON.stringify(event)}</div>
	{/each}
</div>

<style>
	#event_log {
		padding-left: 15px;
		height: 100px;
		overflow-y: scroll;
		font-size: small;
	}
</style>
