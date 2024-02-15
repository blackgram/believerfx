const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    isSmallScreen: true,
}

export const screenSizeSlice = createSlice({
    name: 'screenSize',
    initialState,
    reducers: {
        setIsSmallScreen: (state, action) => {
            state.isSmallScreen = action.payload
        }
    }
})

export const {setIsSmallScreen} = screenSizeSlice.actions