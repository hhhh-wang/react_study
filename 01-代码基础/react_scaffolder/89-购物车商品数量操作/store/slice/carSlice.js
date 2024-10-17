import { createSlice } from '@reduxjs/toolkit'

const carSlice = createSlice({
    name: 'car',
    initialState: {
        carList: []
    },
    reducers: {
        addCar(state, { payload }) {
            console.log('addCar payload: ', payload);
            /**
             * 如果carList里面已经有了该商品[id], 只增加buyNum数量，
             * 没有该商品，新增
             */
            // findIndex
            let index = state.carList.findIndex(car => car.id === payload.id)
            if (index === -1) {// 当前商品在carList数组中不存在 ==> 新增
                state.carList = [...state.carList, { ...payload, buyNum: 1 }]
            } else {// 存在 ==> buyNum + 1
                state.carList[index].buyNum += 1;
            }
        },
        addBuyNum(state, { payload }) {// payload ==> id
            console.log('addBuyNum payload: ', payload)
            // let car = state.carList.find(car=>car.id === payload)
            // car.buyNum += 1;

            let index = state.carList.findIndex(car=>car.id === payload);
            state.carList[index].buyNum += 1;
        },
        decBuyNum(state, {payload}){
            let index = state.carList.findIndex(car=>car.id === payload)
            let num = state.carList[index].buyNum - 1;
            if(num <= 0){
                // 将该商品在购物车删除  splice(index)
                state.carList.splice(index, 1)
            }else{
                state.carList[index].buyNum = num;
            }
        }
    }
})

export default carSlice.reducer;
export const { addCar, addBuyNum,decBuyNum } = carSlice.actions;