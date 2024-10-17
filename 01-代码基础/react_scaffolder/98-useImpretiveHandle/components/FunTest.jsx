import React, { useRef } from 'react'
import { useImperativeHandle } from 'react';

function FunTest(props,ref) {
    console.log('ref:', ref); // 父组件传过来的 ref对象
    const myselfRef = useRef();
    useImperativeHandle(ref, ()=>({
        changeColor(){
            myselfRef.current.style.color = 'green';
        },
        changeFontSize(){
            myselfRef.current.style.fontSize = '30px';
        }
    }))
    return (
        <div ref={myselfRef}>FunTest</div>
    )
}
export default React.forwardRef(FunTest)
