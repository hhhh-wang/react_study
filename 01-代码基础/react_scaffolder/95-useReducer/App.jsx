import React from 'react'
import { useReducer } from 'react'

const initalState = {
    num: 88,
    msg: 'atguigu'
}
function reducer(state, action) {
    switch (action.type) {
        case 'addNum':
            return {
                ...state,
                num: state.num + action.payload 
            }
        case 'decNum':
            return {
                ...state,
                num: state.num - action.payload
            }
    }
}
export default function App() {
    let [state, dispatch] = useReducer(reducer, initalState)
    console.log('state: ', state)
    let {num, msg} = state;
    return (
        <div>
            <p>state num: {num}</p>
            <p>state msg: {msg}</p>
            <p><button onClick={()=>{
                dispatch({type:'addNum', payload:3})
            }}>num++</button></p>

            <p><button onClick={()=>{
                dispatch({type:'decNum', payload:5})
            }}>num--</button></p>
        </div>
    )
}
