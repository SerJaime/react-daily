import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/reset.styl';
import App from './App';
import axios from 'axios';
const BASE_URL = 'http://127.0.0.1:3000/api';

axios.defaults.baseURL = BASE_URL;
axios.interceptors.response.use(res => {
  return res.data;
}, (err) => {
  return Promise.reject(err);
});

ReactDOM.render(<App />, document.getElementById('root'));
