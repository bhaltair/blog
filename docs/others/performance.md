# 性能优化
> 性能优化 首屏速度

## 代码级别
1. 再循环中缓存length
2. 缓存DOM元素，提高页面性能
3. 缓存变量，减少作用域的查找

## http
> 从http请求数 http请求体积着手

1. 图片 使用css精灵图/字体图标/base64
2. 压缩混淆css/js
3. 懒加载 



## dom
1. 减少reflow/repaint
2. CSS3 transform 取代传统DOM节点操作  使用GPU硬件加速


## 存储
  * cdn缓存
  * localstorage
