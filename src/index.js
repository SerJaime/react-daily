import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/reset.styl';
import App from './App';
import axios from 'axios';
import { BASE_URL } from './api/url';
import './assets/styles/iconfont/iconfont.styl';

axios.defaults.baseURL = BASE_URL;
axios.interceptors.response.use(res => {
  return res.data;
}, (err) => {
  return Promise.reject(err);
});

ReactDOM.render(<App />, document.getElementById('root'));
