import React, { useEffect, useState } from 'react'

export default function Lili() {
    let [x, setX] = useState(0)
    let [y, setY] = useState(0)
    useEffect(() => {// componentDidMount
        function move(e) {
            console.log(e.clientX, e.clientY);
            setX(e.clientX - 110)
            setY(e.clientY - 110)
        }
        window.addEventListener('mousemove', move)
        return () => {// componentWillUnmount
            window.removeEventListener('mousemove', move)
        }
    }, [])
    return (
        <div style={{ position: 'absolute', left: x, top: y, width: 100, height: 100, border: '2px solid red' }}>Lili</div>
    )
}
