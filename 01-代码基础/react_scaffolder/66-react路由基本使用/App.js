import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import User from './pages/User'
export default function App() {
    return (
        <div>
            <h3>App组件</h3>
            {/* 
                进行路由配置
                localhost:3000/login      展示 Login
                localhost:3000/home            Home
                localhost:3000/user            User
                localhost:3000                 什么组件都不展示，因为没有配置   
             */}
            <Routes>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/user' element={<User />}></Route>
            </Routes>

        </div>
    )
}
