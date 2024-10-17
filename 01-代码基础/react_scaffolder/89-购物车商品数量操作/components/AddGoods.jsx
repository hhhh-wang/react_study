import React from 'react'
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {addGoods} from '../store/slice/goodsSlice'
export default function AddGoods() {
    const gnameRef = useRef();
    const priceRef = useRef();
    const dispatch = useDispatch(); // 创建dispatch函数
    const navigate = useNavigate();
    const onSubmitHandle = (e)=>{
        e.preventDefault();
        let gname = gnameRef.current.value.trim()
        let price = +priceRef.current.value.trim()
        // console.log('gname: ', gname);
        // console.log('price: ', price);
        let goods = {
            gname,
            price
        }
        dispatch(addGoods(goods));// 将数据添加到切片
        // 跳转到商品列表页
        navigate('/goodslist');
    }
    
    return (
        <>
            <h3>添加商品</h3>
            <form onSubmit={onSubmitHandle}>
                <p>商品名称：<input type="text" name="" ref={gnameRef} /></p>
                <p>商品价格：<input type="text" name="" ref={priceRef} /></p>
                <p><button>添加商品</button></p>
            </form>
        </>

    )
}
