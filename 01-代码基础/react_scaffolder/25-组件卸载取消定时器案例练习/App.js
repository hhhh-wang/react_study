import React, { Component } from 'react'
import Son from './components/Son'

export default class App extends Component {
    state = {
        count:1
    }
    render() {
        return (
            <div>
                <h3>App</h3>
                <p>state count: {this.state.count}</p>
                <p><button onClick={()=>{
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>count++</button></p>

                <hr />
                {this.state.count % 2 === 0 && <Son/>}
            </div>
        )
    }
}
