import React, { Component,PureComponent } from 'react'
import Son from './components/Son'
/**
 * 父组件重新渲染，子组件无条件重新渲染
 * 
 */
export default class App extends PureComponent {
    state = {
        count:88
    }
    render() {
        console.log('App render');
        let {count} = this.state;
        return (
            <div>
                <h3>App</h3>
                <p>App state count: {count}</p>
                <p><button onClick={()=>{
                    this.setState({
                        count: count + 1
                    })
                }}>count ++</button></p>
                <p><button onClick={()=>{
                    this.setState({
                        count:99
                    })
                }}>count == 99</button></p>
                <hr />
                <Son count={count}/>
            </div>
        )
    }
}
