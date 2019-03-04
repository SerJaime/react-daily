const { resolve } = require('path');
const axios = require('axios');
const request = require('request');
const BASE_URL = 'https://news-at.zhihu.com';

axios.defaults.baseURL = BASE_URL;
axios.interceptors.response.use(res => {
  return res.data;
}, (err) => {
  return Promise.reject(err);
});

module.exports = function (app) {
  app.get('/', (req, res) => {
    res.sendFile(resolve(__dirname, '../../dist/index.html'));
  })

  app.get('/api/news/top', async (req, res) => {
    try {
      const result = await axios.get('/api/4/news/latest');
      res.json(result.top_stories);
    } catch (err) {
      res.sendStatus(500);
    }
  })

  app.get('/api/news/latest', async (req, res) => {
    try {
      const result = await axios.get('/api/4/news/latest');
      res.json(result);
    } catch (err) {
      res.sendStatus(500);
    }
  })

  app.get('/api/news/hot', async (req, res) => {
    try {
      const result = await axios.get('/api/3/news/hot');
      res.json(result);
    } catch (err) {
      res.sendStatus(500);
    }
  })

  app.get('/api/news/before/:day', async (req, res) => {
    const today = req.params.day;
    const nextDay = parseInt(today) + 1;
    try {
      const result = await axios.get(`/api/4/news/before/${nextDay}`);
      res.json(result);
    } catch (err) {
      res.sendStatus(500);
    }
  })

  app.get('/api/news/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const result = await axios.get(`/api/4/news/${id}`);
      res.json(result);
    } catch (err) {
      res.sendStatus(500);
    }
  })

  app.get('/api/news/:id/extra-info', async (req, res) => {
    const id = req.params.id;
    try {
      const result = await axios.get(`/api/4/story-extra/${id}`);
      res.json(result);
    } catch (err) {
      res.sendStatus(500);
    }
  })

  app.get('/api/news/:id/short-comments', async (req, res) => {
    const id = req.params.id;
    try {
      const result = await axios.get(`/api/4/story/${id}/short-comments`);
      res.json(result);
    } catch (err) {
      res.sendStatus(500);
    }
  })

  app.get('/api/news/:id/long-comments', async (req, res) => {
    const id = req.params.id;
    try {
      const result = await axios.get(`/api/4/story/${id}/long-comments`);
      res.json(result);
    } catch (err) {
      res.sendStatus(500);
    }
  })

  app.get('/api/sections', async (req, res) => {
    try {
      const result = await axios.get('/api/3/sections');
      res.json(result);
    } catch (err) {
      res.sendStatus(500);
    }
  })

  app.get('/api/section/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const result = await axios.get(`/api/3/section/${id}`);
      res.json(result);
    } catch (err) {
      res.sendStatus(500);
    }
  })

  app.get('/img', async (req, res) => {
    const url = req.query.url;
    const options = {
      url: url,
      encoding: null
    };

    function callback (error, response, body) {
      if (!error && response.statusCode === 200) {
        const contentType = response.headers['content-type'];
        res.header('Content-Type', contentType);
        res.header('Access-Control-Allow-Origin', '*');
        res.end(body);
      }
    }
    request.get(options, callback);
  })
}
