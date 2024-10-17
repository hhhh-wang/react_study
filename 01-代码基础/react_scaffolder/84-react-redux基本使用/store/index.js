import { configureStore } from "@reduxjs/toolkit";
import count from "./slice/countSlice";
import user from "./slice/userSlice";
// 创建仓库
const store = configureStore({
    reducer:{
        count,
        user
    }
})

export default store;