import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
))