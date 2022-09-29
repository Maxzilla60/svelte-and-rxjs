import { writable } from 'svelte/store';
import type { Fruit } from './shared';
import { initRandomFruit } from './shared';

export const fruit$ = writable<Fruit>();

initRandomFruit(event => fruit$.set(event));
