import React, { Component } from 'react'
import B from './components/B/B'
import A from './components/A/A'

export default class App extends Component {
    render() {
        return (
            <div>
               <A/>
               <B/>
            </div>
        )
    }
}
