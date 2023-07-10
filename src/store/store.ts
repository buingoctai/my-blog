import { articleListSlice } from '@/store/slices/article-list-slice';
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () => {
    return configureStore({
        reducer: {
            [articleListSlice.name]: articleListSlice.reducer,
        },
        devTools: true,
    })
}

export const wrapper = createWrapper(makeStore);