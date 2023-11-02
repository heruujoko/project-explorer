import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ErrorItem {
    title: string;
    message: string;
}

export interface AppErrorState {
    error?: ErrorItem;
    stacks: ErrorItem[];
}

const initialState: AppErrorState = {
    stacks: [],
};

export const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setError: (state, action: PayloadAction<ErrorItem>) => {
            if (!state.error) {
                state.error = action.payload;
            } else {
                state.stacks = [...state.stacks, action.payload];
            }
        },
        cleanError: (state) => {
            if (state.stacks.length === 0) {
                state.error = undefined;
            } else {
                const clonePop = state.stacks;
                state.error = clonePop.pop();
                state.stacks = clonePop;
            }
        },
    },
});

// Action creators are generated for each case reducer function
export const { setError, cleanError } = errorSlice.actions;

export default errorSlice.reducer;
