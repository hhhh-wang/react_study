import React from 'react'
import PubSub from 'pubsub-js'
export default function Son1() {
    return (
        <div>
            <h3>Son1</h3>
            <button onClick={()=>{
                PubSub.publish('fanfan', '都美竹我记你一辈子!');
            }}>发布凡凡的消息</button>
        </div>
    )
}
