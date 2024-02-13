import { combineReducers } from "redux";
import { userSlice } from "../features/userSlice";
import { menuSlice } from "../features/menuSlice";


export const rootReducer = combineReducers({
    user: userSlice.reducer,
    menu: menuSlice.reducer,
})