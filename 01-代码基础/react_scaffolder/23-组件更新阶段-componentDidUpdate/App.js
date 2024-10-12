import React, { Component } from 'react'
// 1. 安装moment npm i moment
// 2. 导入moment
import moment from 'moment'
import Son from './components/Son';
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
        let { nowDate } = this.state;
        return (
            <>
                <div>
                    当前时间是： {nowDate}
                </div>
                <p>
                <button type="button" onClick={()=>{
                    this.setState({
                        nowDate:moment().format('YYYY-MM-DD HH:mm:ss')
                    })
                }}>setState</button>
                </p>

                <p><button onClick={()=>{
                    this.setState({
                        nowDate:'这一瞬间，就是永恒！'
                    })
                }}>setState固定值</button></p>

                {/* 只要执行setState就会触发render函数的调用，进而触发 componentDidUpdate生命周期的执行 */}

                {/* forceUpdate： force： 强制 update更新 */}
                <p><button onClick={()=>{
                    this.state.nowDate = '直接赋值修改';//不会触发render函数执行
                    this.forceUpdate();// 强制更新  ==》 也会触发 render函数执行，进而触发 componentDidUpdate的执行
                }}>强制更新</button></p>

                <hr/>
                <Son nowDate={this.state.nowDate}/>
            </>
        )
    }

    componentDidMount() {
        console.log('App componentDidMount');
        // 生命周期函数都是react在特定时间节点调用的，所有生命周期函数中的this都指向当前组件的实例对象
        // setInterval(()=>{
        //     this.setState({
        //         nowDate:moment().format('YYYY-MM-DD HH:mm:ss')
        //     })
        // },1000)
    }
    /**
     * 组件更新完成后触发
     * update: 更新
     * componentDidUpdate
     * 
     * 作用：
     * 1. ajax请求
     * 2. 可以修改本地存储 localStorage sessionStorage
     * 
     */
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
}
