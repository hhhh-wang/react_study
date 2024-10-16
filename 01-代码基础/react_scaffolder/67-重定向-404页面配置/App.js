import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
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
                <Route path='*' element={<PageNotFound/>}></Route>
            </Routes>

        </div>
    )
}
