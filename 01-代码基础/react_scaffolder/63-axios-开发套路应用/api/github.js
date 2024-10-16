/**
 * 封装所有的github相关的请求函数
 * 
 */
import request from '../request'
/**
 * 
 * @param {*} keyword  关键字
 * @param {*} sortType  排序方式
 * @returns Promise对象
 * 
 */
export function getRepo(keyword, sortType='stars'){
    return request.get('/search/repositories',{
        params:{
            q:keyword,
            sort:sortType
        }
    })
}

