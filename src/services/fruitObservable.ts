import { BehaviorSubject } from 'rxjs';
import type { Fruit } from './shared';
import { initRandomFruit } from './shared';

const fruitSubject = new BehaviorSubject<Fruit>(undefined);
export const fruit$ = fruitSubject.asObservable();

initRandomFruit((event) => fruitSubject.next(event));
