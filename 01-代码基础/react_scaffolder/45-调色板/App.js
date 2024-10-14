import React, { useState } from 'react'

export default function App() {
    let [r, setR] = useState(0);
    let [g, setG] = useState(255);
    let [b, setB] = useState(0);
    function change(fn){
        return e=>{
            fn(e.target.value)
        }
    }
    return (
        <div>
            <p>红 <input type="range" min={0} max={255} name="" value={r} onChange={change(setR)}/></p>
            <p>绿  <input type="range" min={0} max={255} name="" value={g} onChange={change(setG)}/></p>
            <p>蓝 <input type="range" min={0} max={255} name="" value={b} onChange={change(setB)}/></p>
            <div style={{ width: 200, height: 200, border: '1px solid red' ,backgroundColor:`rgb(${r},${g},${b})`}}>

            </div>
        </div>
    )
}
