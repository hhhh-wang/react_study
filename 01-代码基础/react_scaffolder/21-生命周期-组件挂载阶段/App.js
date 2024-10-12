import React, { Component } from 'react'

export default class App extends Component {

    constructor() {
        super();
        console.log('App constructor');
    }
    render() {
        console.log('App render');
        return (
            <div>App</div>
        )
    }
    /**
     * component : 组件
     * Did： do 过去式 完成
     * Mount: 挂载
     * componentDidMount 组件完成挂载之后执行, jsx已经渲染成真实dom出现在页面中了
     * 
     * 作用：
     * 1. 开启定时器
     * 2. 发送ajax请求  axios
     * 3. 订阅消息
     * 4. 添加自定义事件
     * 
     * 
     * 注意：constructor 和 componentDidMount 只执行一次
     */
    componentDidMount() {
        console.log('App componentDidMount');

    }
}
