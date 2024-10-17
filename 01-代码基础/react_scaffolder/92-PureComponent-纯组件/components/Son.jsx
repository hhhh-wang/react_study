import React, { Component,PureComponent } from 'react'

export default class Son extends PureComponent {
    state = {
        money:2000
    }
    render() {
        console.log('Son render');
        let {money} = this.state;
        let {count} = this.props;
        return (
            <div>
                <h3>Son</h3>
                <p>Son state money: {money}</p>
                <p>Son props count: {count}</p>
                <p><button onClick={()=>{
                    this.setState({
                        money: money + 100
                    })
                }}>money++</button></p>

                <p><button onClick={()=>{
                    this.setState({
                        money: 10000
                    })
                }}>money == 10000</button></p>
            </div>
        )
    }
}
