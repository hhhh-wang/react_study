import React, { useEffect, useState } from 'react'

export default function App() {
    let [msg, setMsg] = useState('atguigu');

    useEffect(()=>{// componentDidMount 组件挂载完成后执行
        setTimeout(()=>{
            // 第一种用法：在有闭包的时候，值不对，只能取到初始值
            // setMsg(msg + '-')

            // 第二种用法, 接收一个回调函数作为参数，回调函数的形参是缓存区中最新变化后的msg值，回调函数的返回值，是要设置缓存区的最新的值
            setMsg((msg)=>{
                return msg + '-'
            })
        },2000)
    },[])

    return (
        <div>
            <p>msg: {msg}</p>
            <p><button onClick={()=>{
                setMsg(msg + '!')
            }}>msg + '!'</button></p>
        </div>
    )
}
