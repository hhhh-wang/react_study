import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import News from "../pages/News";

// 使用lazy函数实现路由组件的懒加载[按需加载]
const About = lazy(() => import("../pages/About"));
const Message = lazy(() => import("../pages/Message"));
const PathTest = lazy(() => import("../pages/PathTest"));
const QueryTest = lazy(() => import("../pages/QueryTest"));
const StateTest = lazy(() => import("../pages/StateTest"));

// 封装一个Suspense加载组件的函数
function load(Com) {
    return (
        <Suspense fallback={<div>组件正在加载中....</div>}>
            <Com />
        </Suspense>
    )
}
const routes = [
    {
        path: '/home',
        element: <Home />,
        children: [
            {
                // path:'/home/news', // 完整二级路径写法
                path: 'news',// 简写，注意前面不能有 / ，否则就认为是一级路由
                element: <News />
            },
            {
                // path:'/home/message', // 完整路径写法
                path: 'message',
                element: load(Message),
                children: [
                    {
                        // path-params参数需要配置路径占位符
                        path: '/home/message/path/:id/:school',
                        element: load(PathTest)

                    },
                    {
                        path: '/home/message/query',
                        element: load(QueryTest)
                    },
                    {
                        path: '/home/message/state',
                        element: load(StateTest)
                    }
                ]
            },
            {
                path: '/home',
                element: <Navigate to='/home/news' />
            }
        ]
    },
    {
        path: '/about',
        element: load(About)
    },
    {
        path: '/',
        element: <Navigate to='/home' />
    }
]

export default routes;