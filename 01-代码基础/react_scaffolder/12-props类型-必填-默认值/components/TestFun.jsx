import React from 'react'
import PropTypes from 'prop-types'
function TestFun({name,age}) {
    return (
        <div>
            <h3>函数组件</h3>
            <p>props name: {name}</p>
            <p>props age: {age}</p>
        </div>
    )
}

TestFun.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
}

TestFun.defaultProps = {
    age: 10000
}

export default TestFun
