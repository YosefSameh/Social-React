import { configureStore } from "@reduxjs/toolkit";
import bankeSlice from "./create-slice"
import addUser from "./cret-user-slice"
import showPosts from "./showPosts";

const store = configureStore({
    reducer: {
        // bank:bankeSlice,
        // add:addUser, 
        users:showPosts, 
    },  
})

export default store