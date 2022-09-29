import { writable } from 'svelte/store';
import type { Fruit } from './shared';
import { setRandomInterval } from './shared';

export const fruit$ = writable<Fruit>();

sendMessageRandomly({ fruit: 'tomato' }, 5500, 6000);
sendMessageRandomly({ fruit: 'kiwi' }, 3000, 5000);
sendMessageRandomly({ fruit: 'banana' }, 3000, 7000);
sendMessageRandomly({ fruit: null }, 4000, 4000);

function sendMessageRandomly(message: Fruit, minDelay: number, maxDelay: number): any {
	return setRandomInterval(() => fruit$.set(message), minDelay, maxDelay);
}
