import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Message() {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/home/message/path/1/atguigu'>path参数的传递和接收</Link>
                </li>
                <li>
                    <Link to="/home/message/query?username=atguigu&age=20">query参数的传递</Link>
                </li>
                <li>
                    <Link to='/home/message/state' state={{id:1,title:'吃饭',isDone:false}}>state参数1</Link>
                </li>
                <li>
                    <Link to='/home/message/state' state={{id:2,title:'睡觉',isDone:true}}>state参数2</Link>
                </li>
            </ul>
            {/* 
                展示三级路由组件
             */}
            <Outlet />
        </div>
    )
}
