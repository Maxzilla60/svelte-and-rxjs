<script lang="ts">
	import { derived, Readable } from 'svelte/store';
	import { fruit$ } from '../services/fruitWritable';
	import { FruitEvent, mapEventToEmoji } from '../services/shared';

	let fruitEventLog: Array<FruitEvent> = [];
	fruit$.subscribe(event => fruitEventLog = [event, ...fruitEventLog]);

	const fruitEmojiString$: Readable<string> = derived(
		fruit$,
		event => mapEventToEmoji(event)
	);
</script>

<div>{$fruitEmojiString$}</div>
<div id="fruit_log">
	{#each fruitEventLog as fruitEvent}
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
