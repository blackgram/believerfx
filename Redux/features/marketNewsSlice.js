import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    marketData: null,
    loadingMarketdata: true,
}

export const marketNewsSlice = createSlice({
    name: 'marketNews',
    initialState,
    reducers: {
        setMarketData: (state, action) => {
            state.marketData = action.payload
        },
        setLoadingMarketdata: (state, action) => {
            state.loadingMarketdata = action.payload
        }
    }
})

export const {setMarketData, setLoadingMarketdata} = marketNewsSlice.actions