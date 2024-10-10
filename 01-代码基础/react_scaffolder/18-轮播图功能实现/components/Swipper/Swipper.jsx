import React, { Component } from 'react'
import './index.css'
export default class Swipper extends Component {
    state = {
        index:3
    }
    render() {
        let {index} = this.state;
        return (
            <div className='wrapper'>
                <img src={require(`../../assets/images/${index}.jpeg`)} alt="" />

                <span className="" onClick={()=>{
                    index--;
                    if(index < 1){
                        index = 3;
                    }
                    this.setState({
                        index
                    })
                }}>&lt;</span>
                <span className="rightBtn" onClick={()=>{
                    //index 自增
                    index++;
                    if(index > 3){// 限定index的变化范围
                        index = 1;
                    }
                    // 修改状态，重新渲染页面
                    this.setState({
                        index
                    })
                }}>&gt;</span>
            </div>
        )
    }
}
