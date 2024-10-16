import React from 'react'
import PubSub from 'pubsub-js'
export default function Son2() {
  return (
    <div>
        <h3>Son2</h3>
        <p><button onClick={()=>{
            PubSub.publish('fengfeng', '你就不能打个车么？');
        }}>发布峰峰的消息</button></p>
    </div>
  )
}
