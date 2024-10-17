import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNum, asyncAddNum, asyncDecNum, decNum } from './store/slice/countSlice';

export default function App() {
    let { num } = useSelector(state => state.count)
    const dispatch = useDispatch();
    return (
        <div>
            <p>num: {num}</p>
            <p><button onClick={() => {
                dispatch(addNum(3))
            }}>num ++</button></p>
            <p><button onClick={()=>{
                dispatch(decNum(5))
            }}>num--</button></p>
            <hr />
            <p><button onClick={()=>{
                dispatch(asyncAddNum(10))
            }}>异步的 addNum</button></p>

            <p><button onClick={()=>{
                dispatch(asyncDecNum(9));
            }}>2秒后 --</button></p>
        </div>
    )
}
