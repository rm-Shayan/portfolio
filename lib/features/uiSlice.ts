import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UIState {
    mode: 'light' | 'dark';
}

const initialState: UIState = {
    mode: 'dark', // Default to dark mode for "premium" feel
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },
        setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
            state.mode = action.payload;
        },
    },
});

export const { toggleTheme, setTheme } = uiSlice.actions;
export default uiSlice.reducer;
