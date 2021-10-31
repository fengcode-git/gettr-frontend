import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { submitLogin } from "../../api/account.api";
import { readUser, writeUser } from "../../libs/storage";
import { TAccountState, TLoginForm } from "./accounts.types";

const storageToken = readUser()

export const initialState: TAccountState = {
    username: storageToken ? storageToken.username : '',
    token: storageToken ? storageToken.token : '',
    avatar: storageToken ? storageToken.avatar : '',
    loading: false,
    error: '',
    isLogin: storageToken ? true: false
}

export const loginSubmit = createAsyncThunk('/account/login', async (payload: TLoginForm) => {
    const response = await submitLogin(payload.username, payload.password)
    writeUser(response)
    return response
})

export const logoutSubmit = createAsyncThunk('/account/logout', () => {
    writeUser(null)
})

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        logout: (state) => {
            state.token = ''
            state.username = ''
            state.isLogin = false
            state.error = ''
            state.loading = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginSubmit.pending, (state) => {
            state.loading = true
            state.error = ''
            state.username = ''
            state.token = ''
            state.avatar = ''
        })
        builder.addCase(loginSubmit.fulfilled, (state, action) => {
            state.loading = false
            state.error = ''
            state.username = action.payload.username
            state.token = action.payload.token
            state.avatar = action.payload.avatar
            state.isLogin = true
        })
        builder.addCase(loginSubmit.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message || ''
            state.token = ''
            state.isLogin = false
            state.avatar = ''
        })
        builder.addCase(logoutSubmit.fulfilled, (state) => {
            state.username = ""
            state.token = ""
            state.isLogin = false
            state.avatar = ''
        })
    }
})