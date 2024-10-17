import React from 'react'

export default function CarList() {
    return (
        <div>
            <h3>购物车列表</h3>
            <ul>
                <li>
                    <h3>商品名: 小米手机</h3>
                    <p>商品价格: 3000</p>
                    <p>购买数量: <button>-</button> 2 <button>+</button></p>
                </li>
                <li>
                    <h3>商品名: 锤子手机</h3>
                    <p>商品价格: 3000</p>
                    <p>购买数量: <button>-</button> 2 <button>+</button></p>
                </li>
            </ul>
        </div>
    )
}
