import React from 'react'
import { Link, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import User from './pages/User'
import './App.css'
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

            {/* 
                进行路由配置
                localhost:3000/login      展示 Login
                localhost:3000/home            Home
                localhost:3000/user            User
                localhost:3000                 什么组件都不展示，因为没有配置  需要Navigate重定向组件 
             */}
            <Routes>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/user' element={<User />}></Route>
                {/*  Navigate重定向  */}

                {/* <Route path='/' element={<Navigate to='/home' />}></Route> */}
                {/* <Route index={true} element={<Navigate to='/home' />}></Route> */}
                <Route index element={<Navigate to='/home' />}></Route>

                {/*  
                    404页面配置
                    *  0 个或多个
                    +  1 个 或多个
                    ?  0 或 1个
                */}
                <Route path='*' element={<PageNotFound />}></Route>
            </Routes>

        </div>
    )
}
