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

## 说一下 Vue 的生命周期函数

Vue 的生命周期，就是 Vue 实例从创建到销毁的过程。

开发者提供给我们的钩子函数，方便在特定阶段添加相关业务代码。

* beforeCreate
	- 实例还没有创建
	- 在 initState 之前调用
	- initState 的作用是对 props、methods、data、computed、watch等属性做初始化处理
	- 当前阶段不能访问 data、methods、computed、watch等
* created
	- 实例创建完成
	- 可以使用数据，更改数据不会触发 update 函数
	- 无法和 DOM 交互，但是可以通过 vm.$nextTick 来访问 DOM
* beforeMount
	- 执行 vm._render() 函数渲染 VNode 之前，执行 `beforeMount`
	- 虚拟 Dom 已经创建完成，即将开始渲染
	- 发生在实例挂载之前
	- 修改数据不会触发 updated
* mounted
	- 执行完 vm._update() 把 Vnode patch 到真实 Dom 后，执行 mounted 钩子
	- 挂载完成后，可以通过 `$refs`访问 DOM
	- 数据完成双向绑定
	- 可以在此阶段向服务端请求数据，渲染数据
* beforeUpdate
	- 发生在更新之前，即虚拟 Dom 重新渲染之前被触发
	- 可以在此阶段进行修改数据，不会造成重渲染
* updated
	- `callUpdatedHooks` 函数，`vm._watch` 是专门用来监听 `vm` 上数据变化进行重新渲染的，是一个渲染相关的 watcher，只有 `vm._watch` 执行完毕后，才会执行 `updated` 钩子函数
	- DOM 更新完成之后
	- 避免在此期间更改数据，造成无限循环更新
* beforeDestroy
	- 实例销毁之前
	- 可以在这个阶段清除定时器
* destroyed
	- 实例销毁之后
	- 数据绑定被移除
	- 监听被移除
- 只有 beforeCreate 和 created 钩子才可以在服务端渲染期间调用


