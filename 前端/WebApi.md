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

![node.png](https://cdn.nlark.com/yuque/0/2019/png/92877/1565062655030-412b1ee8-75aa-4bc3-9a0a-04582d1d61c7.png?x-oss-process=image%2Fresize%2Cw_359)

0. textContent
  - 元素中的文本
1. nodeType // 1是元素
2. nodeName
3. nodeValue
4. parentNode
5. innerHTML
6. hidden
  - 当设置为 true 时，执行与 CSS display:none 相同的操作。
7. value
  - 表单元素支持
8. type
  - input 元素支持
9. href
  - a 元素支持

看一下 `<input/>` 元素，从外向里

- HTMLInputElement
  - 特定输入的属性
- HTMLElement
  通用 HTML 元素
- Element
  - 泛型元素方法
- Node
  - 通用节点属性
- EventTarget
  - 提供事件系统
- Object
  - 提供 纯对象 的方法

### 节点层次
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

## 存储

### cookie

> Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly

- name
- value
- domain
  - 如果不指定，默认为 当前文档的主机（Document.location）
  - 同一个域名下的二级域名也是不可以交换使用 cookie 的，比如 www.baidu.com 和 image.baidu.com
  - 设置 Domain=mozilla.org，二级域名 developer.mozilla.org 也会包含 cookie
- path
  - 默认是 / 
  - 子路径会被匹配
    - 如果设置了 Path=/docs，那么 /docs /docs/web /docs/web/http 都会被匹配
- secure
  - 设置为 true 的话，只通过 HTTPS 协议发送给服务端
- http-only
  - 为了避免 XSS 攻击，通过JavaScript的 Document.cookie API 无法访问带有 HttpOnly 标记的Cookie
  - 如果包含服务端 Session 信息的 Cookie 不想被客户端 JavaScript 脚本调用，那么就应该为其设置 HttpOnly 标记
- Expires/Max-Age
  - 不设置的话，是会话期 Cookie，浏览器关闭会自动被删除
  - 设置一个过期时间
- SameSite
  - cookie 在跨站请求时不会被发送，从而可以阻止 CSRF
  - 这是一个较新的字段，所有主流浏览器已经得到支持
  - 以前，如果SameSite属性没有设置，或者没有得到运行浏览器的支持，那么它的行为等同于None，Cookies会被包含在任何请求中——包括跨站请求。
  - None
    - 不管同站、跨站都发送
  - Strict
    - 只在访问相同站点才会被发送
  - Lax
    - 宽松
    - 大多数情况也是不发送第三方 Cookie，但是导航到目标网址的 Get 请求除外
      - 图片加载或者frames的调用，不发送 Cookie
      - ajax 不发送
      - a 链接跳转，发送 Cookie
    - 新版本浏览器为默认选项
      -  意味着如果没有设置 SameSite 属性时，将会视作为设置为 Lax
  - 一般来说，我们设置 secure=true 和 samesite = none & http-only = true就行了
- 作用域
  - Domain 和 Path 标识了 Cookie 的作用域，即 Cookie 应该发给哪些 URL。
- 过程
  - 第一次请求，服务端种下 cookie
  - 第二次请求，浏览器会自动带上 cookie，服务端会辨别身份

### localstorage

- 大小
  - 5 MB

### sessionstorage

- 会话存储
  - 浏览器打开期间一直保持
    - 如果重新加载或者恢复页面仍会保持会话
  - 关闭浏览器即清除

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


### 具体事件

#### 清除 DOM 事件

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

## Binary data

### arrayBuffer

- arrayBuffer
  - 二进制数组
  - 操作 ArrayBuffer，我们需要使用一个 `view` 视图
    - `view` 不存储数据，数据存在 ArrayBuffer 中
    - TypedArray 类型化数组
      - Uint8Array 8位无符号整数
    - DataView
      - 超灵活的“非类型化”视图
  - 场景
    - 主要在处理文件(创建、上传、下载)时遇到二进制数据
    - 图像处理遇到二进制
  - 2base64?
1. typedArray
```js
// 这将分配一个16字节的连续内存区域，并预先将其填充为零
let buffer = new ArrayBuffer(16); // create a buffer of length 16
let view = new Uint32Array(buffer);
alert(buffer.byteLength); // 16

alert(view.length); // 4, it stores that many integers
alert(view.byteLength); // 16, the size in bytes

// let's write a value
view[0] = 123456;

// iterate over values
for(let num of view) {
  alert(num); // 123456, then 0, 0, 0 (4 values total)
}
```

2. DataView
```js
let buffer = new Uint8Array([255, 255, 255, 255]).buffer;

let dataView = new DataView(buffer);

// get 8-bit number at offset 0
alert( dataView.getUint8(0) ); // 255

// now get 16-bit number at offset 0, that's 2 bytes, both with max value
alert( dataView.getUint16(0) ); // 65535 (biggest 16-bit unsigned int)

// get 32-bit number at offset 0
alert( dataView.getUint32(0) ); // 4294967295 (biggest 32-bit unsigned int)

dataView.setUint32(0, 0); // set 4-byte number to zero
```

### Blob 二进制大对象

- Blob 表示 `具有类型的二进制数据`
  - Blob 对象表示一个不可变、原始数据的类文件对象
- 和 ArrayBuffer 有什么区别？
  - 是比 `ArrayBuffer` 更高级别的对象
- 和 File 有什么区别？
  - File 对象内部使用 Blob
  - 从 `<input>` 标签中获取的File对象即是一个Blob实例
- 不可修改 
  - Blobs are immutable
  - 不能直接修改
  - 切割返回新的
- 操作 Blob
  - 其实并不太会需要一个 arrayBuffer，不常用
  - 为什么要把 Blob 弄成 ArrayBuffer ?
    - 判断一个文件类型
      - 这样我们就可以对文件的字节进行读写了，比如说要判断一个文件的类型，就可以读取它的前两个字节，与 Hash 表进行匹配
- blob url
  - 创建一个指向 blob 的 url，是一个映射，通过这个 url ，而可以访问 blob
  - img 和 a标签 都可以使用 blob url
  - 利用 URL.createObjectURL(blob)和 URL.revokeObjectURL()
  - > link.href = URL.createObjectURL(blob)
- 2base64
  - 不用 blob url 的另一个做饭是转换成 base64
  - 因为 img 同样支持 base64
  - 利用 FileReader
- 应用
  - 判断文件类型
  - 图片翻转
    - 读取照片 EXIF 信息中的 Orientation 字段，以主动旋转照片
  - 下载图片
   - 通过 canvas 画图片，然后将 canvas 转换为 blob，然后将 blob 转化成 blob url，然后下载

```js
// create Blob from a typed array and strings
let hello = new Uint8Array([72, 101, 108, 108, 111]); // "hello" in binary form

let blob = new Blob([hello, ' ', 'world'], {type: 'text/plain'});
```

**blob 转化成 base64**

```js
let link = document.createElement('a');
link.download = 'hello.txt';

let blob = new Blob(['Hello, world!'], {type: 'text/plain'});

let reader = new FileReader();
reader.readAsDataURL(blob); // converts the blob to base64 and calls onload

reader.onload = function() {
  link.href = reader.result; // data url
  link.click();
};
```

### File

- File 对象继承自 Blob
- 通常我们从 input 文件中获得 file 对象
- 多数情况下，我们不必读取文件内容
  - 我们可以使用 URL.createObjectURL (file)创建一个简短的 url，并将其分配给一个或 img
- FileReader 适用于任何 Blob，而不仅仅是 File
  - 使用它将一个 blob 转换为另一种格式
    - readAsArrayBuffer
    - readAsText
    - readAsDataURL 转化成 base64 data url

### 操作二进制数据

* File API
* XMLHttpRequest
* Fetch API
* Canvas
* Websocket

## 实践

### fetch-abort 

- 关于 AbortController，是window的一个API，用在fetch的第二个参数上，
- 不支持 IE10，可以去 npm 搜 polyfill
- 可以调用实例的 abort 方法，中断 fetch 请求
- 可以监听 abort 事件

```js
controller.signal.addEventListener('abort', rejectFn)
```

### First-Contentful-Paint 首屏时间
### MutationObserver 监听 DOM 变化
### execCommand 复制文本
### Promise

### iframe 通信

- 父子跨域通信
  - 父向子发送
    - iframe.contentWindow.postMessage()
    - window.addEventListener("message", receiveMessageFromIndex, false);
  - 子向父发送
    - parent.postMessage( {msg: 'MessageFromIframePage'}, '*');
    - window.addEventListener("message", receiveMessageFromIframePage, false);
- 跨窗口通信
- 跨标签通信

### try...catch...错误处理
### ES6 Module 和 CommonJS

### pushState、hashchange 前端路由

### Web Workers 单独运行线程

### xhr 与 fetch

XmlHttpRequest 对象负责将用户信息以异步通信的方式发送到服务器端，并接收服务器返回的响应信息和数据

### 获取样式

```js

element.style 可读可写 只能获取定义了的 style 样式

window.getComputedStyle(ele, null).getPropertyValue('height') 只读

document.defaultView.getComputedStyle 只读
```
### 窗口的滚动

读取滚动值
> window.pageYOffset/pageXOffset

设置滚动值

```js
window.scrollTo(pageX,pageY) — 绝对定位
window.scrollBy(x,y) — 相对当前位置的滚动
elem.scrollIntoView(top) — 滚动到正好elem可视的位置（elem 与窗口的顶部/底部对齐） // top = true 顶部对齐
```

### 第三方 Cookie

如果 Cookie 的域和页面的域不同，称之为第三方 Cookie。


### DOM 常见操作

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

### 获取样式

```javascript
getComputedStyle() //ie不支持
document.querySelector("#myDiv").currentStyle; //ie支持
```

- 获取计算后样式
  - getComputedStyle()


### 设置样式

```javascript
// 操作 className
document.body.className = 'foo' 会替换掉已有的类名 
var beforeClassName = document.body.className
document.body.className = `${beforeClassName} foo`


var myDiv = document.getElementById('myDiv');
myDiv.style.backgroundColor = 'red';
myDiv.style.width = "100px"

// 应用所有样式
myDiv.style.cssText = "width: 25px; height: 100px"

```

- 操作 style 属性
  - 多个属性使用 style.cssText
  - 单个属性
    - > elem.style.display = 'none'
- 操作 className
  - 操作 classList 方法：
    - elem.classList.add/remove("class") —— 添加/移除类。
    - elem.classList.toggle("class") —— 如果类存在就移除，否则添加。
    - elem.classList.contains("class") —— 返回 true/false，检查给定类

### 创建元素

- document.createElement(tag)
- document.createTextNode(value) 很少用
- elem.cloneNode(deep) —— 如果参数 deep==true 将元素及后代子元素进行克隆。

### 元素插入和移除

- innerHTML = 
  - *使用innerHTML属性与通过多次DOM操作创建节点效率高得多*
  - *使用innerHTML是最好先将要替换元素的所有事件处理程序清楚掉*
- outerHTML  
- parent/node
  - appendChild
    - > document.body.appendChild(div);
    - parend.appendChild(node)
  - insertBefore
  - removeChild
  - replaceChild
- current node
  - node.append()
    - node 末尾
  - node.after()
    - node 之后
  - node.prepend()
  - node.before()
  - node.replaceWith()
  - node.remove()
    - 移除node
- document.write()

### 元素属性

* elem.hasAttribute(name) —— 检验是否拥这个特性。
* elem.getAttribute(name) —— 获取到这个特性值。
* elem.setAttribute(name, value) —— 设置这个特性值。
* elem.removeAttribute(name) —— 移除这个特性。

#### 自定义数据属性 data-  
div.dataset.appid

### 元素遍历

![b.png](https://cdn.nlark.com/yuque/0/2019/png/92877/1565061196325-25ac8eb0-26ec-47f7-b015-50dd2e98eeea.png?x-oss-process=image%2Fresize%2Cw_393)

元素层级

- html
  - 对应 docuemnt 
  - 对应 html 标签
  - document.documentElement
- body
  - document.body
  - document.body 的值可能是 null
    - 比如这个 script 脚本在 head 标签中
- head
  - document.head

元素遍历

* 父亲
  - parentElement
- 兄弟
  * previousElementSibing
  * nextElementSibing
- 孩子
  - children
  * firstElementChild
  * lastElementChild
  - childElementCount
    - 孩子元素总数

### 元素大小

![a.png](https://cdn.nlark.com/yuque/0/2019/png/92877/1564999937632-628405d5-307a-4e19-8ec2-270069cc0c59.png)
![b.png](https://cdn.nlark.com/yuque/0/2019/png/92877/1564999725376-85dd2a69-8278-4fa1-9906-95be3f4f976d.png?x-oss-process=image%2Fresize%2Cw_379)

- client size = 内容 + 内边距  
  - clientWidth
  - clientHeight
  - 当内边距为 0 时候
    - clientWidth = width
    - clientHeight = height
- offset size = 内容 + 内边距 + 边框
  - offsetHeight
  - offsetWidth

### 元素位置

- clientTop和clientLeft
  - 返回内边距的边缘和边框的外边缘之间的水平和垂直距离，也就是左，上边框宽度
* offsetLeft/offetTop
  - offsetLeft 表示左外边框到包含元素的左内边框之间的距离
  - 表示该元素的左上角（边框外边框）与已定位的父容器（offsetParent对象）左上角的距离
  - offsetParent
    - 指元素最近的定位（relative,absolute）祖先元素
    - offsetParent = null
      - body 与 html
      - position: fixed 的元素
      - dispaly: none 的元素
* 滚动条
  - scrollHeight/scrollWidth 
    - 内容的高度和宽度
      - 包含 padding 
      - 不包含滚动条
  - scrollTop/scrollLeft 
    - 元素滚动部分的宽度/高度
    - ![s.png](https://cdn.nlark.com/yuque/0/2019/png/92877/1565000213351-e49cecd9-c48d-4f81-8d2b-82ea88eb70ca.png)
- getBoundingClientRect()
  - .top/left/right/bottom 返回元素的大小及其相对于视口的位置  
  - 如何拿到绝对位置
    - 加上 scroll
      - > document.body.querySelector('.application-main ').getBoundingClientRect().top + window.scrollY

#### 计算元素到窗口的位置

```js
var offset = (el, type) => {
    var offset = 0
    while(el.offsetParent != null) {
        left += el['offset' + type]
        el = el.offsetParent
       
    }
    return offset
}
```


### 元素查找

- document.getElementById()
- document.getElementsByName()
- document.getElementsByTagName() 返回一个数组
- document.getElementsByClassName() 返回一个数组
- document.querySelector()
- document.querySelectorAll()
- elemA.contains(elemB)
- elem.matches(css)

- get开头的方法，都只能在document对象上调用
- 所有的 "getElementsBy*" 方法都会返回 live 集合。这类集合总是可以反映出文档的当前状态而且在文档变化时，可以自动更新。

![a.png](https://cdn.nlark.com/yuque/0/2019/png/92877/1565063508332-8f63dec4-8b21-4864-9a0b-23b55712456a.png?x-oss-process=image%2Fresize%2Cw_746)


querySelectorAll 高级玩法

```js
let selector = 'a[href*="://"]:not([href^="http://internal.com"])';
let links = document.querySelectorAll(selector);

links.forEach(link => link.style.color = 'orange');
```

### 元素的增删改查

### offset、scrollWidth
### property 和 attribute
### tagName 和 nodeName


### createDocumentFragment

- 不使用 DocumentFragment，批量导入节点列表

```html
<ul id="ul"></ul>

<script>
function getListContent() {
  let result = [];

  for(let i=1; i<=3; i++) {
    let li = document.createElement('li');
    li.append(i);
    result.push(li);
  }

  return result;
}

ul.append(...getListContent()); // append + “...” 操作符 = 一对好朋友！
</script>
```

### cloneNode
### DOM 序列化与反序列化

### 如何知道某个元素在页面上的偏移量?

```javascript
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

### 多页面通信

- 同源
  - 利用 Service Worker 中转
  - LocalStorage
    - LocalStorage 变化时，会触发 storage 事件
  - window.open + window.opener
    - 还是利用的 message 事件以及 postMessage 方法
- 不同源

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


### addEventListener passive 被动

> document.addEventListener('touchstart', onTouchStart, {passive: true});

查看是否支持 passive

```js
var supportsPassive = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function() {
      supportsPassive = true;
    }
  });
  window.addEventListener("testPassive", null, opts);
  window.removeEventListener("testPassive", null, opts);
} catch (e) {}
```

### canvas 高倍屏 retina 下变模糊的处理办法

- canvas 的 width、height属性用于管理画布尺寸【画布大小】
- canvas 的 style 属性中的 width、height 正好是显示尺寸【实际渲染大小】
- devicePixelRatio
  - 表示了屏幕的设备像素比，即用几个像素点宽度来渲染1个像素
- backingStoreRatio
  - 决定了浏览器在渲染 canvas 之前会用几个像素来来存储画布信息
- 根据当前屏幕的设备像素比 DPR
  - 然后将 canvas.width/hegith 放大到该设备像素比来绘制
  - 然后将 canvas.style.width/heigth 压缩到一倍来展示

```js
var devicePixelRatio = window.devicePixelRatio || 1,
    backingStoreRatio = context.webkitBackingStorePixelRatio ||
                        context.mozBackingStorePixelRatio ||
                        context.msBackingStorePixelRatio ||
                        context.oBackingStorePixelRatio ||
                        context.backingStorePixelRatio || 1,

    ratio = devicePixelRatio / backingStoreRatio;

// upscale the canvas if the two ratios don't match
if(devicePixelRatio !== backingStoreRatio){

   // adjust the original width and height of the canvas
   // 调整画布的原始宽度和高度
   canvas.width = originalWidth * ratio;
   canvas.height = originalHeight * ratio;

   // scale the context to reflect the changes above
   // 缩放上下文以反映上述变化
   context.scale(ratio, ratio);
}

// ...do the drawing here...

// use CSS to bring the entire thing back to the original size
// 使用CSS将整个内容恢复到原始大小
canvas.style.width = originalWidth + 'px';
canvas.style.height = originalHeight + 'px';
```

### 数字键盘

```html
<!-- 有"#" "*"符号输入 -->
<input type="tel">

<!-- 纯数字 -->
<input pattern="\d*">

```

### 系统功能

```html
<!-- 拨号 -->
<a href="tel:10086">打电话给: 10086</a>

<!-- 发送短信 -->
<a href="sms:10086">发短信给: 10086</a>

<!-- 发送邮件 -->
<a href="mailto:839626987@qq.com">发邮件给：839626987@qq.com</a>

<!-- 选择照片或者拍摄照片 -->
<input type="file" accept="image/*">

<!-- 选择视频或者拍摄视频 -->
<input type="file" accept="video/*">

<!-- 多选 -->
<input type="file" multiple>

```

### 打开 APP

```html
<a href="weixin://">打开微信</a>
<a href="alipays://">打开支付宝</a>
<a href="alipays://platformapi/startapp?saId=10000007">打开支付宝的扫一扫功能</a>
<a href="alipays://platformapi/startapp?appId=60000002">打开支付宝的蚂蚁森林</a>
```

### 忽略自动识别

```html
<!-- 忽略浏览器自动识别数字为电话号码 -->
<meta name="format-detection" content="telephone=no">

<!-- 忽略浏览器自动识别邮箱账号 -->
<meta name="format-detection" content="email=no">


```

### 解决 input 失焦后页面没有回弹

一般出现在 iOS 设备中的微信内部浏览器，

出现的条件为：

1. 页面高度过小
2. 聚焦时，页面需要往上移动的时候

所以一般input在页面上方或者顶部都不会出现无法回弹🤣

解决办法为
- 在聚焦时，获取当前滚动条高度
- 然后失焦时，赋值之前获取的高度：

```vue
<template>
  <input type="text" @focus="focus" @blur="blur">
</template>

<script>
  export default {
    data() {
      return {
        scrollTop: 0
      }
    },
    
    methods: {
      focus() {
        this.scrollTop = document.scrollingElement.scrollTop;
      },
      
      blur() {
        document.scrollingElement.scrollTo(0, this.scrollTop);
      }
    }
  }
</script>


```