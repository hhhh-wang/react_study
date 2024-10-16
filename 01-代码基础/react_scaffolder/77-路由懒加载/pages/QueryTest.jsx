import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function QueryTest() {
    // let res = useSearchParams();
    // console.log('res: ', res);

    let [searchQuery, setSearchQuery] = useSearchParams();
    // console.log('searchQuery', searchQuery);
    let username = searchQuery.get('username');
    let age = searchQuery.get('age');
    console.log('username: ', username);
    console.log('age: ', age);
    return (
        <div>
            <h3>QueryTest</h3>
            <p>query username: {username}</p>
            <p>query age: {age}</p>
            <p><button onClick={()=>{
                setSearchQuery('?username=尚硅谷&age=100')
            }}>设置query参数</button></p>
        </div>
    )
}
