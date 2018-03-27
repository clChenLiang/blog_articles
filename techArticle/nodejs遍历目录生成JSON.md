## JavaScript、Nodejs 遍历目录生成 JSON 串
> 需求：给定路径，取出所有文件目录与文件名，生成 JSON 数据。

<br>如：
目录：
```shell
├─abbrev
├─ansi
│  ├─examples
│  │  ├─beep
│  │  ├─clear
│  │  └─progress
│  └─lib
├─balanced-match
├─base64-js
│  ├─bench
│  ├─lib
│  └─test
├─big-integer
```
返回 `JSON` 如下：
```javascript
dirIndex = {
    abbrev: 'abbrev',
    ansi: {
        example: {
            beep: 'beep',
            clear: 'clear',
            progress: 'progress'
        },
        lib: 'lib'
    }
    balanced-match: 'balanced-match',
    ...
}
```

### 代码
```JavaScript
const path = require('path');
const fs = require('fs');
// 获取指定路径 path 下的，默认深度为 3 的目录 JSON
function getIndexByPath(dir, deep = 3) {
    let dirDevide = dir.split('/');
    let preDir = dirDevide.splice(0, dirDevide.length - 1).join('/');
    let index = {};
    getIndexOfPathByDeep(index, path.join(__dirname, preDir), dirDevide[0], deep + 1);
    return index;
}
// 开始对指定 path 递归查找深度为 deep 深度
function getIndexOfPathByDeep(obj, dir, curDir, deep) {
    let curPath = path.join(dir, curDir);
    // 达到搜索深度，停止
    if(deep) {
        obj[curDir] = curDir;
        if(fs.statSync(curPath).isDirectory()) {
            obj[curDir] = {};
            let lists = fs.readdirSync(curPath);
            lists.forEach(list => getIndexOfPathByDeep(obj[curDir], curPath, list, deep - 1))
        }
    }

}
```
