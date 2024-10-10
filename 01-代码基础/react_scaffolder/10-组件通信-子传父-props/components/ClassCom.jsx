import React, { Component } from 'react'

export default class ClassCom extends Component {
    render() {
        // 子组件通过特殊属性 this.props进行接收
        console.log('classCom render');
        console.log('this.props: ', this.props);

        // 解构后使用
        let {count, msg, school,decCount} = this.props
        return (
            <div>
                <h3>ClassCom</h3>
                <p>props count: {this.props.count}-{count}</p>
                <p>props msg: {this.props.msg}-{msg}</p>
                <p>props school: {this.props.school}-{school}</p>

                <p><button onClick={()=>{
                    // props数据是只读的，不可修改
                    this.props.count = 10000;
                }}>修改props 中的 count</button></p>

                <p><button onClick={()=>{
                    decCount(5);
                }}>子传父</button></p>
            </div>
        )
    }
}
