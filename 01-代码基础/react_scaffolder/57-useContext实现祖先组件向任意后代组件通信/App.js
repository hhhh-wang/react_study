import React from 'react'
// 4. 导入context对象
import context from './context'
import Father from './components/Father'

export default function App() {
    return (
        // 5. 使用Provider包裹 后代组件，被包裹的后代组件及其所有的子组件，都可以直接使用 value中的数据
        <context.Provider value={{username:'atguigu', age:10}}>
            <div>
                <h3>App</h3>
                <Father />
            </div>
        </context.Provider>
    )
}
