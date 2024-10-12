import React from 'react'
// 1. 导入useState函数
import { useState } from 'react'

export default function TestState() {
    console.log('testState run');
    // 2. 使用useState创建状态数据
    /**
     * let [状态变量,设置状态的方法] = useState(初始值)            
     */
    // let res = useState(100);
    // console.log('res: ', res); //  [100, ƒ]
    let [count, setCount] = useState(99);
    return (
        <div>
            <p>state count : {count}</p>
            <p><button onClick={()=>{
                // setCount(要设置的count的最新的值)
                setCount(count+1)
                // 1. 改变状态count
                // 2. 会触发函数组件重新调用，完成页面的重新渲染
            }}>count++</button></p>
        </div>
    )
}
