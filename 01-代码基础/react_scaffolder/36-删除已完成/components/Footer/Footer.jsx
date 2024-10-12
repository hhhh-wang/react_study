import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
    render() {
        // 接收todos
        let {todos,checkAll,deleteDone} = this.props;
        // 总条数
        let total = todos.length;
        // 已完成数量
        let doneNum = todos.reduce((pre,cur)=>pre + cur.isDone,0)
        return (

            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={doneNum===total && total > 0} onChange={(e)=>{
                        console.log('e.target.checked',e.target.checked);
                        checkAll(e.target.checked);
                    }}/>
                </label>
                <span>
                    <span>已完成 {doneNum}</span> / 全部 {total}
                </span>
                <button className="btn btn-danger" onClick={deleteDone}>清除已完成任务</button>
            </div>
        )
    }
}
