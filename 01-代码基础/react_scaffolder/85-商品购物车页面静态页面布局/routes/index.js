import { Navigate } from "react-router-dom";
import AddGoods from "../components/AddGoods";
import CarList from "../components/CarList";
import GoodsList from "../components/GoodsList";

const routes = [
    {
        path:'/addgoods',
        element:<AddGoods/>
    },
    {
        path:'/goodslist',
        element:<GoodsList/>
    },
    {
        path:'/carlist',
        element:<CarList/>
    },
    {
        index:true,
        element:<Navigate to='/addgoods'/>
    }
]

export default routes;