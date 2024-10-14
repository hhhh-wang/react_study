import React, { useEffect, useState } from 'react'
import usePosition from '../hook/usePosition'

export default function Lili() {
    let {x,y} = usePosition();
    x -= 110
    y -= 110
    return (
        <div style={{ position: 'absolute', left: x, top: y, width: 100, height: 100, border: '2px solid red' }}>Lili</div>
    )
}
