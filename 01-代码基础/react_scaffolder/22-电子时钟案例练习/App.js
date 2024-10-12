import React, { Component } from 'react'
// 1. 安装moment npm i moment
// 2. 导入moment
import moment from 'moment'
export default class App extends Component {
    state = {
        nowDate: moment().format('YYYY-MM-DD HH:mm:ss')
    }
    constructor() {
        super();
        console.log('App constructor');
    }
    render() {
        console.log('App render');
        let {nowDate} = this.state;
        return (
            <div>
                当前时间是： {nowDate}
            </div>
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
        // 生命周期函数都是react在特定时间节点调用的，所有生命周期函数中的this都指向当前组件的实例对象
        setInterval(()=>{
            this.setState({
                nowDate:moment().format('YYYY-MM-DD HH:mm:ss')
            })
        },1000)
    }
}
