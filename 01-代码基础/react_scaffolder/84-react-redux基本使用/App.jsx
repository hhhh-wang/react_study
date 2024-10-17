import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { addNum } from './store/slice/countSlice';
export default function App() {
    /**
     * useDispatch: 
     * 作用：创建一个dispatch函数，功能跟 store.dispatch一样
     */

    const dispatch = useDispatch(); // 创建dispatch函数

    /**
     * 作用：获取redux中的状态数据
     * 语法：useSelector(回调函数)
     *       回调函数的参数，就是整个仓库的数据 state
     *       回调函数的返回值，就是useSelector函数调用的返回值
     * 
     */
    // let res = useSelector(state=>{
    //     console.log('state: ', state);
    //     return state;
    // })

    // let count = useSelector(state=>state.count) // 获取count切片的数据
    // let user = useSelector(state=>state.user);// 获取user切片的数据
    let {num} = useSelector(state=>state.count);
    return (
        <div>
            <p>count num: {num}</p>
            <p><button onClick={()=>{
                dispatch(addNum(3));
            }}>count + 3</button></p>
        </div>
    )
}
