import React, { Component } from 'react'
import './index.css'
export default class Swipper extends Component {
    state = {
        imgArr:['1.jpeg','2.jpeg','3.jpeg'],
        index:0
    }
    render() {
        let {index,imgArr} = this.state;
        return (
            <div className='wrapper'>
                <img src={require(`../../assets/images/${imgArr[index]}`)} alt="" />

                <span className="" onClick={()=>{
                    index--;
                    if(index < 0){
                        index = imgArr.length - 1;
                    }
                    this.setState({
                        index
                    })
                }}>&lt;</span>
                <span className="rightBtn" onClick={()=>{
                    //index 自增
                    index++;
                    if(index > imgArr.length - 1){// 限定index的变化范围
                        index = 0;
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
