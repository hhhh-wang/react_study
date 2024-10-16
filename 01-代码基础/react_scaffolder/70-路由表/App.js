import React from 'react'
import { Link, Navigate, NavLink, Route, Routes, useRoutes } from 'react-router-dom'

import './App.css'
import routes from './routes'
export default function App() {
    return (
        <div>
            <h3>App组件</h3>
            <h4>普通a标签链接</h4>
            <ul>
                <li><a href="/home">首页</a></li>
                <li><a href="/login">登录页</a></li>
                <li><a href="/user">用户中心</a></li>
            </ul>

            <h4>Link 跳转组件，没有 高亮样式</h4>
            <ul>
                <li><Link to="/home">首页</Link></li>
                <li><Link to="/login">登录页</Link></li>
                <li><Link to="/user">用户中心</Link></li>
            </ul>

            <h4>NavLink 跳转标签组件 高亮样式 active</h4>
            <ul>
                <li><NavLink to="/home">首页</NavLink></li>
                <li><NavLink to="/login">登录页</NavLink></li>
                <li><NavLink to="/user">用户中心</NavLink></li>
            </ul>

            <h4>NavLink 自定义高亮样式类名</h4>
            <ul>
                <li><NavLink to="/home" className={({isActive}) => {
                    return isActive ? 'myselfActive' : ''
                }}>首页</NavLink></li>
                <li><NavLink to="/login" className={({isActive}) => {
                    return isActive ? 'myselfActive' : ''
                }}>登录页</NavLink></li>
                <li><NavLink to="/user" className={({isActive}) => {
                    return isActive ? 'myselfActive' : ''
                }}>用户中心</NavLink></li>
            </ul>
            {/* 使用useRoutes  hook 根据路由表生成路由配置 */}
            {useRoutes(routes)}
        </div>
    )
}
