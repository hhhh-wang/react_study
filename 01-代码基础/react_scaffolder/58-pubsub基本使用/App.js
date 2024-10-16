import React, { useEffect } from 'react'
// 1. 导入PubSub
import PubSub from 'pubsub-js'

import Father2 from './components/Father2'
import Father1 from './components/Father1'

export default function App() {
    useEffect(()=>{ // componentDidMount
        let fanfanId = PubSub.subscribe('fanfan', (msg, data)=>{
            console.log('App msg: ', msg);
            console.log('App data: ', data);
        })

        let fengId = PubSub.subscribe('fengfeng', (msg, data)=>{
            console.log('App msg: ', msg);
            console.log('App data: ', data);
        })
        return ()=>{ // componentWillUnmount
            PubSub.unsubscribe(fanfanId);// 取消订阅凡凡的消息
            PubSub.unsubscribe(fengId);
        }
    },[])
    return (
        <div>
            <h3>App</h3>
            <p><button onClick={()=>{
                PubSub.unsubscribe('fanfan');// 封杀凡凡
            }}>取消订阅凡凡</button></p>
            <p><button onClick={()=>{
                PubSub.clearAllSubscriptions();
            }}>封杀所有艺人</button></p>
            <hr />
            <Father1 />
            <hr />
            <Father2 />
        </div>
    )
}
