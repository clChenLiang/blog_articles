
### Jquery get 数组
1. 起因：为了导出文件，使用 form 格式
2. 使用 form 上传参数，下载文件，就会出现 obj 对象在参数里显示为 `[object object]` 或者 `object`
3. 解决方案
```html
<input type="text" name="username" aciton="..">
     <input type="text" name="photo[0].id">
     <input type="text" name="photo[0].name">
     <input type="text" name="photo[1].id">
     <input type="text" name="photo[1].name">
     <input type="text" name="photo[2].id">
     <input type="text" name="photo[2].name">
```
当前端没有页面时，使用 
```js
var form = $("<form>");
form.attr("style", "display:none");
form.attr("target", "");
form.attr("method", "get");
form.attr("action", "url" );
$("body").append(form);
form.submit();
```
来模拟生成一个 form 表单进行提交；
其中参数使用：
```js
for(var key in params) {
    var input1 = $("<input>");
    // 用于屏蔽对象
    // if(typeof params[key] == 'object') break;
    input1.attr("type", "hidden");
    input1.attr("name", key);
    // input1.attr("value", typeof regionAndTimeParams[key] == "object" ? JSON.stringify(regionAndTimeParams[key]) : regionAndTimeParams[key]);
    input1.attr("value", temp[key]);
    form.append(input1);
}
```

针对 `对象数组` 的提交，使用
```js
var temp = {};
if(typeof params[key] == 'object' ) {
    // 此处处理的是 对象数组，对象比较简单
    params.map(function (val, index) {
        for(var key_sub in val) {
            temp[ key + '[' + index + '].' + key_sub] = val[key_sub];
        }
    })
    // 不影响原来的 params
    $.extend(temp, params);
}
```
据此，完成全部的替换，达到与前端写定 `form` 的一样效果。