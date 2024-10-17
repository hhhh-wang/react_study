import { createSlice } from '@reduxjs/toolkit'

// 2. 创建切片
const countSlice = createSlice({
    name: 'count',// name:指定切片名
    initialState: {// 切片数据
        num: 99,
        msg: 'atguigu'
    },
    reducers: {
        /**
         * 
         * @param {*} state  切片状态数据
         * @param {*} action {type:'count/addNum',payload:数据}
         * 没创建一个reducer方法，redux会自动帮咱们创建一个同名的方法，在切片的 actions属性上，该方法的身份是，actionCreator
         */
        addNum(state, action) {
            state.num += action.payload
        },
        changeMsg(state, action) {
            state.msg += action.payload
        }
    }
})
// 获取actionCreator
export const { addNum, changeMsg } = countSlice.actions; 
export default countSlice.reducer;
/**
 * 对于切片，需要暴露如下东西：
 * 1. 暴露切片中的reducer对象：默认暴露
 * 2. 暴露actionCreator       分别暴露
 * 
 */