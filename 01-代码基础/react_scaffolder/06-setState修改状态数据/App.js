import React, { Component } from 'react'
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
        /**
         *  直接赋值改变状态数据
         *  问题： 可以改变状态数据，但是不会触发组件重新渲染
         */
        // this.state.count += num;
        // console.log('count: ',this.state.count);

        /**
         * this.setState()
         * 1. 将状态数据的值改变
         * 2. 触发render重新调用
         */
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
            </div>
        )
    }
}
