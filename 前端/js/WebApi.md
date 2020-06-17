## BOM
### window对象
setTimeouxxt
setInterval
> 全局对象 下面的对象都是挂载在window对象下

### location对象
> window.location == document.location

* hash
* href
* pathname
* search

### navigator对象


### screen对象

### history对象
保存着用户上网的历史记录，是window对象的属性。
```
history.go(-1)
history.go(2)
```

## node
1. nodeType // 1是元素
2. nodeName
3. nodeValue
4. parentNode

## 节点层次
document 表示整个文档

element 表示元素节点

Text类型
```javascript
var fragment = document.createTextNode();
```
documentFragment类型 文档碎片  
```javascript
var fragment = document.createDocumentFragment();
```

## 操作DOM

### 动态脚本
```javascript
function loadScript(url){
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url
  document.body.appendChild(script)
}
```

### 动态样式
> 不能在ie中使用
```javascript
function loadStyles(url){
  var script = document.createElement('link')
  link.rel = 'stylesheet'
  link.type = 'text/css'
  var head = document.getElementByTagName('head')[0]
  head.appendChild(script)
}
```
### 访问样式 设置样式

```javascript
var myDiv = document.getElementById('myDiv');
myDiv.style.backgroundColor = 'red';
myDiv.style.width = "100px"

//应用所有样式
myDiv.style.cssText = "width: 25px; height: 100px"

getComputedStyle() //ie不支持
document.querySelector("#myDiv").currentStyle; //ie支持
```

### selector
selector API  
querySelector()  
querySelectorAll()  

### 自定义数据属性 data-  
div.dataset.appid

### 插入
innerHTML  
outerHTML  
*使用innerHTML属性与通过多次DOM操作创建节点效率高得多*
*使用innerHTML是最好先将要替换元素的所有事件处理程序清楚掉*

### 元素遍历
```javascript
childElementCount
firstElementChild
lastElementChild
previousElementSibing
nextElementSibing
```

### 元素大小
1. client size 内容 + 内边距  
clientWidth  
clientHeight
2. 偏移量
  ```javascript
  offsetHeight  
  offsetWidth
  offsetLeft // 左外边框到包含元素的左内边框之间的距离
  offetTop

  //如何知道某个元素在页面上的偏移量?
  function getElementLeft(el){
    var actualLeft = el.offsetLeft,
        current = el.offetParent;
    while(current !== null) {
      actualLeft += current.offsetParent;
      current = current.offsetParent;
    }
    return actualLeft;
  }
  ```
3. 滚动位置和大小
scrollHeight  
scrollWidth  
scrollLeft  
scrollTop  
可以通过设置以上2个参数，设置滚动条的位置
4. 确定元素相对于视口的位置  
getBoundingClientRect()
### 厂商扩展
  1. scrollIntoView 滚动
  2. childer属性
  3. contains方法
  4. 插入文本 innerText

## 事件

### 事件级别

- DOM0
- DOM2
- DOM3

### 事件流

事件冒泡 + 事件捕获 + 处于目标阶段

### 事件处理程序
1. HTML事件处理程序  
<input type="button" value=""click me" onclick="showMessage()">
2. DOM0级  
element[onClick] = handler  
element.onClick = handler  
3. DOM2级  
var btn = document.getElementById('myBtn')  
btn.addEventListener('click',fn)  
4. IE事件处理程序  
attachEvent/detachEvent

### 标准 DOM 事件对象
> IE中的事件对象和DOM中的事件对象不一致  

```
currentTarget
stopPropagation() //阻止冒泡
target //实际的目标
type
preventDefault() //阻止默认事件
```
### DOM 事件捕获的流程

### 不支持冒泡的事件

### 事件的方法

### 事件类型  
1. UI事件  
  * load
  * error
  * resize
  * scroll
  * select
2. 焦点事件
  * focus
  * blur
3. 鼠标事件
  * mousemove
  * mouseleave
  * mouseenter
  * mousedown
  * click
  * dblclick
4. 键盘事件
  * keydown
  * keypress
  * keyup
