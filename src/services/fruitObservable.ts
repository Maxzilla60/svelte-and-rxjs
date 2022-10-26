import { BehaviorSubject } from 'rxjs';
import type { FruitEvent } from './shared';
import { initRandomFruit } from './shared';

const fruitSubject = new BehaviorSubject<FruitEvent>(undefined);
export const fruit$ = fruitSubject.asObservable();

initRandomFruit((event) => fruitSubject.next(event));
