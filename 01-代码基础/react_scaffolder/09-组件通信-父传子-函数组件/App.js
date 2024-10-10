import React, { Component } from 'react'
import ClassCom from './components/ClassCom';
import FunCom from './components/FunCom';
/**
 * 状态数据研究三个方向：
 * 1. 如何定义状态
 * 2. 如何读取状态
 * 3. 如何修改状态
 */
export default class App extends Component {
    state = {
        count:99,
        msg:'atguigu123'
    }
    addCount(num){
        
        this.setState({
            count: this.state.count + num
        })
    }

    changeMsg(){
        this.setState({
            // msg: 'atguigu123123123123123212'
            msg:this.state.msg + '!'
        })
    }

    render() {
        console.log('render run');
        let {count,msg} = this.state;
        return (
            <div>
                <p>count : {this.state.count}-{count}</p>
                <p>msg: {this.state.msg}-{msg}</p>
                <p><button onClick={()=>this.addCount(3)}>count++ </button></p>
                <p><button onClick={()=>this.changeMsg()}>msg + !</button></p>
                <hr/>
                {/* 父组件通过子组件标签属性传递数据给子组件 */}
                {/* <ClassCom num={count} xiaoxi={msg} school='尚硅谷'/> */}
                <ClassCom count={count} msg={msg} school='尚硅谷'/>
                {/* 函数子组件也是通过属性传递数据 */}
                <FunCom  count={count} msg={msg} school='尚硅谷'/>
            </div>
        )
    }
}
