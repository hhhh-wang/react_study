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
    click1(){
        console.log('click1 this: ', this); // 事件的回调是window调用的，所以是undefined
    }

    click2(){
        // bind作用： 改变函数的this指向，返回一个新的函数
        console.log('click2 this: ', this);
    }

    click3(){
        // 包裹箭头函数，使用外部作用域 render中的this
        console.log('click3 this: ', this);
    }

    click4 = ()=>{
        // 使用的是constructor中的this
        console.log('click4 this: ', this);
    }

    click5(){
        console.log('click5 this: ', this);
    }

    constructor(){
        super();
        this.click5 = this.click5.bind(this);
    }

    /**
     * 原则：
     * 1. 是否可以传参        bind 包裹箭头函数
     * 2. 是否占用内存空间    bind 包裹箭头函数
     * 
     */
    render() {
        console.log(this);// render函数是类的实例对象调用的，永远指向当前实例对象
        // 解构使用
        let {count,msg} = this.state;
        return (
            <div>
                <p>count : {this.state.count}-{count}</p>
                <p>msg: {this.state.msg}-{msg}</p>
                <p><button onClick={this.click1}>count++ 有问题的</button></p>

                <p><button onClick={this.click2.bind(this)}>通过bind修改 count++ </button></p>
                <p><button onClick={()=>this.click3()}>包裹箭头函数</button></p>

                <p><button onClick={this.click4}>直接定义成箭头函数</button></p>

                <p><button onClick={this.click5}>bind结合构造函数</button></p>

                {/* <p><button onClick={}>count++ 有问题的</button></p>
                <p><button onClick={}>count++ 有问题的</button></p>
                <p><button onClick={}>count++ 有问题的</button></p> */}
            </div>
        )
    }
}
