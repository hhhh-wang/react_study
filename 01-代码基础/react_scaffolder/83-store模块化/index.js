// 导入仓库
import store from './store'
import {addNum} from './store/slice/countSlice'
const unsubscribe = store.subscribe(()=>{
    console.log('subscribe: ',store.getState());
})
store.dispatch(addNum(5))
store.dispatch(addNum(7))
