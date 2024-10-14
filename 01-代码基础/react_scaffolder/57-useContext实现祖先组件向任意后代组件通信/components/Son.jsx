import React, { useContext } from 'react'
// 6. 导入context对象
import context from '../context'
export default function Son() {
    // 7. 使用useContext hook函数，解析出context对象中绑定的value数据
    // let data = useContext(context)
    // console.log('data:', data);

    let {username, age} = useContext(context)
    return (
        <div>
            <p>username: {username}</p>
            <p>age: {age}</p>
        </div>
    )
}
