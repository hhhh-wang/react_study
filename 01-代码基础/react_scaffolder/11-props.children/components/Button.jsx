import React, { Component } from 'react'

export default class Button extends Component {

    render() {
        let {children} = this.props;
        return (
            <button>{children}</button>
        )
    }
}
