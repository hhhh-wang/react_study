import {createSlice} from '@reduxjs/toolkit'

const goodsSlice = createSlice({
    name:'goods',
    initialState:{
        goods:[]  // {id:1, gname:'华为手机',price:2000}
    },
    reducers:{
        addGoods(state, {payload}){
            console.log('addGoods payload: ', payload);
        }
    }
})

export const {addGoods} = goodsSlice.actions;
export default goodsSlice.reducer