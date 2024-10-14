import React, { useRef, useState } from 'react'

export default function FunTest() {
    const usernameRef = useRef();
    // function save(){
    //     // 报错 ：React Hook "useState" is called in function "save" that is neither a React function component nor a custom React Hook function. 
    //     //   React Hook“useState”在函数“save”中调用，该函数既不是React函数组件，也不是自定义React Hook函数。
    //     let [count, setCount] = useState(100)
    // }

    function useSave(){ // useSave 是自定义的hook函数，内部可以使用 其他hook
        let [count, setCount] = useState(100)
    }

    // if(true){
    //     let [msg, setMsg] = useState('atguigu')
    // }

    for(let i=0; i<100;i++){
        let [msg, setMsg] = useState('atguigu')
    }

    return (
        <div>
            <button onClick={useSave}>点击</button>
        </div>
    )
}
