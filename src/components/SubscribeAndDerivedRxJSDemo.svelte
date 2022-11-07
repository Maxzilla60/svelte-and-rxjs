<script lang="ts">
	import { fruit$ } from '../services/fruitObservable';
	import { map, Observable, scan } from 'rxjs';
	import { mapEventToEmoji } from '../services/shared';

	const fruitEmojiString$: Observable<string> = fruit$.pipe(
		map(event => mapEventToEmoji(event))
	);

	const fruitEventsLog$ = fruit$.pipe(
		scan((log, event) => [event, ...log], [])
	);
</script>

<div>{$fruitEmojiString$}</div>
<div id="fruit_log">
	{#each $fruitEventsLog$ as fruitEvent}
		<div>{JSON.stringify(fruitEvent)}</div>
	{/each}
</div>

<style>
	#fruit_log {
		padding-left: 15px;
		height: 100px;
		overflow-y: scroll;
		font-size: small;
	}
</style>
