import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../../api/post.api";
import { IPostView } from "../../types";
import { THomeState } from "./home.types";

const initialState: THomeState = {
    loading: false,
    posts: [],
    error: '',
    page: 1,
    isAll: false
}

export const loadPosts = createAsyncThunk('home-load', async (args, {getState}) => {
    let state = (getState() as any).home as THomeState    
    return await getPosts(state.page)    
})

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(loadPosts.pending, state => {
            state.loading = true
            state.error = ''
        })
        builder.addCase(loadPosts.fulfilled, (state, action)=> {
            state.loading = false
            state.error = ''
            state.posts = state.posts.concat(action.payload.data)                
            state.isAll = state.page > action.payload.pageCount
            if(!state.isAll){
                state.page = state.page + 1
            }
        })
        builder.addCase(loadPosts.rejected, (state, action)=> {
            state.loading = false
            state.error = '加载失败'
        })
    }
})