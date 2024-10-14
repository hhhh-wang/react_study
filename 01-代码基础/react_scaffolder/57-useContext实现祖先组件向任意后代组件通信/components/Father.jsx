import React from 'react'
import Son from './Son'
import context from '../context'
import { useContext } from 'react'
export default function Father() {
    let {username, age} = useContext(context)
    return (
        <div>
            <h3>Fahter组件</h3>
            <p>Father username: {username}</p>
            <p>Father age: {age}</p>
            <Son />
        </div>
    )
}
