import React, { useRef, useState } from 'react'

export default function App() {
    let [username, setUsername] = useState('atguigu');
    let [password, setPassword] = useState('123123');
    const save = (e)=>{
        e.preventDefault();
        console.log('username: ', usernameRef.current.value);
        console.log('password: ', passwordRef.current.value);
    }
    // 创建ref
    const usernameRef = useRef();
    const passwordRef = useRef();
    return (
        <div>
            <h3>非受控组件</h3>
            <form onSubmit={save}>
                <p>姓名： <input type="text" name="username" ref={usernameRef} defaultValue={username} /></p>
                <p>密码： <input type="text" name="password" ref={passwordRef} defaultValue={password} /></p>
                <p><button>保存</button></p>
            </form>
        </div>
    )
}
