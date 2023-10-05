import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import LoginSlice from "./LoginSlice";

const store = configureStore({
    reducer : {
        app : appSlice,
        userDetail : LoginSlice
    }
})

export default store;