import React, { Component } from 'react'
/**
 * 状态数据研究三个方向：
 * 1. 如何定义状态
 * 2. 如何读取状态
 * 3. 如何修改状态
 */
export default class App extends Component {
    // 定义状态的方式一：
    constructor(){
        super();// 调用父类的构造函数
        // 定义自己的属性 state, 就是类组件的状态数据
        this.state = {
           count:100,
           msg:'atguigu'
        }
    }
    render() {
        console.log(this);// 永远指向当前实例对象
        // 解构使用
        let {count,msg} = this.state;
        return (
            <div>
                <p>count : {this.state.count}-{count}</p>
                <p>msg: {this.state.msg}-{msg}</p>
            </div>
        )
    }
}
