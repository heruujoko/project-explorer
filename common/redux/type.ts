import { CounterState } from '@feature/counter/counter.slice';

export interface RootReduxType {
    counter: CounterState;
}
