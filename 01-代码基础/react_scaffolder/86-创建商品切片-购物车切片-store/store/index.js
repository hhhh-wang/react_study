import { configureStore } from "@reduxjs/toolkit";
import goods from './slice/goodsSlice'
import car from './slice/carSlice'
const store = configureStore({
    reducer:{
        goods,
        car
    }
})

export default store;