import React, { useState } from 'react'
import moment from 'moment'
import { useEffect } from 'react';
export default function Timer() {
    let [nowDate, setNowDate] = useState(moment().format('YYYY-MM-DD HH:mm:ss'));

    useEffect(()=>{// componentDidMount
        let timer = setInterval(()=>{
            console.log('1111')
            setNowDate(moment().format('YYYY-MM-DD HH:mm:ss'))
        },1000)

        return ()=>{ // componentWillUnmount
            clearInterval(timer)
        }
    },[])
    return (
        <div>
            <p>当前日期是: {nowDate}</p>
        </div>
    )
}
