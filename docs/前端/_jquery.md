## 常用
```
jquery.fn = jquery.prototype
jquery.fn.extend就是在原型对象上添加方法
jquery.extend 添加静态方法
```

## 好的习惯
1. 多个参数使用对象字面量存储
2. 不要将css写在jquery里面
3. 使用链式语法
4. 可以对事件使用自定义的namespace 



## jquery 插件

### 原则套路
1. 总是把插件包装在闭包里
2. 总是返回this 保持链式调用
3. 传给一个option对象
4. 总是为方法、事件和数据定义namespace
5. 单个插件，定义一个$.fn.plugin
6. 使用默认值扩展选项
7. 函数调用前使用分号
8. 缓存数组长度

### 框架

```jquery
;(function(global, factory) {
    factory(global);
}(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
    var jQuery = function( selector, context ) {
        return new jQuery.fn.init( selector, context );
    };
    jQuery.fn = jQuery.prototype = {};
    // 核心方法
    // 回调系统
    // 异步队列
    // 数据缓存
    // 队列操作
    // 选择器引
    // 属性操作
    // 节点遍历
    // 文档处理
    // 样式操作
    // 属性操作
    // 事件体系
    // AJAX交互
    // 动画引擎
    return jQuery;
}));

```