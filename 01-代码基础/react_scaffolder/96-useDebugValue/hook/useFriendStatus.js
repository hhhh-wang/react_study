
import { useState, useDebugValue } from 'react'
// 取 min 和 max之间的随机整数
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //含最大值，含最小值
}

export default function useFriendStatus() {// 自定义hook函数
    const [isOnline, setIsOnline] = useState(null)

    setTimeout(() => {
        let result = getRandomIntInclusive(0, 1)// [0 | 1]
        console.log(result)
        setIsOnline(result ? 'online' : 'offline')
    }, 1000)

    // 在react开发者工具中的这个 Hook 旁边显示标签
    // "FriendStatus: Online"
    useDebugValue(isOnline)

    return isOnline
}
