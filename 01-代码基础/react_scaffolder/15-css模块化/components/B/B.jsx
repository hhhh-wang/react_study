import React, { Component } from 'react'
// 2 导入css模块并存储成js变量
import styles from './index.module.css'
console.log('styles: ', styles);
export default class B extends Component {
    render() {
        return (
            <div className={styles.box}>B</div>
        )
    }
}
