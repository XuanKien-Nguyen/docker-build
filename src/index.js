import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = process.env.BASE_URL || 'http://localhost:8000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    
    // Edit request config
    return request;
}, error => {
   
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    
    // Edit response config
    return response;
}, error => {
    
    return Promise.reject(error);
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
