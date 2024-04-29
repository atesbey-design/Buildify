import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProvideState {
    promptValue: string;
}

const initialState: ProvideState = {
    promptValue: '',
};

const provideSlice = createSlice({
    name: 'provide',
    initialState,
    reducers: {
        setPromptValue: (state, action: PayloadAction<string>) => {
            state.promptValue = action.payload;
        },
    },
});

export const { setPromptValue } = provideSlice.actions;

export default provideSlice.reducer;
