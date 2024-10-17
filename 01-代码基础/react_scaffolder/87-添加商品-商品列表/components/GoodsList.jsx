import React from 'react'
import { useSelector } from 'react-redux'

export default function GoodsList() {
    const { goods } = useSelector(state => state.goods)
    return (
        <div>
            <h3>商品列表</h3>
            <ul>
                {goods.map(good => (
                    <li key={good.id}>
                        <h3>商品名: {good.gname}</h3>
                        <p>商品价格: {good.price}</p>
                        <p><button>加入购物车</button></p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
