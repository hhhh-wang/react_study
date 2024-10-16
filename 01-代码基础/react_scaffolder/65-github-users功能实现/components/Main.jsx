import React, { useState } from 'react'
import PubSub from 'pubsub-js'
import { useEffect } from 'react'
import { getUsers } from '../api/github'

export default function Main() {
    // 定义状态
    let [users, setUsers] = useState([])
    let [loading, setLoading] = useState(false);
    let [first, setFirst] = useState(true);// 是否是第一次进入该页面
    useEffect(() => {
        let searchId = PubSub.subscribe('search', async (msg, username) => {
            first && setFirst(false);
            console.log('Main username: ', username);
            setLoading(true);
            // 根据用户名发送ajax请求
            let { items } = await getUsers(username);
            console.log('items: ', items);
            setUsers(items);
            setLoading(false);
        })
        return () => {
            PubSub.unsubscribe(searchId)
        }
    }, [])
    if(first){
        return <h1>请输入用户名搜索</h1>
    }

    if(loading){
        return <h1>Loading.....</h1>
    }
    return (
        <div className="row">
            {users.map(user => (
                <div className="card" key={user.id}>
                    <a href={user.html_url} target="_blank" rel="noreferrer">
                        <img src={user.avatar_url} alt="" style={{ width: 100 }} />
                    </a>
                    <p className="card-text">{user.login}</p>
                </div>
            ))}

        </div>
    )
}
