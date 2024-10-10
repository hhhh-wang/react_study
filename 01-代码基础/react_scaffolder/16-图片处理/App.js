import React, { Component } from 'react'
import imgSrc from './assets/images/1.jpeg'
export default class App extends Component {
    state = {
        index:2
    }
    render() {
        let {index} = this.state;
        return (
            <div>
                <h3>网络图片</h3>
                <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" class="img-responsive" alt="Image" />
                
                <h3>本地图片-01 - import 导入成js变量</h3>
                <img src={imgSrc} alt="" />
                <h3>本地图片-02 - require 导入</h3>
                <img src={require(`./assets/images/${index}.jpeg`)} alt="" />
            </div>
        )
    }
}
