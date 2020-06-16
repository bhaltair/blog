## Vue

访问子组件
```js
<user-profile ref="profile"></user-profile>
var parent = new Vue({ el: '#parent' })
// 访问子组件
var child = parent.$refs.profile

```

## 2.x 源码

### _init

### compile

### 响应式

### Virtual DOM

### 依赖收集

### VNode

### nextTick 原理

### 代理 this.data

### key 的使用

## 静态资源处理
如果你的静态资源文件需要 Webpack 做构建编译处理，可以放到 assets 目录，否则可以放到 static 目录中去。
一些图片类的资源放在static文件夹下，这样会按照原本的结构放在网站根目录下。
```
<!-- 引用 static 目录下的图片 -->  必须用绝对路径去引用  真正的静态资源
<img src="/my-image.png"/>
 
<!-- 引用 assets 目录下经过 webpack 构建处理后的图片 -->
<img src="/assets/my-image-2.png"/>
```


## Vue UI
* ivew
* mint-ui
* elemen-ui
* 有赞UI
* vux

## webpack proxy
```js
 config.jsmodule.exports = {
  // ...
  dev: {
    proxyTable: {
      // 将所有以 /api 开头的请求通过 jsonplaceholder 代理
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}


```



## Vue 单元测试
- Karma: 启动浏览器来跑测试，运行测试用例并将结果报告给我们。
- karma-webpack: 使用webpack来跑Karma测试的插件
- Mocha: 我们编写测试规范的测试框架。
- Chai: 提供更好的断言语法的测试断言库。
- Sinon: 测试工具库，提供了spies, stubs 和 mocks。


## lyh Vue 工程

* 样式 
	- reset 引入  
	- link标签引入 minireset.css 多一个http请求
	- style标签引入
* 微信JSSDK引入
script标签引入 如果放到头部，是否可以async?  
* 全局公用函数  
```
在main.js中    
Vue.prototype.method = function () {}  
在代码里这样写  
`this.method()`
```
* eslint
提交前eslint
* 提交前pretty

保证代码缩进统一

* CI集成

必要的单元测试

* jsbridge

```js
// 调用原生方法
function nativefun(funname, param, callback) {
	if(!param) {
		param = {};
	}
	if(!callback) {
		callback = function() {};
	}
	if(s != 'wx') {
		window.WebViewJavascriptBridge.callHandler(funname, param, callback);
	}
}
// 注册js方法 给native调用
function registerfun(funname, dealfun) {
	if(s == 'app') {
		WebViewJavascriptBridge.registerHandler(funname, dealfun);
	}
}
// 初始化
function setupWebViewJavascriptBridge(callback) {
  // ios
	if(browser.versions.iPhone || browser.versions.iPad || browser.versions.ios) {
		if(window.WebViewJavascriptBridge) {
			return callback(WebViewJavascriptBridge);
		}
		if(window.WVJBCallbacks) {
			return window.WVJBCallbacks.push(callback);
		}
		window.WVJBCallbacks = [callback];
		var WVJBIframe = document.createElement('iframe');
		WVJBIframe.style.display = 'none';
		WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
		document.documentElement.appendChild(WVJBIframe);
		setTimeout(function() {
			document.documentElement.removeChild(WVJBIframe)
		}, 0)
	}

  // android
	if(browser.versions.android) {
		document.addEventListener('WebViewJavascriptBridgeReady', function() {
			callback(WebViewJavascriptBridge)
		}, false)
	}
}
```

* 通用utils

```

1. 过滤Html标签的
2. 处理时间戳的 moment.js
3. 判断pc/mobile
4. 判断android/ios/weixin
5. 生成guid方法
6. jsbridge方法
7. wxshare方法

```

