// react 17
import React from 'react';
import ReactDOM from 'react-dom';// 17 从 react-dom导入
import App from './App'

// 17 不创建根节点，直接使用ReactDOM对象渲染
ReactDOM.render(<App/>,document.getElementById('root'));

// import React from 'react';
// import ReactDOM from 'react-dom/client'; // react-dom/client
// // 通过import语法导入
// // import 'bootstrap/dist/css/bootstrap.min.css'
// // 导入App根组件
// import App from './App';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );
