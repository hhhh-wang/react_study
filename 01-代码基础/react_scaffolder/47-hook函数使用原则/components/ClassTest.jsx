import React, { Component } from 'react'
import { useRef } from 'react'

export default class ClassTest extends Component {
    // usernameRef = useRef() 
    // 报错： Hooks can only be called inside of the body of a function component.
    // hook 只能在函数组件中调用
    render() {
        return (
            <div>ClassTest</div>
        )
    }
}
