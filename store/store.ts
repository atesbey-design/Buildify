import { configureStore } from '@reduxjs/toolkit';
import { createWrapper} from 'next-redux-wrapper';
import  promptSlice  from './Slice/PromptSlice';

const makeStore = () => configureStore({
    reducer: {

        prompt: promptSlice,
    },
    devTools: true,
    });
export const wrapper = createWrapper(makeStore);