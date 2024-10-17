import React, { useCallback, useState } from 'react'

export default function App() {
    let [count, setCount] = useState(88)
    // 未优化前，addCount 在每一个 App() 调用执行栈中都有一份
    // const addCount = (num) => {
    //     setCount(count + num);
    // }

    /**
     * useCallback
     * 作用: 可以缓存一个函数
     */
    const addCount = useCallback((num)=>{
        // setCount(count + num);
        setCount(count=>{
            return count + num;
        })
    }, [])

    
    return (
        <div>
            <p>count : {count}</p>
            <p><button onClick={() => addCount(3)}>count +</button></p>
        </div>
    )
}
