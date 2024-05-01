import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PromptState {
    message: string;
}

const initialState: PromptState = {
    message: '',
};

const promptSlice = createSlice({
    name: 'prompt',
    initialState,
    reducers: {
        setPrompt: (state, action: PayloadAction<string>) => {
            state.message = action.payload;
        },
        
    },
});

export const { setPrompt } = promptSlice.actions;
export const message = (state: any) => state.prompt.message;

export default promptSlice.reducer;