```js
// src/core/instance/init
export function initMixin (Vue: Class<Component>) {
  Vue.prototype._init = function (options?: Object) {
    const vm: Component = this
    ...
    // 合并选项部分已省略
    
    initLifecycle(vm)  
    // 主要就是给vm对象添加了 $parent、$root、$children 属性，以及一些其它的生命周期相关的标识
    initEvents(vm) // 初始化事件相关的属性
    initRender(vm)  // vm 添加了一些虚拟 dom、slot 等相关的属性和方法
    callHook(vm, 'beforeCreate')  // 调用 beforeCreate 钩子
    //下面 initInjections(vm) 和 initProvide(vm) 两个配套使用，用于将父组件 _provided 中定义的值，通过 inject 注入到子组件，且这些属性不会被观察
    initInjections(vm) 
    initState(vm)   // props、methods、data、watch、computed等数据初始化
    initProvide(vm) 
    callHook(vm, 'created')  // 调用 created 钩子
  }
}

// src/core/instance/state
export function initState (vm: Component) {
  vm._watchers = []
  const opts = vm.$options
  if (opts.props) initProps(vm, opts.props)
  if (opts.methods) initMethods(vm, opts.methods)
  if (opts.data) {
    initData(vm)
  } else {
    observe(vm._data = {}, true /* asRootData */)
  }
  if (opts.computed) initComputed(vm, opts.computed)
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch)
  }
}

// mountComponent 核心就是先实例化一个渲染Watcher
// 在它的回调函数中会调用 updateComponent 方法
// 两个核心方法 vm._render(生成虚拟Dom) 和 vm._update(映射到真实Dom)
// src/core/instance/lifecycle
export function mountComponent (
  vm: Component,
  el: ?Element,
  hydrating?: boolean
): Component {
  vm.$el = el
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode
    ...
  }
  callHook(vm, 'beforeMount')  // 调用 beforeMount 钩子

  let updateComponent
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    updateComponent = () => {
    // 将虚拟 Dom 映射到真实 Dom 的函数。
    // vm._update 之前会先调用 vm._render() 函数渲染 VNode
      ...
      const vnode = vm._render()
      ...
      vm._update(vnode, hydrating)
    }
  } else {
    updateComponent = () => {
      vm._update(vm._render(), hydrating)
    }
  }

  // src/core/instance/lifecycle
  new Watcher(vm, updateComponent, noop, {
    before () {
     // 先判断是否 mouted 完成 并且没有被 destroyed
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate')
      }
    }
  }, true /* isRenderWatcher */)

  if (vm.$vnode == null) {
    vm._isMounted = true
    callHook(vm, 'mounted')  //调用 mounted 钩子
  }
  return vm
}

 // src/core/observer/scheduler 
 function callUpdatedHooks (queue) {
   let i = queue.length
   while (i--) {
     const watcher = queue[i]
     const vm = watcher.vm
     if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
       // 只有满足当前 watcher 为 vm._watcher（也就是当前的渲染watcher）
       // 以及组件已经 mounted 并且没有被 destroyed 才会执行 updated 钩子函数。
       callHook(vm, 'updated')  // 调用 updated 钩子
       }
     }
	 }

// src/instance/observer/watcher.js
export default class Watcher {
  ...
  constructor (
    vm: Component,
    expOrFn: string | Function,
    cb: Function,
    options?: ?Object,
    // 在它的构造函数里会判断 isRenderWatcher，
    // 接着把当前 watcher 的实例赋值给 vm._watcher
    isRenderWatcher?: boolean
  ) {
    // 还把当前 wathcer 实例 push 到 vm._watchers 中，
    // vm._watcher 是专门用来监听 vm 上数据变化然后重新渲染的，
    // 所以它是一个渲染相关的 watcher，因此在 callUpdatedHooks 函数中，
    // 只有 vm._watcher 的回调执行完毕后，才会执行 updated 钩子函数
    this.vm = vm
    if (isRenderWatcher) {
      vm._watcher = this
    }
    vm._watchers.push(this)
    ...
}
	 

  // src/core/instance/lifecycle.js
  // 在 $destroy 的执行过程中，它会执行 vm.__patch__(vm._vnode, null)
  // 触发它子组件的销毁钩子函数，这样一层层的递归调用，
  // 所以 destroy 钩子函数执行顺序是先子后父，和 mounted 过程一样。
  Vue.prototype.$destroy = function () {
    const vm: Component = this
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy')  // 调用 beforeDestroy 钩子
    vm._isBeingDestroyed = true
    // 一些销毁工作
    const parent = vm.$parent
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm)
    }
    // 拆卸 watchers
    if (vm._watcher) {
      vm._watcher.teardown()
    }
    let i = vm._watchers.length
    while (i--) {
      vm._watchers[i].teardown()
    }
    ...
    vm._isDestroyed = true
    // 调用当前 rendered tree 上的 destroy 钩子
    // 发现子组件，会先去销毁子组件
    vm.__patch__(vm._vnode, null)
    callHook(vm, 'destroyed')  // 调用 destroyed 钩子
    // 关闭所有实例侦听器。
    vm.$off()
    // 删除 __vue__ 引用
    if (vm.$el) {
      vm.$el.__vue__ = null
    }
    // 释放循环引用
    if (vm.$vnode) {
      vm.$vnode.parent = null
    }
  }
}

```

