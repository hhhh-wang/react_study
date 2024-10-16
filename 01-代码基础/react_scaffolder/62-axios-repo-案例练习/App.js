import React, { useEffect, useState } from 'react'
import request from './request';

export default function App() {
    let [loading, setLoading] = useState(false);// 请求加载中的标识符
    let [repo, setRepo] = useState({});  // undefined.html_url
    // componentDidMount
    useEffect( () => { // useEffect中 的回调不能直接写 async， 需要单独定义async函数，在手动调用
        async function main(){
            // 开启loading
            setLoading(true);
            let {items} = await request.get('/search/repositories', {
                params: {
                    q: 'vue',
                    sort: 'stars'
                }
            })
            // 设置仓库状态
            setRepo(items[0])
            setLoading(false);
        }
        main()
    }, [])
    return (
        <div>
            {loading ? <h1>loading.....</h1> : <div>most star repo is <a href={repo.html_url}>{repo.name}</a></div>}
        </div>
    )
}
