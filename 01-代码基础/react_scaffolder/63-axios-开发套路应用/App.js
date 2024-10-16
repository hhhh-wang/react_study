import React, { useEffect, useState } from 'react'
import { getRepo } from './api/github';
export default function App() {
    useEffect(()=>{// componentDidMount
        async function main(){
            // 发送请求之前开启 loading
            setLoading(true);
            let res = await getRepo('vue')
            console.log('res: ', res);
            // 设置状态
            setRepo(res.items[0])
            // 请求结果回来之后，关闭loading
            setLoading(false);
        }
        main();
    },[])
    // 定义状态
    let [repo, setRepo] = useState({});
    // 定义一个条件渲染的状态
    let [loading, setLoading] = useState(false);

    return (
        <div>
            {loading ? <h1>loading....</h1> : <div>most stars repo is <a href={repo.html_url}>{repo.name}</a></div>}
        </div>
    )
}
