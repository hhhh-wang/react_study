import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {addCar} from '../store/slice/carSlice'
export default function GoodsList() {
    const dispatch = useDispatch();// 创建dispatch函数
    const { goods } = useSelector(state => state.goods)
    const navigate = useNavigate();
    return (
        <div>
            <h3>商品列表</h3>
            <ul>
                {goods.map(good => (
                    <li key={good.id}>
                        <h3>商品名: {good.gname}</h3>
                        <p>商品价格: {good.price}</p>
                        <p><button onClick={()=>{
                            dispatch(addCar(good))
                            // 跳转到购物车列表页
                            navigate('/carlist')
                        }}>加入购物车</button></p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
