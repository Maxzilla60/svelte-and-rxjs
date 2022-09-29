import { writable } from 'svelte/store';

export interface Fruit {
	fruit: 'banana' | 'kiwi' | 'tomato' | null;
}

export const fruit$ = writable<Fruit>();

sendMessageRandomly({ fruit: 'tomato' }, 5500, 6000);
sendMessageRandomly({ fruit: 'kiwi' }, 3000, 5000);
sendMessageRandomly({ fruit: 'banana' }, 3000, 7000);
sendMessageRandomly({ fruit: null }, 4000, 4000);

function sendMessageRandomly(message: Fruit, minDelay: number, maxDelay: number): any {
	return setRandomInterval(() => fruit$.set(message), minDelay, maxDelay);
}

function setRandomInterval(intervalFunction: () => void, minDelay: number, maxDelay: number) {
	let timeout;

	const runInterval = () => {
		const timeoutFunction = () => {
			intervalFunction();
			runInterval();
		};

		const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

		timeout = setTimeout(timeoutFunction, delay);
	};

	runInterval();

	return {
		clear() {
			clearTimeout(timeout);
		},
	};
}
