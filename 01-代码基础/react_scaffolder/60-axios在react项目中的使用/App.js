import React, { useState } from 'react'
import axios from 'axios';
export default function App() {
    let [count, setCount] = useState(100);
    return (
        <div>
            <p>count: {count}</p>
            <p><button onClick={async ()=>{
                let res = await axios.get('https://api.github.com/search/users?q=aa')
                let totalCount = res.data.total_count
                console.log(totalCount);
                setCount(count + totalCount);
                
            }}>count+</button></p>
        </div>
    )
}
