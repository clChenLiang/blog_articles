## 目录
<@TOC>
### 参考
* [张鑫旭](https://www.zhangxinxu.com/wordpress/page/3/?s=CSS+%E5%B8%83%E5%B1%80)
* [MDN](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Visual_formatting_model)


## 视觉格式化模型
> CSS 视觉格式化模型（visual formatting model）是用来处理和在视觉媒体上显示文档时使用的计算规则。该模型是 CSS 的基础概念之一。
<style>
red{
    color: red;
}
</style>

### 盒子模型<a id="a"></a>
文档中的每一个元素被浏览器转换成 `盒子`. 盒子的布局由以下几个因素控制：
- 盒子的尺寸：精确指定、由约束条件指定或没有指定
- 盒子的类型：行内盒子（inline）、行内级盒子（inline-level）、原子行内级盒子（atomic inline-level）、块盒子（block）
- 定位方案（positioning scheme）：普通流定位、浮动定位或绝对定位
- 文档树中的其它元素：即当前盒子的子元素或兄弟元素
- 视口尺寸与位置
- 所包含的图片的尺寸
- 其他的某些外部因素
> 该模型会根据 <red>`盒子的包含块`（containing block）</red>的 *<red>边界* 来渲染盒子。通常，盒子会创建一个包含其后代元素的<red>`包含块`</red>，但是盒子并不由包含块所限制，当盒子的布局跑到包含块的外面时称为溢出（overflow）。
其中盒子类型有：
#### 盒子类型(display)
1. inline
2. inline-level
3. atomic inline-level
4. block
5. none
是国


### 相关概念
1. 格式化上下文：
2. 定位方案
3. 非替换行内块
4. 参与创建其容器
5. 定位规则
6. 可替换元素: 独立于 CSS 渲染之外的外部对象。即不用 `CSS` 渲染的元素。有 `img` `object` `video` `textarea` `input`。部分情况下可替换元素，为 `audio` `canvas`。

    `float` `position`
    | 定位 | 作用 | 条件 |
    |--|--|--|
    | 普通流 | 正常放置包含块(盒子)。块格式化，垂直方向；行内格式化，水平方向 | position= `static` / `relative`|
    | 相对定位 | 正常放置，但会根据 [`top`, `left`, `right`, `bottom`] 产生偏移 | position = `relative` |
    | 浮动 | 当前行内，浮动至头或尾 | float = `left`/`right` | 
    | 绝对定位 | 脱离流 | postion = `absolute`/`fixed`|
    | 固定定位 | 相对于视窗/图定位 | position = `fixed` |
内容模型 


| 标签 | 元素 | 盒子 | 说明 |
|--|--|--|--|
|| | 块级元素 | display:block、list-item、table|
| | 块级元素 | 块级盒子(block-level box) | |
| | | 块容器盒子 |不参与当前块的布局和定位，它所描述的仅仅是当前盒子与其后代之间的关系|
| | | 行内级盒子 | |
| | | 原子行内级盒子| |
| | | 行内盒子 | 参与行内格式化上下文创建的行内级盒子 |
| | | 块盒子(block box) | 即是块级盒子，也是块容器盒子 |


> `块级盒子`描述了元素与其父元素和兄弟元素之间的行为，而`块容器`盒子描述了元素跟其后代之间的行为。


> 浮动
相对于父元素移位，不占用兄弟元素位置（错误）

#### 自己的话
CSS 布局样式由基石 -- 包含块决定。在包含块的位置上，受 position/float 共同影响，有所偏离。不同盒子的宽高不一样，由左上角决定包含块的位置，再由宽高决定包含块的形状。
基本块/包含块：对内，允许有子元素。共同形成一个块，占用“空间”，阻隔式（上下紧凑，不同行）


### 计算公式
位置： position  float  top  
尺寸： width  height  从内往外计算还是反过来

问题：
    1. absolute 绝对定位，不占据空间，跟随属性. 有点类似于 z-index ，但不等同于
    2. 


#### 基线 baseline
内联元素才有 baseline, 块级元素没有这个概念

#### 张鑫旭 imooc 视频
##### 深入理解行高 line-height
[链接](https://www.imooc.com/video/8261)
1. 消除图片底部间隙
```css
img{display: block;}
```
```css
img{vertical-align:bottom;}
```
```css
.box{line-height: 0;}
```
2. line-height 基理
定义： 两基线的距离
baseline: 取值有多种
图片等内联元素的基线为底部（border-bottom）,而文本则不一样，往往会多出一些来。多出的空隙一般为行间距，其计算值为 = `line-height` - `content-height`;
3. `line-height` 的实际应用

##### 深入理解 vertical-align 
1. inline 水平元素：
    `<img>`, `<span>`, `<strong>`, `<em>`, (未知元素)...
2. inline-block 元素：
    `<input>`, `<button>`
3. 元素应用 `float` 后，变成 block
 


