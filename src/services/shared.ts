export interface Fruit {
	fruit: 'banana' | 'kiwi' | 'tomato' | null;
}

export function setRandomInterval(intervalFunction: () => void, minDelay: number, maxDelay: number) {
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
