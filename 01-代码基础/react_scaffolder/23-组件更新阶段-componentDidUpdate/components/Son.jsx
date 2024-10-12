import React, { Component } from 'react'

export default class Son extends Component {
    constructor(){
        super();
        console.log('Son constructor');
    }
    componentDidMount(){
        console.log('Son componentDidMount');
    }
    componentDidUpdate(){
        console.log('Son componentDidUpdate');
    }
    render() {
        console.log('Son render');
        let {nowDate} = this.props;
        return (
            <div>
                <h3>Son</h3>
                <p>props- nowDate: {nowDate}</p>
            </div>
        )
    }
}
