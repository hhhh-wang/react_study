import React, { Component,createRef } from 'react'

export default class App extends Component {
    // 1. 创建ref对象,并让其是类组件的私有属性
    inputRef = createRef();
    render() {
        console.log('inputRef: ',this.inputRef);// {current: null}
        return (
            <div>
                {/* 2. ref绑定要获取真实dom的jsx */}
                <input type="text" ref={this.inputRef}/>
                
                <p><button onClick={()=>{
                    // 获取input真实dom
                    console.log('this.inputRef: ',this.inputRef);
                    console.log('input value: ', this.inputRef.current.value)
                }}>获取 用户输入的 input 的内容</button></p>
            </div>
        )
    }
}
