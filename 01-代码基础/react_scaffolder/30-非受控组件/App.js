import React, { Component } from 'react'
import FormControl from './components/FormControl'
import FormOutControl from './components/FormOutControl'

export default class App extends Component {
    render() {
        return (
            <div>
                {/* <h3>受控组件</h3>
                <FormControl/> */}
                <h3>非受控组件</h3>
                <FormOutControl/>
            </div>
        )
    }
}
