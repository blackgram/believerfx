import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeMenu: 'Home',
}

export const activeMainMenuSlice = createSlice({
    name: 'activeMenu',
    initialState,
    reducers: {
        setActiveMainMenu: (state, action) => {
            state.activeMenu = action.payload
        }
    }
})

export const {setActiveMainMenu} = activeMainMenuSlice.actions