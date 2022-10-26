import { writable } from 'svelte/store';
import type { FruitEvent } from './shared';
import { initRandomFruit } from './shared';

export const fruit$ = writable<FruitEvent>();

initRandomFruit(event => fruit$.set(event));
