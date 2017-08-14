## 节点
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
1. 元素大小
2. 


### 厂商扩展
3. scrollIntoView 滚动
4. childer属性
5. contains方法
6. 插入文本 innerText


## 一些API
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



?> *TODO* 完善示例

