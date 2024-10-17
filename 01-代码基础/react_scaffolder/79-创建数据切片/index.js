// 1. 导入 createSlice包
import {createSlice} from '@reduxjs/toolkit'

// 2. 创建切片
const countSlice = createSlice({
    name:'count',// name:指定切片名
    initialState:{// 切片数据
        num:99,
        msg:'atguigu'
    },
    reducers:{
        /**
         * 
         * @param {*} state  切片状态数据
         * @param {*} action {type:'count/addNum',payload:数据}
         * 每创建一个reducer方法，redux会自动帮咱们创建一个同名的方法，在切片的 actions属性上，该方法的身份是，actionCreator
         */
        addNum(state, action){ 
            state.num += action.payload
        },
        changeMsg(state, action){
            state.msg += action.payload
        }
    }
})
console.log(countSlice.actions);
// 获取产品经理
let {addNum, changeMsg} = countSlice.actions; // 此处 addNum 和 changeMsg身份都是actionCreator
// actionCreator函数，调用的结果，会返回一个 action对象 {type, payload:调用actionCreator传的参数}

console.log('addNum(10): ',addNum(10));// {type: 'count/addNum', payload: 10}
console.log('changeMsg("+")', changeMsg('+')); //{type: 'count/changeMsg', payload: '+'}