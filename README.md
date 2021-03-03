# Screeps-chinese-pack

![build badge](https://github.com/screeps-cn/screeps-chinese-pack/workflows/BUILD/badge.svg)
![Base on](https://img.shields.io/badge/Base%20on-Tampermonkey-blue)
[![Coverage Status](https://coveralls.io/repos/github/screeps-cn/screeps-chinese-pack/badge.svg?branch=screeps-chinese-pack)](https://coveralls.io/github/screeps-cn/screeps-chinese-pack?branch=screeps-chinese-pack)

用于汉化 [screeps.com](https://screeps.com) 网站的 [油猴脚本](https://www.tampermonkey.net/)。由 Screeps 中国玩家自发创建并维护。[点此](./CONTRIBUTING.md) 来查看如何参与本项目！

本脚本发布于 **[greasyfork - screeps-chinese-pack](https://greasyfork.org/zh-CN/scripts/416651-screeps-chinese-pack)**，
安装请参照 [installing-user-scripts](https://greasyfork.org/zh-CN/help/installing-user-scripts)。

# 需求

- node `>=10.13.0`
- yarn `latest`
- tampermonkey `latest` (*浏览器中* )

# 使用

## 安装依赖

```
yarn install
```

## 本地开发

在浏览器地址栏中输入 `edge://extensions` 或 `chrome://extensions` 并在 Tampermonkey 的详细信息中勾选 **允许访问文件 URL**。

在项目目录中执行如下命令，将会在同目录下生成 `dist/main.js` 文件。

```
yarn start
```

打开 Tampermonkey，新建脚本，填入如下内容，**需要将 file:// 后面的路径修改为你对应的本地文件路径**：

```js
// ==UserScript==
// @name         screeps-chinese-pack-dev
// @match        https://screeps.com/*
// @require      file://e:\project\screeps-chinese-pack\dist\main.js
// ==/UserScript==
```

之后编辑 `/src` 目录下的文件，刷新浏览器后即可看到你的修改。

## 鸣谢

本项目和 Screeps-cn 社区完全自发维护，在此对这些做出过贡献的人们表示由衷的感谢！如果你曾经做出过贡献但是并没有在下面中找到你的名字，请及时联系我们：

[HoPGoldy](https://github.com/HoPGoldy)，
[masterkeze](https://github.com/masterkeze)，
[NSKMaki](https://github.com/NSKMaki)，
[LOSKIw](https://github.com/LOSKIw)。

*排名取决于参与日期。*
