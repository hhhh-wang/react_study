import React, { Component } from 'react'
/**
 * 受控组件：相对于表单元素来说的
 * 什么是受控组件：表单元素的值，受到组件状态数据的控制
 * 
 */
export default class FormControl extends Component {
    state = {
        username: 'atguigu',
        password: '123123',
        sex: '0'
    }
    save(e) {
        // 阻止默认行为
        e.preventDefault();
        console.log('save')
        console.log('username: ', this.state.username);
        console.log('password: ', this.state.password);
    }
    // changeUsername(e){
    //     console.log('e.target.name: ', e.target.name);// 获取表单元素的name属性值
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    // changePassword(e){
    //     console.log('e.target.name: ', e.target.name);
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    // change
    change(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        let { username, password,sex } = this.state;
        return (
            <>
                <form action="" onSubmit={this.save.bind(this)}>
                    {/* 
                        当把状态数据，赋值给表单的value属性，该表单元素受控
                        表单受控会有一下后果：
                        1. 表单的内容变成只读的了，不能修改了
                        2. 如果受控还想能够让用户输入新内容，需要给受控的表单添加 onChange 事件，在onChange的事件处理函数中，获取用户最新的输入，用用户最新的输入值，给状态赋值，即可解除只读属性
                        3. 组件受控，并通过onChange绑定状态，实现了状态数据和表单值的双向绑定
                    */}
                    <p>姓名： <input type="text" name="username" value={username} onChange={this.change.bind(this)} /></p>

                    <p>密码： <input type="text" name="password" value={password} onChange={this.change.bind(this)} /></p>

                    {/* 针对与 radio ，受控不是受value属性值的控制，而是受 checked属性值的控制 */}
                    <p>
                        性别： 男 <input type="radio" name="sex" value="1" checked={sex === '1'} onChange={this.change.bind(this)}/>
                        女 <input type="radio" name="sex" value="0" checked={sex==='0'} onChange={this.change.bind(this)}/>
                    </p>

                    <hr />
                    {/* 
                        以下都是可以提交的按钮
                        当点击保存按钮的时候，会将表单数据，提交到 action执行的地址，如果没有action属性，或者action属性为空，那么默认提交到当前地址，会刷新页面
                        提交按钮，会触发 form表单的 onSubmit事件，如果想阻止默认行为，通过 onSubmit的事件处理函数中的事件对象，e.preventDefault()进行阻止
                     */}
                    <p><button type='submit'>保存</button></p>
                    <p><button >保存2</button></p>
                    <p><input type='submit' value='保存3' /></p>

                    {/* 以下是不能提交的 */}
                    <p><button type='button'>不能提交</button></p>
                </form>
            </>
        )
    }
}
