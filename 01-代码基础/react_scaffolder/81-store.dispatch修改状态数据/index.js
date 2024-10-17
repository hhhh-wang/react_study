// 1. 导入 createSlice包
import {createSlice, configureStore} from '@reduxjs/toolkit'

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
         * 没创建一个reducer方法，redux会自动帮咱们创建一个同名的方法，在切片的 actions属性上，该方法的身份是，actionCreator
         */
        addNum(state, action){ 
            state.num += action.payload
        },
        changeMsg(state, action){
            state.msg += action.payload
        }
    }
})
// 获取actionCreator
let {addNum, changeMsg} = countSlice.actions; 

const userSlice = createSlice({
    name:'user',
    initialState:{
        username:'atguigu',
        age:10
    },
    reducers:{
        addAge(state, {payload}){
            state.age += payload
        }
    }
})
// actionCreator  addAge
const {addAge} = userSlice.actions;

// 创建仓库
const store = configureStore({
    reducer:{
        count: countSlice.reducer,
        user: userSlice.reducer
    }
})
console.log('store: ',store);

// 获取仓库数据  store.getState()
console.log('store.getState(): ', store.getState());

// 如何修改切片数据    只有reducer中的方法【程序员才能修改数据】
// 项目经理分配一个任务给产品经理，产品经理创建一个需求，将需求给程序员开发

store.dispatch(addNum(3));// addNum(3) ==> {type:'count/addNum',payload:3}
// 触发 count切片中的addNum函数的执行，并且将 action对象作为第二个参数传过去


console.log(store.getState());
