import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pageLoading: true,
}

export const pageLoadingSlice = createSlice({
    name: 'pageLoading',
    initialState,
    reducers: {
        setPageLoading: (state, action) => {
            state.pageLoading = action.payload
        }
    }
})

export const {setPageLoading} = pageLoadingSlice.actions