// 1. 从react中解构 useEffect
import React, { useEffect, useState } from 'react'
import Son from './components/Son';

export default function App() {
    console.log('App run');
    let [count, setCount] = useState(100)
    let [msg, setMsg] = useState('atguigu')
    // 1. 组件挂载阶段生命周期
    // useEffect(() => {
    //     console.log('componentDidMount');
    // }, [])

    // 2. // componentDidMount + componentDidUpdate[count]
    // 一个函数组件可以有多个useEffect并且都生效
    // useEffect(() => {
    //     console.log('9999');
    // }, [count])

    // 3. componentDidMount + componentDidUpdate[所有的state，和所有的props]
    // useEffect(() => {
    //     console.log('没有第二个参数')
    // });




    return (
        <div>
            <p>count: {count}</p>
            <p>msg: {msg}</p>
            <p>
                <button onClick={() => {
                    setCount(count + 1)
                }}>count</button>

            </p>
            <p>
                <button onClick={() => {
                    setMsg(msg + '!')
                }}>msg</button>

            </p>
            <hr />
            {count % 2 === 0 && <Son count={count} />}
        </div>
    )
}
