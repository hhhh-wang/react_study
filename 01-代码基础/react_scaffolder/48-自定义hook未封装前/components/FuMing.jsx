import React, { useState } from 'react'
import { useEffect } from 'react'

export default function FuMing() {
    let [x, setX] = useState(110)
    let [y, setY] = useState(110)
    useEffect(()=>{// componentDidMount
        function move(e){
            console.log(e.clientX,e.clientY);
            setX(e.clientX)
            setY(e.clientY)
        }
        window.addEventListener('mousemove', move)
        return ()=>{// componentWillUnmount
            window.removeEventListener('mousemove',move)
        }
    },[])
    return (
        <div style={{position:'absolute',left:x,top:y,width:100,height:100,border:'2px solid green'}}>
            FuMing
        </div>
    )
}
