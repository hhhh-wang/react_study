import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const countSlice = createSlice({
    name: 'count',
    initialState: {
        num: 88
    },
    reducers: { // reducers 中定义的程序员，都是同步的程序员
        addNum(state, { payload }) {
            state.num += payload
        },
        decNum(state, { payload }) {
            state.num -= payload
        }
    },
    // 异步的程序员
    extraReducers: (builder) => {
        builder
            .addCase(asyncAddNum.pending, (state, action) => {
                console.log('pending action: ', action);
            })
            // 如果是一个成功的promise，成功的结果值就是action的payload属性值
            .addCase(asyncAddNum.fulfilled, (state, action)=>{
                console.log('fulfilled action', action);
                state.num += action.payload
            })
            .addCase(asyncAddNum.rejected, (state, action)=>{
                console.log('rejected action: ', action);
            })
            .addCase(asyncDecNum.fulfilled, (state, {payload})=>{
                state.num -= payload
            })
    }
})
/**
 * 切片.actions 中都是处理同步任务的产品经理
 */
export const { addNum, decNum } = countSlice.actions; //actionCreator 

/**
 * 想实现异步的操作，需要有异步的产品经理[actionCreator] 和 异步的程序员
 * 
 * 异步的actionCreator：需要手动创建  createAsyncThunk 函数创建，
 * 异步的reducer： 需要配置在 extraReducers中， 【pending、fulfilled、rejected 】
 */

// 创建异步的产品经理
export const asyncAddNum = createAsyncThunk('count/addNum', async (payload) => {
    let { data } = await axios.get('https://api.github.com/search/users?q=aa')
    // console.log('data: ',data);
    return data.total_count;// 会得到一个成功的promise，成功的结果值是 total_count
    // return Promise.reject('error123123')
})

export const asyncDecNum = createAsyncThunk('count/decNum', (payload)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(payload)
        },2000)
    })
})

export default countSlice.reducer