## 入口
```
每个 `npm` 包都有一个主入口。
一般为 `index.js`, `main.js`, `package.json.main`。优先使用 `pkg.json` 中的 `main`。
```

### npm
npm 包中，`package.json` 中 `main` 指定了入口文件为:
```json
"main": "./lib/npm.js"
```
分析 `npm.js` 中，可以看到有
```js
if (require.main === module) {
    require('../bin/npm-cli.js')
}
```
这样的一段代码。当运行的主程序为该文件时，引用 `/bin/npm-cli.js`。确保执行到 cli 文件。

```
* 存疑 *: 主程序指的是什么，使用 node 运行的时候，并不能得到预期结果。
什么时候会用到？
```
执行 `npm.js` 时，会被切换 `npm-cli.js` 去