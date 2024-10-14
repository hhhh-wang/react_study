import React, { useEffect, useRef, useState } from 'react'

export default function App() {
    const inputRef = useRef(123); // useRef 可以给初始值 {current:123}

    const flagRef = useRef(true); //{current:true}
    // ref的初始值可以用来单独模拟componentDidUpdate
    console.log(inputRef)

    // let flag = true;
    // let [flag, setFlag] = useState(true);
    
    let [count, setCount] = useState(88);
    useEffect(()=>{ // componentDidMount + componentDidUpdate
        if(flagRef.current){
            flagRef.current = false;
            return;
        }

        // if(flag){
        //     flag = false;
        //     return;
        // }

        // if(flag){
        //     setFlag(false);
        //     return;
        // }

        // componentDidUpdate
        console.log('componentDidUpdate');
    });

    return (
        <div>
            <input type="text"  ref={inputRef}/>
            <button onClick={()=>{
                console.log(inputRef)
                console.log(inputRef.current.value);
            }}>获取</button>

            <p>count: {count}</p>
            <p><button onClick={()=>{
                setCount(count + 1)
            }}>count++</button></p>
        </div>
    )
}
