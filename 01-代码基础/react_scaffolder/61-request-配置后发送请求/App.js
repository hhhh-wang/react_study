import React, { useState } from 'react'
// 导入配置号的request
import request from './request'
export default function App() {
    let [count, setCount] = useState(100);
    return (
        <div>
            <p>count: {count}</p>
            <p><button onClick={async () => {
                let res = await request.get('/search/users', {
                    params: {
                        q: 'aa'
                    }
                })
                let totalCount = res.total_count
                console.log(totalCount);
                setCount(count + totalCount);

            }}>count+</button></p>
        </div>
    )
}
