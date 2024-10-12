import React, { Component } from 'react'

export default class Son extends Component {
    constructor(){
        super();
        console.log('Son constructor');
    }
    componentDidMount(){
        console.log('Son ComponentDidMount')
    }
    /**
     * component组件
     * will 即将
     * unmount: 卸载
     * 组件即将卸载的之前执行：【临终遗言】
     * 作用：
     * 1. 关闭定时器
     * 2. 取消订阅
     * 3. 解绑自定义事件
     */
    componentWillUnmount(){
        console.log('Son componentWillUnmount')
    }
    render() {
        return (
            <div>Son</div>
        )
    }
}
