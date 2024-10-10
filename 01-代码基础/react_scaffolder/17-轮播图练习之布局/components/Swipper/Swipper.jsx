import React, { Component } from 'react'
import './index.css'
export default class Swipper extends Component {
    state = {
        index:1
    }
    render() {
        let {index} = this.state;
        return (
            <div className='wrapper'>
                <img src={require(`../../assets/images/${index}.jpeg`)} alt="" />
                <span className="">&lt;</span>
                <span className="rightBtn">&gt;</span>
            </div>
        )
    }
}