![a.png](https://user-gold-cdn.xitu.io/2019/7/2/16bb2946c711b0b6?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

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

**Vue Compostion API**

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

### 组件传值

- 父子
	- 父 -> 子 props 传值
	- 子 -> 父 $emit $on
	- 获取父子组件实例 $parent 和 $chirdren
- 跨组件
	- vuex 传值
	- eventbus 传值
	- provide 和 inject 传值

**provide 和 inject 传值**
React 中有一个上下文 Context，组件可以通过 Context 向任意后代传值，Vue 的 provide 和 inject 的作用类似

官网建议在开发高阶插件/组件库时使用，不推荐应用于普通应用程序中。

### 监听生命周期函数 hook Event

不但但可以通过钩子函数监听

```js
export default {
  mounted() {
    this.chart = echarts.init(this.$el)
    // 请求数据，赋值数据 等等一系列操作...
    
    // 监听窗口发生变化，resize组件
    window.addEventListener('resize', this.$_handleResizeChart)
    // 通过hook监听组件销毁钩子函数，并取消监听事件
    this.$once('hook:beforeDestroy', () => {
      window.removeEventListener('resize', this.$_handleResizeChart)
    })
  },
  updated() {},
  created() {},
  methods: {
    $_handleResizeChart() {
      // this.chart.resize()
    }
  }
}

```

### Vue.extend 将组件转换为全局组件

设计一个 `Loading` 组件，满足可以通过 JS 调用方法来关闭，而且遮罩覆盖全屏，同时只可以有一个 Loading 实例

```js
// loading/index.js
import Vue from 'vue'
import LoadingComponent from './loading.vue'

// 通过Vue.extend将组件包装成一个子类
const LoadingConstructor = Vue.extend(LoadingComponent)

let loading = undefined

LoadingConstructor.prototype.close = function() {
  // 如果loading 有引用，则去掉引用
  if (loading) {
    loading = undefined
  }
  // 先将组件隐藏
  this.visible = false
  // 延迟300毫秒，等待loading关闭动画执行完之后销毁组件
  setTimeout(() => {
    // 移除挂载的dom元素
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
    // 调用组件的$destroy方法进行组件销毁
    this.$destroy()
  }, 300)
}

const Loading = (options = {}) => {
  // 如果组件已渲染，则返回即可
  if (loading) {
    return loading
  }
  // 要挂载的元素
  const parent = document.body
  // 组件属性
  const opts = {
    text: '',
    ...options
  }
  // 通过构造函数初始化组件 相当于 new Vue()
  const instance = new LoadingConstructor({
    el: document.createElement('div'),
    data: opts
  })
  // 将loading元素挂在到parent上面
  parent.appendChild(instance.$el)
  // 显示loading
  Vue.nextTick(() => {
    instance.visible = true
  })
  // 将组件实例赋值给loading
  loading = instance
  return instance
}

export default Loading

```

还可以将组件挂载到 `Vue.prototype` 上面

通过 `this.$loading` 这样调用

### 用 `Vue.observable` 手写一个状态管理 

如果不打算开发大型应用，没必要使用 Vuex。

Vue 2.6 提供的 Vue.observable 手动打造一个 Vuex

```js
import Vue from 'vue'

// 通过Vue.observable创建一个可响应的对象
export const store = Vue.observable({
  userInfo: {},
  roleIds: []
})

// 定义 mutations, 修改属性
export const mutations = {
  setUserInfo(userInfo) {
    store.userInfo = userInfo
  },
  setRoleIds(roleIds) {
    store.roleIds = roleIds
  }
}

// a.vue
<template>
  <div>
    {{ userInfo.name }}
  </div>
</template>
<script>
import { store, mutations } from '../store'
export default {
  computed: {
    userInfo() {
      return store.userInfo
    }
  },
  created() {
    mutations.setUserInfo({
      name: '子君'
    })
  }
}
</script>


```


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

### 接口请求一般放在哪个生命周期中？

请求一般放在 mounted 中，但是服务端渲染的项目不能这样做，需要放到 created 中

### 说一下 Computed 和 Watch

Computed，本质上是一个具备缓存的 watch，当模板表达式过于复杂时，可以将复杂的逻辑放入计算属性中

Watch，没有缓存，可以监听某些数据的变动执行回调。

### 说一下 v-model 的原理
TODO:
v-model 本质上是一个语法糖，可以看出是 value + input 方法的语法糖

### Vue 模板编译原理知道吗？
TODO:
将 template 转换为 `render` 函数的过程。会经历这样的阶段：

1. 解析模板，生成 AST 树，使用大量的正则表达式对模板进行解析
2. 优化，并不是所有的数据都是响应式的。深度遍历 AST 树，标记某校静态节点，就可以跳过比对，起到优化作用。
3. 转换为可执行的代码

### 2.x 3.x 渲染器的 diff 算法说一下？

2.x
- 同级比较，再比较两个子节点
- 先判断一方有子节点另一方没有子节点的情况
- 比较都有子节点的情况（核心 diff）
- 递归比较子节点

核心 Diff 采用了 `双端比较` 的算法，同时从新旧 chirdren 的两端进行比较，借助 key 找到可复用的节点，再进行相关操作。

相比 React 的 Diff 算法，同样情况下可以减少移动节点次数，减少不必要的性能损耗。

**3.x**

借鉴了 ivi算法和 inferno算法

创建 VNode 时确定类型，在 `mount/patch` 的过程中采用位运算来判断一个 VNode 的类型。

在此基础上，配合核心 Diff 算法，性能较 2.x 有了提示。

### 说一下虚拟 Dom 以及 key 属性的作用

浏览器中操作 Dom 是很昂贵的，频繁操作 Dom，会产生一定的性能问题，所以有了虚拟 Dom。

虚拟 Dom 本质用一个 JS 对象描述一个 Dom 节点，是对真实 Dom 的一层抽象。也就是源码中的 VNode 类

虚拟 Dom 映射到真实 Dom 要经历 VNode 的 create、diff、patch 等节点。

> key 的作用是尽可能的复用 Dom 元素

新旧 children 的节点当只有顺序不同的时候，最合适的操作是移动元素的位置来达到更新的目的。

key 是 children 中节点的唯一标识。

### keep-alive 了解吗？

可以实现组件缓存，当组件切换时不会对当前组件进行卸载。

- include/exclude，允许有条件的进行缓存
- activated/deactivated，2个生命周期，当前组件是否处于活跃状态

实现运用到了 LRU 算法

### 性能优化 - 函数式组件

函数式组件没有生命周期、无状态、不需要实例化，渲染性能要好于类组件。

适合纯展示组件。

- 函数式组件的 props 不用显式的声明。而普通组件未声明的 props 会被放到 $attrs 里面（可以通过 inheritAttrs 属性禁止）

```js
export default {
  // 通过配置functional属性指定组件为函数式组件
  functional: true,
  // 组件接收的外部属性
  props: {
    avatar: {
      type: String
    }
  },
  /**
   * 渲染函数
   * @param {*} h
   * @param {*} context 函数式组件没有this, props, slots等都在context上面挂着
   */
  render(h, context) {
    const { props } = context
    if (props.avatar) {
      return <img src={props.avatar}></img>
    }
    return <img src="default-avatar.png"></img>
  }
}

```

### Vue 中组件生命周期调用顺序说一下

渲染
父 beforeCreate created beforeMount -> 子 beforeCreate crated beforeMount moutned -> 父 mounted

子组件更新
父 beforeUpdate -> 子 beforeUpdate updated -> 父 updated

父组件更新
父 beforeUpdate -> updated

销毁
父 beforeDestroy -> 子 beforeDestroy destroyed -> 父 destroyed

### 组件的 data 为什么是一个函数？

一个组件会被复用多次，会创建多个实例。这些实例用的都是同一个构造函数(所有实例都将共享同一个对象)。

如果 data 是对象，属于引用类型，会影响到所有的实例。

所以 data 必须是一个函数。

每个实例可以维护一份被返回对象的独立的拷贝。

```js
function initData(vm){

  let data = vm.$options.data

  data = vm._data = typeof data === ‘function’ ? getData(data, vm) : data || {}
   /*

     Because here，data is a reference from vm.$options.data， 
     if data is an object, 
     when there are many instances of this Component,
     they all use the same `data`


      if data is a function, Vue will use method getData( a wrapper to executing data function, adds some error handling)

      and return a new object, this object just belongs to current vm you are initializing

    */

   ……


  // observing data
  observe(data, true)

}

```

### SSR了解吗？

把 Vue 在浏览器做的工作放到服务端完成，将标签渲染成 HTML，然后把 HTML 返回给浏览器。

更好的 SEO，更好的首屏加载速度。

缺点：
- 只支持 beforeCreate 和 crated 钩子
- 需要关心运维

### 聊聊做过哪些 Vue 项目的性能优化？

- 编码阶段
	- 减少 data 中的数据，因为会增加 getter 和 setter，会收集对应的 watcher
	- key 保证唯一
	- 长列表懒加载
	- 图片懒加载
- SEO 优化
	- 预渲染
	- 服务端渲染
- 打包优化
	- externals
	- tree shaking
	- splitChunks 抽离公共文件
	- 压缩代码
- 缓存
	- PWA
	- 静态文件部署到 CDN 上

### hash 路由 和 history 路由实现原理

location.hash 就是 URL 中 # 的东西。

history 路由使用到了 HTML5 的 History API

- history.pushState()
- history.repleaceState()

需要后台配置支持，如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面(后端对这个虚拟的前端路由没有做任何处理，服务器找不到任何资源，只能返回 404)

```js
location / {
  try_files $uri $uri/ /index.html;
}
```

### lyh Vue 工程

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