import React, { useState } from 'react'
/**
 * 函数组件：state已经做过优化了， 当状态不变时，只多渲染一次
 *           props没有优化，外部数据不改变的时候，也会重新render
 * 
 * React.memo: 作用：函数组件 state 和 props 不发生改变的时候，不会触发重新render
 */
function Son({count}) {
    console.log('Son render');
    let [money, setMoney] = useState(88)
    return (
        <div>
            <h3>Son</h3>
            <p>Son state money: {money}</p>
            <p>Son props count: {count}</p>
            <p><button onClick={() => {
                setMoney(money + 100)
                
            }}>money++</button></p>

            <p><button onClick={() => {
                setMoney(10000)
            }}>money == 10000</button></p>
        </div>
    )

}

export default React.memo(Son)
