# Screeps-chinese-pack

![build badge](https://github.com/screeps-cn/screeps-chinese-pack/workflows/BUILD/badge.svg)
![Base on](https://img.shields.io/badge/Base%20on-Tampermonkey-blue)
[![Coverage Status](https://coveralls.io/repos/github/screeps-cn/screeps-chinese-pack/badge.svg?branch=screeps-chinese-pack)](https://coveralls.io/github/screeps-cn/screeps-chinese-pack?branch=screeps-chinese-pack)

A [tampermonkey script](https://www.tampermonkey.net/) for translating the [screeps.com](https://screeps.com) content to Chinese. It is spontaneously created and maintained by Screeps Chinese players. Click [here](./CONTRIBUTING.md) to see how to join this project!

This script is published on **[greasyfork - screeps-chinese-pack](https://greasyfork.org/scripts/416651-screeps-chinese-pack)**, refer to [installing-user-scripts](https://greasyfork.org/help/installing-user-scripts) for installation.

# require

- node `>=10.13.0`
- yarn `latest`
- tampermonkey `latest` (*in your browser*)

# how to use

## Install dependencies

```
yarn install
```

## local develop

Enter `edge://extensions` or `chrome://extensions` in the browser address bar and check the Tampermonkey Details button to **allow access to the file URLs**.

Execute the following commands in the project directory, and the `dist/main.js` will be generated in the same directory.

```
yarn start
```

Open Tampermonkey, create a new script and fill in the following content, you need to **modify the path after file:// to your corresponding local file path**:

```js
// ==UserScript==
// @name         screeps-chinese-pack-dev
// @match        https://screeps.com/*
// @require      file://e:\project\screeps-chinese-pack\dist\main.js
// ==/UserScript==
```

Then edit the files in the `/src` directory and refresh the browser to see your changes.

## Thanks

This project and the Screeps-cn community are completely self-sustaining, thanks to those who have contributed! If you have made a contribution but have not found your name below, please contact us in time:

[HoPGoldy](https://github.com/HoPGoldy),
[masterkeze](https://github.com/masterkeze),
[NSKMaki](https://github.com/NSKMaki),
[LOSKIw](https://github.com/LOSKIw).

*The ranking depends on participation date.*
