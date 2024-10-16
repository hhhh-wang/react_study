import React from 'react'
import './index.css'
export default function Footer({todos}) {
    let total = todos.length;
    let doneNum = todos.reduce((pre,cur)=>pre + cur.isDone, 0)
    return (
        <div className="todo-footer">
            <label>
                <input type="checkbox" checked={doneNum === total && total > 0}/>
            </label>
            <span>
                <span>已完成 {doneNum}</span> / 全部 {total}
            </span>
            <button className="btn btn-danger">清除已完成任务</button>
        </div>
    )
}
