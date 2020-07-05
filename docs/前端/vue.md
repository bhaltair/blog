# Vue

[Vue 纪录片](https://mp.weixin.qq.com/s/kAjdvDfeBW5xJT4DfE0bjA)

## 讲一下 MVVM？

即 M - V - VM，Model - View - ViewModel 缩写，将 `MVC` 中的 Controller 演变成了 ViewModel。

- Model 数据模型
- View 代表 UI 组件
- ViewModel 是 View 和 Model 的桥梁
	- 数据会自动绑定到 ViewModel 层，并自动将数据渲染到页面中
	- 视图更新的时候会通知 ViewModel 层更新数据

## 2.x 响应式数据原理（依赖收集的原理）

TODO:

Vue 在初始化数据时，会使用 Object.defineProperty （getter、setter）重新定义 data 中的所有属性，

当页面使用对应属性时，首先会进行依赖收集，收集当前组件的 `watcher`

如果属性发生变化会通知相关依赖进行更新操作 `发布订阅`

- 数据变动，如何通知 UI 更新？
- UI 更新，通知 `Model` 更新？

**那么如何检测数组变化？**

TODO:

Object.defineProperty 无法检测到数组的变化？

使用了函数劫持的方式，重写了数组的方法，Vue 将 data 中的数组进行了原型链重写，指向了自己定义的数组原型方法。

如果数组中包含着引用类型，会对数组中的引用类型再次递归遍历进行监控。

## 3.x 响应式数据原理？

改用 `Proxy` 替代 Object.defineProperty。因为 Proxy 可以直接监听数组和对象的变化

> Avalon 就是用的这个吧

1. Proxy 只会代理对象的第一层，那么 Vue3 是如何处理这个问题的呢？

判断当前 Reflect.get 的返回值是否为 Obejct,如果是再通过 reactive 方法做代理，这样就实现了深度观测。

2. 监听数组的时候可能触发多次 get/set，怎么防止触发多次呢？
- 判断 key 是否为当前被代理对象 target 自身属性
- 判断旧值与新值是否相等
- 满足两个条件之一时，才可以 trigger

## nextTick 原理知道吗？

TODO:

先要了解一下浏览器的事件循环，宏任务、微任务这些。

根据执行环境，分别尝试采用

- Promise
- MutationObserver
- setImmediate
- 如果以上都不行采用 setTimeout

在下次 DOM 更新循环结束之后执行延迟回调。nextTick 主要使用了宏任务和微任务。

定义了一个异步方法，多次调用 nextTick 会将方法存入队列中，通过这个异步方法清空当前队列。

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


## Webpack Proxy
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



## Vue 组件测试

- Karma: 启动浏览器来跑测试，运行测试用例并将结果报告给我们。
- karma-webpack: 使用webpack来跑Karma测试的插件
- Mocha: 我们编写测试规范的测试框架。
- Chai: 提供更好的断言语法的测试断言库。
- Sinon: 测试工具库，提供了spies, stubs 和 mocks。



## 3.0 beta

- 2.x 的问题
	- 数据和逻辑都被分散到了各个 `option`中，复用差
	- ts 支持差
- 新引入
	- Function-based
- 亮点
	- performance
	- tree-shaking support
	- 组合 API composition api
		 与 react hooks 类似的东西
	- fragment、teleport、suspense
	- 更好的 TS 支持
		- class 组件继续支持
	- 自定义渲染 API
- 周边
	- router
		- vue-router-next
	- vuex
		- 没有 API 变动，兼容 Vue 3 为主
	- cli
		- vue-cli-plugin-vue-next 插件
	- vue-test-utils
		- vue-test-utils-next
	- vite
		- http 服务器
		- 不需要 webpack 编译打包
		- 直接渲染 vue 文件
	- nuxt
- 阶段
	- 1 rfc 征集用户反馈
	- 2 alpha 阶段
	- 3 beta 阶段 目前
	- 4 rc 阶段
		- 各项 API 已经稳定
	- 5 兼容 IE 11
	- 6 发布

### Vue Compostion API

- Options API 和 Composition API 孰优孰劣
- API 
	- reactive()
		- return 的时候必须把整个 reactive() 对象返回出去，同时在引用的时候也必须对整个对象进行引用而无法解构，否则这个对象内容的响应式能力将会丢失
		- 使用 toRefs() 把 reactive() 对象包装一下，就能够通过解构单独使用它里面的内容
	- ref()
	- computed()

```vue
<template>
  <button @click="increment">
    Count is: {{ state.count }}, double is: {{ state.double }}
  </button>
</template>

<script>
import { reactive, computed } from 'vue'

export default {
	// 注意这个setup
	// function based 是趋势
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    })

    function increment() {
      state.count++
    }

		// 返回state和method
    return {
      state,
      increment
    }
  }
}
</script>
```



## 实践

### 访问子组件
```js
<user-profile ref="profile"></user-profile>
var parent = new Vue({ el: '#parent' })
// 访问子组件
var child = parent.$refs.profile

```

### 关注点分离

![a.png](https://app.yinxiang.com/FileSharing.action?hash=1/5386deebbc6b706704a3f77416903319-41910)

### 检测变化的注意事项

- Vue 无法检测到对象属性的添加或删除
	- 受现代 JavaScript 的限制 (而且 Object.observe 也已经被废弃)，
- 属性必须在 data 对象上存在才能让 Vue 将它转换为响应式的

```js
Object.assign(this.someObject, { a: 1, b: 2 })

// 使用
this.someObject = Object.assign({}, this.someObject, { a: 1, b: 2 })

```

### eslint-plugin-vue

- 检查 template 和 script 
- 发现语法错误
- 错误的使用 Vue 质量

### Vuex 结合使用 V-model

```html
<input v-model="message">

computed: {
  message: {
    get () {
      return this.$store.state.obj.message
    },
    set (value) {
      this.$store.commit('updateMessage', value)
    }
  }
}
```

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

## 参考

1. 逐行剖析
https://nlrx-wjc.github.io/Learn-Vue-Source-Code/

2. Vue.js技术揭秘
https://ustbhuangyi.github.io/vue-analysis/

3. Vue技术内幕
http://caibaojian.com/vue-design/art/