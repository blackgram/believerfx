import { combineReducers } from "redux";
import { userSlice } from "../features/userSlice";
import { menuSlice } from "../features/menuSlice";
import { activeDashSlice } from "../features/activeDashSlice";
import { screenSizeSlice } from "../features/screenSizeSlice";


export const rootReducer = combineReducers({
    user: userSlice.reducer,
    menu: menuSlice.reducer,
    activeDash: activeDashSlice.reducer,
    screenSize: screenSizeSlice.reducer,
})