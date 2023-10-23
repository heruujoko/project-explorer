import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { createWrapper } from 'next-redux-wrapper';
import counterReducer from '@feature/counter/counter.slice';
import { pokemonApi } from '@services/pokemon';

export const makeStore = (preloadState = {}) => {
    return configureStore({
        reducer: {
            counter: counterReducer,
            [pokemonApi.reducerPath]: pokemonApi.reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
        devTools: true,
        preloadedState: preloadState,
    });
};

export const store = makeStore();

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
