# 性能优化
```
评测点：首屏速度 白屏时间
从http请求数量
http请求体积
dom操作层面
domload事件

```

DOM层面 
*  缓存DOM元素，提高页面性能
*  CSS3 transform 取代传统DOM节点操作  使用GPU硬件加速
*  减少reflow/repaint
*  避免不必要的dom操作 使用domfragment



http请求层面
*  link preload prefetch
*  script async defer  script标签再也不要放到页脚了 笑
*  懒加载  code spliting / 图片懒加载
*  压缩混淆css/js -> 减小http体积
*  图片 使用css精灵图/字体图标/base64
*  缓存  pwa / http cache


代码层面
*  在循环中缓存length -> 代码优化
*  缓存变量，减少作用域的查找


---



## 异步加载第三方内容
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

## preload


## async & defer 
js的加载不会阻塞页面的渲染和资源的加载。不过defer会按照原本的js的顺序执行，所以如果前后有依赖关系的js可以放心使用。// 但是async的情况下，同样不会阻塞页面加载，但是js一旦下载好就会执行，不会安装原来的顺序。
