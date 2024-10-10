import React, { Component } from 'react'
import TestClass from './components/TestClass'
import TestFun from './components/TestFun'

export default class App extends Component {
    render() {
        return (
            <div>
                <TestClass age={99}  name='atguigu'/>
                <TestFun name='尚硅谷'/>
            </div>
        )
    }
}
