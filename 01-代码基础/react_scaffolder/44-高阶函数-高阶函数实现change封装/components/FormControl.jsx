import React, { useState } from 'react'

export default function FormControl() {
    let [username, setUsername] = useState('atguigu');
    let [password, setPassword] = useState('123123');
    const save = (e) => {
        e.preventDefault();
        console.log('username: ', username);
        console.log('password: ', password);
    }
    function changeUsername(e) {
        setUsername(e.target.value)
    }
    function changePassword(e) {
        setPassword(e.target.value);
    }
    // 方式一：让函数名变成一个参数
    function change(e, fn) {
        fn(e.target.value);
    }
    // 方式二：高阶函数实现[柯里化函数]
    function higherChange(fn) {
        return (e) => {
            fn(e.target.value)
        }
    }
    return (
        <div>
            <h3>非受控组件</h3>
            <form onSubmit={save}>
                {/* <p>姓名： <input type="text" name="username"  value={username} onChange={changeUsername}/></p>
                <p>密码： <input type="text" name="password"  value={password} onChange={changePassword}/></p> */}

                <p>姓名： <input type="text" name="username" value={username} onChange={(e) => change(e, setUsername)} /></p>
                <p>密码： <input type="text" name="password" value={password} onChange={(e) => change(e, setPassword)} /></p>

                <hr />
                <h3>高阶函数实现</h3>
                <p>姓名： <input type="text" name="username" value={username} onChange={higherChange(setUsername)} /></p>
                <p>密码： <input type="text" name="password" value={password} onChange={higherChange(setPassword)} /></p>
                <p><button>保存</button></p>
            </form>
        </div>
    )

}