5. html5事件
  * DOMContentLoaded // dom load
  * hashchange事件
6. touch事件
  * touchstart
  * touchmove
  * touchend
  ```
  event.touches[0]
  clientX
  clientY
  pageX
  pageY
  target
  ```

### 考虑内存和性能
1. 事件委托
2. 及时移除事件处理程序

### 自定义事件
```js
let myEvent = new Event('custome')
$el.addEventListener('custome', () => {
  console.log('custome')
})
$el.dispatchEvent(myEvent)
```

### 模拟事件
1. 创建鼠标事件
```javascript
var btn = document.getElementById('myBtn');
var event = document.createEvent('MouseEvents');
event.initMouseEvent('click', true, true, document.defaultView, 0, 0, 0, 0, 0, false, false, false , false, 0, null);
btn.dispatchEvent(event)
```
2. 创建自定义事件 DOM3级规范
```javascript
var div = document.getElementById('myDiv'),
    event;
div.addEventListener('myEvent', function(event){
    alert('div' + event.detail)
})
document.addEventListener('myEvent', function(event){
    alert('document' + event.detail)
})
if(document.implementation.hasFeature('CustomEvents', '3.0')) {
    event = document.createEvent('CustomEvent');
    event.initCustromEvent('myEvent', true, false, 'hello world');
    div.dispatchEvent(event)
}
```

### target 与 currentTarget

### 清除 DOM 事件

### 具体事件

#### 跨域通信

#### animationend
#### 鼠标事件
#### DeviceOrientationEvent
#### touch 事件
#### touch 事件
#### input 事件
setSelectionRange
compositionstart

#### paste 事件


?> *TODO* 完善示例

## 表单

### 表单字段

```js
//选择表单元素
var selectbox = document.forms[0].elements['selectbox'];

//选择form
var form = document.getElementById('myForm')

```
### 重置表单


### 提交表单
```html
<input type="submit">
<button type=“submit">
<input type="image">

// js方式提交表单
var form = document.getElementById('myForm')
form.submit()
```

### 重置表单
```javascript
<input type="reset" value="rest btn">
<button type="reset">reset</button>

//阻止重置表单
var form = document.getElementById('myForm')
form.addEventListener('reset', function(e){
  e.preventDefault()
})

```
1. input
2. select
3. 序列化
4. 验证api
  ```
    required
    autofocus
    pattern
    checkValidiry()

  ```

## API

### First-Contentful-Paint 首屏时间
### MutationObserver 监听 DOM 变化
### execCommand 复制文本
### Promise
### Blob 二进制大对象
### iFrame 通信
### try...catch...错误处理
### ES6 Module 和 CommonJS

### pushState、hashchange 前端路由

### Cookie、localStorage、sessionStorage

### Web Workers 单独运行线程


## DOM 实践

```javascript
document.createElement()
document.appendChild()
document.createTextNode()
document.getElementById()
removeChild(child);
getPropertyValue()
document.head || document.getElementByTagName('head')[0]
document.body
document.readyState == 'complete'
```

### offset、scrollWidth
### property 和 attribute
### tagName 和 nodeName

### 元素查找

### querySelectorAll
### 上下查找
### DOM 元素的增删改查
### createDocumentFragment
### cloneNode
### DOM 序列化与反序列化

## 实践

### video 自动播放
### 日期格式化
### 实现 Canvas 缩放的方法
### Canvas Retina 适配
### rem 适配移动端屏幕
### 元素拖拽
### 横屏竖屏切换监听
### 前端动态生成屏幕快照
### 移动端虚拟键盘弹出输入框上移
### 判断元素是否在视窗内
### H5软键盘兼容方案
### URL Query 转对象
### 注入 JS
### 元素是否可滚动
### 限制键盘输入
### 计算元素位置
### 访问 DOM 树的所有元素
### 获取 document 宽高
### 计算图片宽高
### 键盘密码可见切换
### 滚动到某个元素

> ele.scrollIntoView({ behavior: 'smooth' });









