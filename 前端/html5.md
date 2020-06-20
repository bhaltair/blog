## 元素类型
### 行内元素
### 块级元素
### 内联块级元素
### 空元素
### 替换元素

## 渲染机制 

### DOCTYPE

### 浏览器渲染流程

- 解析 HTML，构建 DOM Tree
- 解析 CSS，生成 CSS Tree
- 当遇到 JS 时，DOM 构建过程会被吊起，需要等待 JS 执行完毕，触发 DOMContentLoaded
- 合并 DOM Tree 和 CSS Tree，生成 Render Tree
- 回流，负责各元素尺寸、位置的计算
- 重绘，绘制页面像素信息
  - outline, visibility, color、background-color
- 浏览器会将各层的信息发送给 GPU，GPU 会将各层合成（composite），显示在屏幕上


![render.png](https://qiniu.chenng.cn/2019-01-13-21-29-17.png)

### 回流与重绘

触发重排 reflow

触发重绘 repaint

## script 标签

## HTML 模板

## DOMContentLoader 与 window.onLoad

- DOMContentLoaded 是 HTML 文档被加载和解析完成后触发
- Load 是页面所有资源（包括图片，音频等）加载完后触发

## Meta 

### Viewport

- width：将布局视口设置为固定的值，比如 375px 或者 device-width（设备宽度）
- initial-scale：设置页面的初始缩放
width 与 initial-scale 都会初始化布局视口，但浏览器会取其最大值
- minimum-scale：设置最小的缩小程度
- maximum-scale：设置最大的放大程度
- user-scalable：设置为 no 时禁用缩放

### 强制浏览器使用 WebKit 内核

> <meta name="renderer" content="webkit">

## 新增元素

> 全是语义化的元素

1. section
  - section标签是有语义化的，不能用它来代替 div 标签
  - 如果希望内容出现在大纲之中，那么最合适的一定是 section 标签。
2. article
3. aside
  - 表示与内容关系不大的地方，比如侧边栏、背景描述、引述内容
4. footer
  - 底部信息，主要描述作者、文档、版权等信息，也不影响大纲
5. header
  - 头部信息，通常包含标题，它是不会生成大纲的
6. main

## 表单
1. 元素可以添加form属性
2. 新增Input元素种类
  * search
  * url
  * email
  * range
  * color
3. 表单事件
  * onchange


### 表单元素
* label 表单控件标题
* filed 表单控件集合
* datalist 其他表单控件的数据列表
* 

### 表单属性
```html
  maxlength
  pattern
  list
  multiple
  required
  formnovalidate
  autofocus
  accept
  autocomplete

  enctype
  target
  name



```

### 表单验证
1. required
2. 

## 增强的页面元素

1. ol列表可以设置start属性和reversed属性
2. a元素添加download属性 可以下载对应的资源文件
3. figure元素

## 全局属性
1. 可编辑 editable
2. 拖拽 dragggable
3. 文字方向 dir属性


## history API


## Modernizr

## 语义化

所谓“语义”就是为了更易读懂，

这要分两部分：

1. 让人读懂
2. 让机器读懂

如果都用div span这些标签，那就不需要h p ul header section article了

- 不要只关注展现方式，而不考虑标签语义
- 对于特殊群体的人群使用屏幕阅读器就会非常的不良好