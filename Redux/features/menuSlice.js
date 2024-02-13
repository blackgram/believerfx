import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showMenu: false,
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setShowMenu: (state, action) => {
            state.showMenu = action.payload
        }
    }
})

export const {setShowMenu} = menuSlice.actions