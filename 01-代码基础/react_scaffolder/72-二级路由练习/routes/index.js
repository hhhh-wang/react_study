import { Navigate } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Message from "../pages/Message";
import News from "../pages/News";

const routes = [
    {
        path: '/home',
        element: <Home />,
        children: [
            {
                // path:'/home/news', // 完整二级路径写法
                path:'news',// 简写，注意前面不能有 / ，否则就认为是一级路由
                element: <News/>
            },
            {
                // path:'/home/message', // 完整路径写法
                path:'message',
                element:<Message/>
            },
            {
                path:'/home',
                element:<Navigate to='/home/news'/>
            }
        ]
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path:'/',
        element:<Navigate to='/home' />
    }
]

export default routes;