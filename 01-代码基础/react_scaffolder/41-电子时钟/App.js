import React, { useState } from 'react'
import Timer from './components/Timer'

export default function App() {
    let [count, setCount] = useState(0);
    return (
        <div>
            <p>count: {count}</p>
            <p><button onClick={()=>setCount(count + 1)}>count++</button></p>
            {count % 2 === 0 && <Timer />}
        </div>
    )
}
