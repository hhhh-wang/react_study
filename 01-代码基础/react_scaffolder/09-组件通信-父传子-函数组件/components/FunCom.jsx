import React from 'react'
// 直接在参数位置解构props对象中的数据
export default function FunCom({count, msg ,school}) {
    console.log('FunCom run');
    
    return (
        <div>
            <h3>FunCom</h3>
            <p>props count: {count}</p>
            <p>props msg: {msg}</p>
            <p>props school: {school}</p>
        </div>
    )
}

// export default function FunCom(props) {
//     console.log('FunCom run');
//     console.log('props: ', props);
//     let {count, msg ,school} = props
//     return (
//         <div>
//             <h3>FunCom</h3>
//             <p>props count: {props.count}-{count}</p>
//             <p>props msg: {props.msg}-{msg}</p>
//             <p>props school: {props.school}-{school}</p>
//         </div>
//     )
// }

