import { combineReducers } from "redux";
import { userSlice } from "../features/userSlice";
import { menuSlice } from "../features/menuSlice";
import { activeDashSlice } from "../features/activeDashSlice";
import { screenSizeSlice } from "../features/screenSizeSlice";
import { activeMainMenuSlice } from "../features/activeMainMenuSlice";
import { marketNewsSlice } from "../features/marketNewsSlice";


export const rootReducer = combineReducers({
    user: userSlice.reducer,
    menu: menuSlice.reducer,
    activeDash: activeDashSlice.reducer,
    screenSize: screenSizeSlice.reducer,
    activeMainMenu: activeMainMenuSlice.reducer,
    marketNews: marketNewsSlice.reducer,
})