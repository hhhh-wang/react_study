import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBuyNum,decBuyNum } from '../store/slice/carSlice';
export default function CarList() {
    const dispatch = useDispatch();
    let { carList } = useSelector(state => state.car)
    return (
        <div>
            <h3>购物车列表</h3>
            <ul>
                {carList.map(car => (
                    <li key={car.id}>
                        <h3>商品名: {car.gname}</h3>
                        <p>商品价格: {car.price}</p>
                        <p>购买数量:
                            <button onClick={()=>{
                                dispatch(decBuyNum(car.id))
                            }}>-</button>
                            {car.buyNum}
                            <button onClick={() => {
                                dispatch(addBuyNum(car.id))
                            }}>+</button></p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
