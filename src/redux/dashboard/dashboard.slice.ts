import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false
}

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        openSidebar: (state) => {
            state.open = true
        },
        closeSidebar: (state) => {
            state.open = false
        }
    }
})

export const { openSidebar, closeSidebar } = dashboardSlice.actions