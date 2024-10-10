import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// 导入App根组件
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // React.StrictMode 开启严格模式，console.log 输出打印都会变成两次，所以后续会关闭
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
