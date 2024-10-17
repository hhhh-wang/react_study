import React from 'react'

export default function GoodsList() {
    return (
        <div>
            <h3>商品列表</h3>
            <ul>
                <li>
                    <h3>商品名: 小米手机</h3>
                    <p>商品价格: 3000</p>
                    <p><button>加入购物车</button></p>
                </li>
                <li>
                    <h3>商品名: 华为手机</h3>
                    <p>商品价格: 4000</p>
                    <p><button>加入购物车</button></p>
                </li>
            </ul>
        </div>
    )
}
