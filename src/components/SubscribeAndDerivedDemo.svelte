<script lang="ts">
	import { derived, Readable } from 'svelte/store';
	import { fruit$ } from '../services/fruitWritable';

	let eventsLog = [];
	fruit$.subscribe(event => eventsLog = [event, ...eventsLog]);

	const fruitEmojiString$: Readable<string> = derived(fruit$, event => {
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
	});
</script>

<div>{$fruitEmojiString$}</div>
<div id="event_log">
	{#each eventsLog as event}
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
