[TOC]

## 知乎日报 WebApp

本项目是一个模仿知乎日报App功能的WebApp，基于 React 全家桶开发，开发的初衷是想通过实战加深对 React 技术栈的学习，把之前零碎的知识点整合起来形成相对完整的体系。后端使用 EXpress 框架，数据来源于知乎官方api，主要用于学习和交流。

开发过程中遇到的问题和解决方案都记录在我的[个人博客](https://serjaime.github.io/)上，欢迎大家观摩。

## 技术点

- react
- react-router-dom
- redux
- redux-thunk
- loadable-components
- react-lazyload
- stylus
- axios
- express
- immutable
- better-scroll

## 初步设计

### 页面

首页 index

![](https://ws1.sinaimg.cn/large/0072Lfvtly1g0ugnyfsuqj30ku1127hs.jpg)
![](https://ws1.sinaimg.cn/large/0072Lfvtly1g0ugqaat5fj30ku1127do.jpg)

详情 detail

![](https://ws1.sinaimg.cn/large/0072Lfvtly1g0ugsi686kj30ku112to4.jpg)
![](https://ws1.sinaimg.cn/large/0072Lfvtly1g0ugt0470rj30ku112ws1.jpg)

讨论 comment

![](https://ws1.sinaimg.cn/large/0072Lfvtly1g0ugtkfziyj30ku112wl7.jpg)

### 前端路由：

- / 首页
轮播文章 5条
所有文章 按日期列出
- /hot 热门文章
- /sections 专栏列表
- /detail/:id 文章详情
    - comments 文章评论
    长评 短评
- /history 历史记录

### 后端接口

- api/news/top 获取轮播文章 
- api/news/hot 热门文章
- api/news/before/:day 获取某一天文章
- api/news/:id 文章详情
- api/news/:id/long-comments 文章长评论查看
- api/news/:id/short-comments 文章短评论查看
- api/news/extra-info/:id 文章额外信息
- api/sections 栏目总览
- api/section/:id 栏目具体消息查看