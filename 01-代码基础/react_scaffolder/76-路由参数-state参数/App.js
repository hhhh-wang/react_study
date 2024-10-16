import React from 'react'
import { NavLink, useNavigate, useRoutes } from 'react-router-dom'
import routes from './routes'
export default function App() {
    const navigate = useNavigate();// 创建navigate函数
    return (
        <div>
            <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <div className="page-header">
                        <h2>React Router Demo</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        <NavLink className='list-group-item' to='/about'>About</NavLink>
                        <NavLink className='list-group-item' to='/home'>Home</NavLink>
                    </div>
                    <button onClick={()=>{
                        navigate('/about') // 默认值 ： {replace:false}
                        // replace 替换 replace：false 就是不替换，生成新的历史记录
                    }}>About</button>
                    <button onClick={()=>{
                        navigate('/home')
                    }}>Home</button>
                    <button onClick={()=>{
                        navigate('/home/news')
                    }}>news</button>

                    <hr />
                    <button onClick={()=>{
                        navigate('/about',{replace:true}) // 替换掉当前的历史记录，而不是生成一个新的历史记录
                    }}>About</button>
                    <button onClick={()=>{
                        navigate('/home',{replace:true})
                    }}>Home</button>
                    <button onClick={()=>{
                        navigate('/home/news',{replace:true})
                    }}>news</button>

                    <hr />
                    <button onClick={()=>{
                        navigate(1) // 到下一个历史记录
                    }}>前进</button>
                    <button onClick={()=>{
                        navigate(-1) // 上一个历史记录
                    }}>后退</button>
                    <button onClick={()=>{
                        navigate(2) // 前进两个历史记录
                    }}>前进2步</button>

                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {/* 一级路由，路由组件要展示的位置 */}
                            {useRoutes(routes)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
