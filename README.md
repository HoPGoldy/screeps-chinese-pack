# Screeps-chinese-pack

用于汉化 [screeps.com](https://screeps.com) 网站的 [油猴脚本](https://www.tampermonkey.net/)。

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

访问 `edge://extensions` 或 `chrome://extensions` 将 Tampermonkey 设置为 **允许访问文件 URL**。

在项目目录中执行如下命令，将会在同目录下生成 `dist/main.js` 文件。

```
yarn start
```

打开 Tampermonkey，新建脚本，填入如下内容，**需要将 file:// 后面的路径修改为你对应的本地文件路径**：

```js
// ==UserScript==
// @require file://e:\project\screeps-chinese-pack\dist\main.js
// ==/UserScript==
```

修改完成后浏览器会提示“无效的用户脚本”，直接继续即可。之后编辑 `/src` 目录下的文件，将会直接同步到浏览器中。