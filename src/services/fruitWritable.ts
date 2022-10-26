import { writable } from 'svelte/store';
import type { FruitEvent } from './shared';
import { initRandomFruit } from './shared';

export const fruit$ = writable<FruitEvent>();

// { fruit: 'tomato' }
// { fruit: 'kiwi' }
// { fruit: 'banana' }
// { fruit: null }
initRandomFruit(event => fruit$.set(event));
