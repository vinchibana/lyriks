# Project Lyriks

A React.js music player.

> [Live demo](https://lyriks-nine.vercel.app/)

![](https://s2.loli.net/2022/09/25/rKsBhpqMSHTgDFR.png)

## Technologies

1. React.js
2. APIs:
* Shazam Core API for charts, track details, artist details, and related tracks
* IP Geolocation API to detect the user’s location and recommend nearby popular songs

## Libraries & Tooling

[Tailwind](https://tailwindcss.com/), [Redux Toolkit](https://redux-toolkit.js.org/), [Vite](https://vitejs.dev/), axios

## Features

* Music player: play / pause, previous / next, shuffle, repeat, progress bar, and volume
* Home: loads the global Top chart by default, with genre filters
* Around You: loads a regional chart based on the user’s location
* Song / artist details: extra info (lyrics, bio, and more) plus related-track recommendations
* Search
