# JavaScript 框架设计
> 作者：司徒正美

| 章节 | 完成比 | 链接 |
|---|:--:|---|
| 第12章 |80||
| 第5章---类、工厂函数的实现 | 30 | |




## 第五章 类、工厂模式的实现

### 构造方法

### 类的模拟
> 私有属性的模拟
- 1. 通过 `new` 关键字，产生一个继承关系的 `obj` 实例；
- 2. 使用 `function` 产生闭合作用域；
- 3. `prototype` 指定继承关系；
- 4. ```var 实例 = new 类```
- 5. 继承的属性，为动态添加，并非实例诞生后，就固定下来了；

> 继承的实现，只能依靠 new ?

