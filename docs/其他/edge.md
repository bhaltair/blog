# Edge
## 快捷键

```
# 打开控制台
cmd + option + i
```

## DOM全局变量

在 DOM 元素上面右键，Store as global variables，可以把 DOM 存储为全局变量。

## monitorEvents


## stack trace

## $ 和 $$

## await 

## JSON.stringify 格式化

```js
var a = {a: 1, b: 2, c: {d: 3}}
JSON.stringify(a, null, 2)

```

## console

### console.dir 打印 DOM 对象
### console.table 打印数组

## $_ 获取 console 上次的返回值

## 重新发送 xhr

Network 面板选择 Replay XHR 可以重新发送请求

## 动画监听

DevTools => More tools => Animations 监听动画，查看哪些属性正在被改变

## 调试 hover 样式

- :hover 直接 Element force state
- Mouse inner 事件触发，右键 -> Break on -> subtree modifications 进入断点，然后跳过断点
- Mouse outer 事件触发，同上

## 修改 JS

### 临时修改

- 在 debug 的过程中可以直接修改当前 JS 文件，cmd + s 保存后即可运行

### 本地 override

- 点击 Page 右边的 >>，选择 Overrides，新建一个空文件夹
- 修改原来的 JS，就会永久保存在本地
- 查看 diff：右上角三个点 => more tools => Changes

## edge chromium 开发者文档

![edge.png](https://www.notion.so/Microsoft-Edge-19a24940118e48da903faf0a06bf9355#4dd00c689b2c4f5eb2880efb2c11323c)

- DevTools
  - Console
  - Network
  - Storage
  - Command Menu
  - JavaScript
  - Performance
  - Remote Debugging
  - Security
- Test & Automation
  - Accessibility
  - WebDreiver
  - Puppeteer
  - webhint
  - Performance analysis
- Extensions
  - publish to the microsoft store
- progressive web apps