import { Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import PageNotFound from '../pages/PageNotFound'
import User from '../pages/User'

const routes = [
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/user',
        element: <User />
    },
    {
        // 重定向
        index: true,   // path:'/'
        element: <Navigate to='/home' />
    },
    {
        // 404配置
        path: '*',
        element: <PageNotFound />
    }
]

export default routes;