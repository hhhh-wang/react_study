import React, { useState } from 'react'
import { useEffect } from 'react'
import usePosition from '../hook/usePosition'

export default function FuMing() {
    let {x,y} = usePosition()
    return (
        <div style={{position:'absolute',left:x,top:y,width:100,height:100,border:'2px solid green'}}>
            FuMing
        </div>
    )
}
