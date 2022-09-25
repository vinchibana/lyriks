# Project Lyriks

React.js 音乐播放器

> [预览地址](https://lyriks-nine.vercel.app/)

![](https://s2.loli.net/2022/09/25/rKsBhpqMSHTgDFR.png)

## Technologies 

1. React.js
2. APIs:
* Shazam Core API 获取热门榜单、歌曲详情、艺人详情、推荐歌曲等数据
* IP Geolocation API 获取用户位置并推荐周边热门歌曲

## Libraries & Tooling

[tailwind](https://tailwindcss.com/), [Redux Toolkit](https://redux-toolkit.js.org/), [vite](https://cn.vitejs.dev/), axios

## 功能：
* 音乐播放器：播放 / 暂停、跳转上下一曲、shuffle、循环、进度条、音量调节
* 主页：默认加载全球热门榜单，可根据 genre 筛选
* 周边热门：根据用户所在位置加载周边热门榜单
* 歌曲/艺人详情：附加信息（歌词、简介等）、相关歌曲推荐
* 搜索

## ToDo
打包 Electron macOS dmg
