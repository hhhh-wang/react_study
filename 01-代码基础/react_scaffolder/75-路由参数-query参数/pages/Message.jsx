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
                    <a href="/message/3">message003</a>&nbsp;&nbsp;
                </li>
            </ul>
            {/* 
                展示三级路由组件
             */}
            <Outlet />
        </div>
    )
}
