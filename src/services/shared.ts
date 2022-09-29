export interface Fruit {
	fruit: 'banana' | 'kiwi' | 'tomato' | null;
}

export function initRandomFruit(updateFunction: (event) => void): void {
	setRandomInterval(() => updateFunction({ fruit: 'tomato' }), 5500, 6000);
	setRandomInterval(() => updateFunction({ fruit: 'kiwi' }), 3000, 5000);
	setRandomInterval(() => updateFunction({ fruit: 'banana' }), 3000, 7000);
	setRandomInterval(() => updateFunction({ fruit: null }), 4000, 4000);
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
