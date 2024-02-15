import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeComponent: 'Dashboard',
}

export const activeDashSlice = createSlice({
    name: 'activeDash',
    initialState,
    reducers: {
        setActiveDash: (state, action) => {
            state.activeComponent = action.payload
        }
    }
})

export const {setActiveDash} = activeDashSlice.actions