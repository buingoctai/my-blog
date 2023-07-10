import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';


const initialState = {
    list: [],
}

export const articleListSlice = createSlice({
    name: 'articleList',
    initialState,
    reducers: {
        setArticleList: (state, action) => {
            state.list = action.payload;
        },
        addArticle: (state, action) => {
            state.list = [...state.list, action.payload];
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.articleList,
            }
        }
    }
});

export const { setArticleList, addArticle } = articleListSlice.actions;
export const selectArticleList = (state) => state.articleList.list;
