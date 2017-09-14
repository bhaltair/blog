# 性能优化
```
评测点：首屏速度 白屏时间
从http请求数量
http请求体积
dom操作
domload事件

```



*  在循环中缓存length
*  缓存DOM元素，提高页面性能
*  缓存变量，减少作用域的查找
*  避免不必要的dom操作 使用domfragment
* 减少reflow/repaint
* CSS3 transform 取代传统DOM节点操作  使用GPU硬件加速
*  图片 使用css精灵图/字体图标/base64
*  压缩混淆css/js
*  懒加载  code spliting
* link preload prefetch
* script async defer  script标签再也不要放到页脚了 笑
js的加载不会阻塞页面的渲染和资源的加载。不过defer会按照原本的js的顺序执行，所以如果前后有依赖关系的js可以放心使用。// 但是async的情况下，同样不会阻塞页面加载，但是js一旦下载好就会执行，不会安装原来的顺序。

---



*  异步加载第三方内容
  ```js
    (function(){
      var script,
          scripts = document.getElementByTagName('script')[0];
      function load(url){
        script = document.createElement('script');
        script.async = true;
        script.src = url;
        scripts.parentNode.insertBefore(script, scripts);
      }

      load('//apis.plugin.js')
      load('//apis.plugin.js')
      load('//apis.plugin.js')
    })()

  ```