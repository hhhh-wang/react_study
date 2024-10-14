import React from 'react'
import { useEffect } from 'react'

export default function Son({ count }) {
    // useEffect(()=>{ // componentDidMount + componentDidUpdate[all state，all props]
    //     console.log('son 111')
    // })

    // 4. componentWillUnmount
    useEffect(() => {
        console.log('son componentDidMount')

        return () => {
            // componentWillUnMount
            console.log('son will unmount')
        }
    }, [])

    useEffect(()=>{ 
    // componentDidMount + componentDidUpdate
        console.log('son componentDidMount + son componentDidUpdate')
        return ()=>{// componentWillUnMount
            console.log('son will unmount2')
        }
    })
    return (
        <div>
            <p>son props count: {count}</p>
        </div>
    )
}
