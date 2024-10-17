import React, { useRef } from 'react'
import ClassTest from './components/ClassTest'
import FunTest from './components/FunTest';
/**
 * ref:
 * 1. 获取真实dom：
 * 2. 模拟componentDidUpdate
 * 3. 给组件绑定
 *    类组件：ref.current 可以获取类组件的实例对象
 *    函数组件: 函数组件本身不能绑定ref，会报错，但是配合React.forwardRef就可以绑定ref属性了
 *    可以实现，在父组件中获取子组件的真实dom元素
 * 
 *    我们希望父组件的ref，只能有限的操作子组件的真实dom，那就需要能够在子组件中自定义父组件ref的current属性，实现有限的功能===>useImpretiveHandle
 * 
 */
export default function App() {
    const classRef = useRef();
    const funRef = useRef('我是谁？');
    return (
        <div>
            <h3>类组件 绑定ref</h3>
            <ClassTest ref={classRef}/>
            <h3>函数组件 绑定ref</h3>
            <FunTest ref={funRef} />
            <hr />
            <button onClick={()=>{
                console.log('classRef: ', classRef.current);


                // funRef.current.style.color='red'
                // funRef.current.style.fontSize = '30px'
                console.log(funRef);
                funRef.current.changeColor();
                funRef.current.changeFontSize();
            }}>获取ref</button>
        </div>
    )
}
