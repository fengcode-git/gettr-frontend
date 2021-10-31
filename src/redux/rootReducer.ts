import { combineReducers } from "redux"
import { accountSlice } from "./account/account.slice"
import { dashboardSlice } from "./dashboard/dashboard.slice";
import { homeSlice } from "./home/home.slice";

export default combineReducers({
    [accountSlice.name]: accountSlice.reducer,
    [dashboardSlice.name]: dashboardSlice.reducer,
    [homeSlice.name]: homeSlice.reducer
})