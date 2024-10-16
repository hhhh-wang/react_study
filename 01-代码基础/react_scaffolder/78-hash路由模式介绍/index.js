import React from 'react';
import ReactDOM from 'react-dom/client';
// 2. 导入BrowserRouter
import { BrowserRouter, HashRouter } from 'react-router-dom'
// 导入App根组件
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // 3. 包裹App根组件
    <HashRouter>
        <App />
    </HashRouter>
);
