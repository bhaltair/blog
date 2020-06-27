---
title: React
group:
  order: 1
---
## React
> React 进行开发时所有的 DOM 构造都是通过虚拟 DOM 进行，每当数据变化时，React 都会重新构建整个 DOM 树，然后 React 将当前整个 DOM 树和上一次的 DOM 树进行对比，得到 DOM 结构的区别，然后仅仅将需要变化的部分进行实际的浏览器 DOM 更新

### 版本

- v16.13.0
- v16.9.0
- v16.8
  - hook 发布

### 生命周期

当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：

* constructor() 构造函数
* getDerivedStateFromProps()
* render()
* componentDidMount()

### 组件

- 可以是类组件（class component）或者函数式组件（functional component）
  - 类组件
    - 普通类组件
      - React.Component
    - 纯类组件
       - React.PureComponent
- 可以是无状态组件 stateless component
- 可以是有状态组件
  - 除了使用外部数据（通过 this.props 访问）以外，组件还可以维护其内部的状态数据（通过 this.state 访问）。
  - 当组件的状态数据改变时，组件会再次调用 render() 方法重新渲染对应的标记。

### constructor

在 React 中，构造函数仅用于以下两种情况

- 用于 class 组件中
- 通过给 this.state 赋值对象来初始化内部 state。
- 为事件处理函数绑定实例

```js
constructor(props) {
  super(props);
  // 不要在这里调用 this.setState()
  this.state = { counter: 0 };
  this.handleClick = this.handleClick.bind(this);
}

```

### setState 时机

### 核心流程

### 性能优化

### Hooks

!> 一个不用编写 class 就能使用 state 和其他 React 特性的方法

- Hooks 的出现使函数式组件焕然一新
  - 给与函数式组件类似于 class 组件生命周期的概念
  - 扩大了函数式组件的应用范围
- 之前，函数式组件基本只用于纯展示组件
  - 一旦耦合有义务逻辑，就需要通过 Props 的传递，通过子组件触发父组件方法的方式来实现业务逻辑的传递
  - Hooks 的出现使得函数式组件也有了自己的状态与义务逻辑，简单逻辑在自己内部处理即可，不再需要通过 props 的传递，也使使用者无需关系组件内部的逻辑，只关心 Hooks 组件返回的结果即可。
- Hooks 允许你在不使用 class 的情况下使用 state 和 React 其他特性
- 目标
  - 不是取代类组件
  - 而是增加函数式组件的使用率
  - 明确通用工具函数和业务工具函数的边界
    - 鼓励开发者将业务通用逻辑封装成 Hooks 而不是工具函数
- 帮助你用一种更简单的方式来编写你的组件
- 为什么要用 Hooks ?
  - 组件嵌套问题  
    - 以前抽离逻辑，会选择 HOC 或者 render props 的方式
    - 缺点是打开 React DevTools 发现组件被各种其他组件包裹在里面。
      - 提高了 debug 的难度
      - 很难实现共享状态
  - class 组件的问题
    - 编译出来的代码相比函数组件多得多
    - 四散的代码不容易维护
- hooks library
  * react-use https://www.npmjs.com/package/react-use
- 使用 Hook 需要遵循的两条规则
  - 只在最顶层使用Hook
    - 不要在循环，条件，嵌套函数中调用Hook
  - 只在 React 函数中调用 Hook

#### Hooks library

- umi-hooks
- [react-use](https://github.com/streamich/react-use#readme)
  - sensors
    - useBattery
    - ...
  - ui
    - useCss
    - useSlider
  - animations
    - useSpring
  - side-effects
    - useAsync
    - useDebounce
  - lifecycles
    - usePromise
    - useMount
  - state
    - useToggle
    - useMap
    - useQueue
  - miscellaneous
  - API 太多了
- [阿里巴巴 ahooks](https://ahooks.js.org/zh-CN)
  - Async
    - useRequest
  - Table
  - UI
    - useDrag & useDrop
    - useDynamicList
    - useVirtualList
  - SideEffect
    - useDebounce
    - useDebounceFn
  - LifeCycle
    - useMount
    - useUnmount
  - State
    - useBoolean
    - useToggle
  - Dom
    - useScroll
    - useEventListener
  - Advanced
- use-swr
    - from next
    - 特性
        1. 间隔轮询
        2. 请求重复数据删除
        3. 对于同一个 key 的数据进行缓存
        4. 对数据进行乐观更新
        5. 在标签页聚焦的时候重新发起请求
        6. 分页支持
        7. 完备的 TypeScript 支持

### 组件逻辑复用的发展历程

mixin -> HOC & render-props -> Hook

### 渲染属性 render props

```js
<DataProvider>
  {data => (
    <Cat target={data.target} />
  )}
</DataProvider>
```

### HOC 高阶组件

- 是一种开发模式
  - HOC并不是React的API，他是根据React的特性形成的一种开发模式。
  - 可以提高 React 开发组件复用性
- 是一个函数
    - 接受一个组件作为参数
    - 返回一个组件
- 我们习惯使用 `with` 开头代表 `HOC`

### VNode

### key 的作用

### super(props)

## Redux

### 解决的问题

### combineReducers

### bindActionCreators

### applyMiddleware

### createStore


### connect

### dispatch

### React-Redux

- 原则
  - 单一 store
- Store
  - createStore
- combineReducers(reducers)
  - 将 reducer 函数拆分成多个单独的函数
- connect()
  - mapStateToProps
  - mapDispatchToProps
- Provider
- 支持 Hooks，不用 Connect()

### 异步中间件

- 没有使用中间件，只能是同步的修改 `store` 的状态
- 使用了 react-promise、react-thunk 之后，可以dispatch 一个 funciton 或者 promise，返回一个plain object，而不是之前之前 `dispatch` 一个 `plain object`。
- redux中的数据流大致是： UI—————>action（plain）—————>reducer——————>state——————>UI
- redux增加中间件处理副作用后的数据流大致如下：UI——>action(side function)—> middleware —> action(plain) —> reducer —> state —> UI


通用解决方案：

* redux-thunk
  - redux-thunk 是支持函数形式的 action
* redux-promise
  - 支持 promise 形式的 action
- thunk 和 promise 都有的问题是，他们改变了 action 的含义，使得 action 变得不那么纯粹了
* redux-saga
  - 可以把所有的业务逻辑都放到 saga 里，这样可以让 reducer, action 和 component 都很纯粹

### Redux-thunk

- action 可以是函数，可以异步操作，可以在函数内部dispatch action
- 没用 redux-thunk 之前，我们在 componentDidMount 这个生命周期里请求数据，然后派发 action
  - 考虑到后期代码量的增加，如果把异步函数放在组件的生命周期里，这个生命周期函数会变得越来越复杂，组件就会变得越来越大
- 原则上 action 返回的是一个对象，但当我们使用 redux-thunk 中间件后, action 就可以返回一个函数了，继而可以在函数里边进行异步操作
- redux 的中间件原理很简单，就是对 store 的 dispatch 方法做一个升级，既可以接收对象，又可以接收函数了


### Redux-saga

- redux-saga 是一个旨在使应用程序副作用更易于管理，更有效地执行，易于测试
- takeLatest/takeEvery/throttle
  - 便利的实现对事件的仅关注最近事件、关注每一次、事件限频
- cancel/delay方法
  - 可以便利的取消、延迟异步请求
- race(effects),[…effects]
  - 支持竞态和并行场景
- channel机制
  - 支持外部事件


#### side effects 副作用

#### middleware api

#### effect creatrors

```js
export const effectTypes: {
  TAKE: 'TAKE'
  PUT: 'PUT'
  ALL: 'ALL‘
  RACE: 'RACE'
  CALL: 'CALL'
  CPS: 'CPS'
  FORK: 'FORK'
  JOIN: 'JOIN'
  CANCEL: 'CANCEL'
  SELECT: 'SELECT'
  ACTION_CHANNEL: 'ACTION_CHANNEL'
  CANCELLED: 'CANCELLED'
  FLUSH: 'FLUSH'
  GET_CONTEXT: 'GET_CONTEXT'
  SET_CONTEXT: 'SET_CONTEXT'
}
```

##### call

- yield 后面不能直接API.fetch
  - 在 Generator 函数中，yield 右边的任何表达式都会被求值，结果会被 yield 给调用者
- call 只是一个返回纯文本对象描述函数的调用而已
- 我们需要的只是保证 fetchProducts 任务 yield 一个调用正确的函数，并且函数有着正确的参数
  - 相比于在 Generator 中直接调用异步函数，我们可以仅仅 yield 一条描述函数调用的信息

```js
import { takeEvery } from 'redux-saga/effects'
import Api from './path/to/api'

function* watchFetchProducts() {
  yield takeEvery('PRODUCTS_REQUESTED', fetchProducts)
}

function* fetchProducts() {
  const products = yield Api.fetch('/products')
  console.log(products)
}
```

##### put

- 这个函数用于创建 dispatch Effect


##### select
##### take

- take 函数可以理解为监听未来的action

##### takeEvery

- 监听每一次，允许多次同时启动。

##### takeLatest

- 和takeEvery不同，在任意时刻，takeLateest只允许一个特定的任务执行，并且这个任务是最后启动的那次
- 在处理 AJAX 请求的时候，如果我们只希望获取最后那个请求的响应，takeLatest 就会非常有用

**使用低阶 Effects 来实现 takeLatest**

```js
import { cancel, fork, take } from "redux-saga/effects"

const takeLatest = (pattern, saga, ...args) => fork(function*() {
  let lastTask
  while (true) {
    // 监听 pattern
    const action = yield take(pattern)
    if (lastTask) {
      yield cancel(lastTask) // 如果任务已经结束，则 cancel 为空操作
    }
    // 执行 action
    lastTask = yield fork(saga, ...args.concat(action))
  }
})

```

##### fork
##### apply
##### cancel

#### effect combinaators

#### 阻塞与非阻塞

- put 是非阻塞的，阻塞是用 put.resolve()
- fork 非阻塞
- cps 非阻塞
- call 阻塞
- take 阻塞
- join 阻塞

```js
effects: {
  *changeCountDelay({ payload }, { put, call }) {
    // call 阻塞
    yield call(delay, 200);
    yield put({ type: 'dump', payload: { count: payload } });
  },
  *process({ payload }, { put, select }) {
    // put.resolve 阻塞
    yield put.resolve({ type: 'changeCountDelay', payload });
    // 拿出 count
    const count = yield select(state => state.counter.count);
    // 
    yield put({ type: 'dump', payload: { resolveCount: count } });
  },
},
```

### Redux-actions

## immutable

### 引用带来的副作用

```js
// 引用带来的副作用
var a = [{ val: 1 }]
var b = a.map(item => item.val = 2)

// 期望：b 的每一个元素的 val 值变为 2
console.log(a[0].val) // 2
```

解决办法

- 使用 lodash.cloneDeep 深拷贝
  - 新的数据进行有副作用 (side effect) 的操作都不会影响到之前的数据
- 去除引用数据类型副作用的数据的概念我们称作 immutable，意为 `不可变的数据`

but

!> deepClone 的开销太大

在 2014 年，facebook 的 `immutable-js` 横空出世，即保证了数据间的 immutable ，又兼顾了性能

- 内部实现了一套完整的 Persistent Data Structure
- 还有很多易用的数据类型。像 Collection、List、Map、Set、Record、Seq。有非常全面的map、filter、groupBy、reduce``find函数式操作方法
- 太重了
  - 我们仅仅只是为了优化浅对比防止子组件过度刷新

### 控制更新

- shouldComponentUpdate 生命周期
  - 返回 false ，子组件就不会更新了
- 在函数里面写太麻烦？
  - 只提供浅比较
    - PureComponent
    - Memo

### immer.js

作者也是 `mobx` 的作者

?> 与 immutable-js 最大的不同，immer 是使用原生数据结构的 API 而不是内置的 API。

- 轻量
- 原生数据结构
- 轻松上手

```js
const produce = require('immer')

const state = {
  done: false,
  val: 'string',
}

const newState = produce(state, (draft) => {
  draft.done = true
})

console.log(state.done)    // false
console.log(newState.done) // true
```

**用 immer 优化 react 项目**

```js
this.setState(produce(draft => {
  draft.members[0].age++;
}))

// reducer.js
// old
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_AGE':
      const { members } = state;
      return {
        ...state,
        members: [
          {
            ...members[0],
            age: members[0].age + 1,
          },
          ...members.slice(1),
        ]
      }
    default:
      return state
  }
}

// new
const reducer = (state, action) => produce(state, draft => {
  switch (action.type) {
    case 'ADD_AGE':
			// 不需要return 任何东西
      draft.members[0].age++;
  }
})

// 还能优化
const reducer = produce((draft, action) => {
  switch (action.type) {
    case 'ADD_AGE':
      draft.members[0].age++;
  }
}

```

#### use-immer [immer hooks]

> npm install immer use-immer

```js

import React from "react";
import { useImmer } from "use-immer";


export default function () {
  const [person, setPerson] = useImmer({
    name: "马云",
    salary: '对钱没兴趣'
  });

  function setName(name) {
    setPerson(draft => {
      draft.name = name;
    });
  }

  function becomeRicher() {
    setPerson(draft => {
      draft.salary += '$￥';
    });
  }

  return (
    <div className="App">
      <h1>
        {person.name} ({person.salary})
      </h1>
      <input
        onChange={e => {
          setName(e.target.value);
        }}
        value={person.name}
      />
      <br />
      <button onClick={becomeRicher}>变富</button>
    </div>
  );
}
```

useImmerReducer

```js
import React from "react";
import { useImmerReducer } from "use-immer";

const initialState = { salary: 0 };

function reducer(draft, action) {
  switch (action.type) {
    case "reset":
      return initialState;
    case "increment":
      return void draft.salary++;
    case "decrement":
      return void draft.salary--;
  }
}

export default function () {
  const [state, dispatch] = useImmerReducer(reducer, initialState);
  return (
    <>
      期待工资: {state.salary}K
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>重置</button>
    </>
  );
}
```

## cheatsheet

https://devhints.io/react

## Mobx

## Dva

- 
- 简化开发体验
  - 内置了 react-router 和 fetch + redux-saga
- 仅有 6 个 api
- 简化 redux 和 redux-saga 引入的概念
  - 通过 reducers, effects 和 subscriptions 组织 model
  - saga 书写太复杂，每监听一个 action 都需要走 fork -> watcher -> worker 的流程
  - 编辑成本高，需要在 reducer, saga, action 之间来回切换
  - 不便于组织业务模型 (或者叫 domain model) 。
    - 比如我们写了一个 userlist 之后，要写一个 productlist，需要复制很多文件

- dva-immer 以简化 reducer 编写
  - 利用 immer 简化 reducer 生成 immutable state。
  - 如果使用了 dva-immer 其实是可以不用 return 任何值的
  - 如果你还是使用传统的 reducer 那套模式 immer 也是可以兼容的，只不过就相当于没有用上 immer 的特性
- dva-loading 可以自动处理 loading 状态，不用一遍遍地写 showLoading 和 hideLoading
- action
  - 是 reducers 及 effects 的触发器
  - > 一般是一个对象，形如{ type: 'add', payload: todo }
- effects
  - 用于处理异步操作和业务逻辑，由 action 触发。
  - 不可以修改 state
  - 要通过触发 action 调用 reducer 实现堆 state 的间接操作
- reducers 
  - 用于处理同步操作，由 action 触发
  - 是一个纯函数
  - 返回一个新的 state
- connect
  - 作用是将组件和 models 结合在一起

**数据流向**

![liu.png](https://www.notion.so/Dva-d7d7b10f0dae40a289fde391a91a8d1e#d85e2057b57a4ee8a55bfcf6f37dd04d)

## UMI

### 特性

- 面向未来
    - 在满足需求的同时，我们也不会停止对新技术的探索。比如 modern mode、webpack@5、自动化化 external、bundler less 等等。
- 大量自研
    - 包含微前端、组件打包、文档工具、请求库、hooks 库、数据流等，满足日常项目的周边需求。
- 完备路由
    - 同时支持配置式路由和约定式路由，同时保持功能的完备性，比如动态路由、嵌套路由、权限路由等等。
- 可扩展
    - 支持插件和插件集，以满足功能和垂直域的分层需求。
- 企业级
    - 经蚂蚁内部 3000+ 项目以及阿里、优酷、网易、飞猪、口碑等公司项目的验证，值得信赖。

### 为什么不是？

- create-react-app
  - 基于 webpack 的打包层方案
  - 不包含路由
- next.js
  - Umi 很多功能是参考 next.js 做的
    -  加了 antd、dva 的深度整合
    - 国际化、权限、数据流、配置式路由、补丁方案、自动化 external 

### Umi Hooks

- Async
  - useRequest
- LifeCycle
  * useLayoutEffect 初次有渲染，依赖更新会执行
  * useUpdateEffect 忽略初次渲染，依赖更新会执行
- SideEffect
  * useThrottleFn
  * useDebounceFn
- UI
  - useVitualList
- State
  - useBoolean
  - useLocalStorageState

### presets 预设包含很多 plugin

@umijs/preset-react

- [plugin-access](https://umijs.org/zh-CN/plugins/plugin-access)，权限管理
- [plugin-analytics](https://umijs.org/zh-CN/plugins/plugin-analytics)，统计管理
- [plugin-antd](https://umijs.org/zh-CN/plugins/plugin-antd)，整合 antd UI 组件
- [plugin-crossorigin](https://umijs.org/zh-CN/plugins/plugin-crossorigin)，通常用于 JS 出错统计
- [plugin-dva](https://umijs.org/zh-CN/plugins/plugin-dva)，整合 dva
    - **约定式的 model 组织方式**，不用手动注册 model
    - **文件名即 namespace**，model 内如果没有声明 namespace，会以文件名作为 namespace
    - **内置 dva-loading**，直接 connect `loading` 字段使用即可
    - **支持 immer**，通过配置 `immer` 开启
- [plugin-initial-state](https://umijs.org/zh-CN/plugins/plugin-initial-state)，初始化数据管理
- [plugin-layout](https://umijs.org/zh-CN/plugins/plugin-layout)，配置启用 ant-design-pro 的布局
- [plugin-locale](https://umijs.org/zh-CN/plugins/plugin-locale)，国际化能力
- [plugin-model](https://umijs.org/zh-CN/plugins/plugin-model)，基于 hooks 的简易数据流
- [plugin-request](https://umijs.org/zh-CN/plugins/plugin-request)，基于 umi-request 和 umi-hooks 的请求方案

## 原理

### 要不要写 constructor ?

- 如果你需要设置默认的状态就要写
- super() 要不要传 props ?
  - 如果要在constructor 内部使用 this.props 就要 传入props , 否则不用


### 为什么有时候会出现无限重复请求的问题？

没有设置effect依赖参数，然后effect中修改了状态，又引起了重新渲染，再次触发effect

### class 组件 为什么要调用 super？

- 其实这不是 React 的限制，这是 JavaScript 的限制
- 构造函数里如果要调用 this，那么提前就要调用 super
- 在 React 里，我们常常会在构造函数里初始化 state，this.state = xxx ，所以需要调用 super
- 子类 B 的构造函数之中的 super() ，代表调用父类的构造函数。
- 新的提案 
  - class fidlds propsal

```js
class Checkbox extends React.Component {
  constructor(props) {
    // 这里不能使用this
    super(props);
    // 现在这里可以使用this
    this.state = { isOn: true };
  }
  // ...
}

// class fidlds propsal 
// 不用写 constructor
class Checkbox extends React.Component {
  state = { isOn: true };
  // ...
}
```

### 为什么要 setState ?

- 而不是直接 this.state.xx = oo
- setState 做的事情不仅仅只是修改了 this.state 的值，另外最重要的是它会触发 React 的更新机制，会进行 diff ，然后将 patch 部分更新到真实 dom 里。
- 如果你直接 this.state.xx == oo 的话，state 的值确实会改，但是改了不会触发 UI 的更新，那就不是数据驱动了。
- 为什么 Vue 直接修改 data 可以触发 UI 的更新呢？因为 Vue 在创建 UI 的时候会把这些 data 给收集起来，并且在这些 data 的访问器属性 setter 进行了重写，在这个重写的方法里会去触发 UI 的更新



### 为什么 React 现在要推行函数式组件，用 class 不好吗？

- 太真实了。明明是 stateful的，非要装成人畜无害的functional
- Hooks 出来了，好那不管这玩意是啥是不是都要学习一下：
  * 怎么用 useXxx，useYyy
  * 怎么自定义 hooks
  * 怎么用 hooks 发数据，
  * deps array 永远写不对

### 受控组件与非受控组件

- 非受控组件
  - props 没有 value，组件内部自理 state
- 受控组件
  - 父级接管控制 state

### 获取数据在哪个声明周期？

- 在 componentDidMount() 获取数据

### 权限控制

* 登录授权，用户没有登录只能访问登录页面，如果处于登录状态则跳转到当前用户的默认首页；
* 路由授权，当前登录用户的角色，如果对一个 URL 没有权限访问，则跳转到 403 页面；
* 数据授权，当访问一个没有权限的 API，则跳转到 403 页面；
* 操作授权，当页面中某个按钮或者区域没有权限访问则在页面中隐藏

[Ant Desigin Pro权限解决方案](https://pro.ant.design/docs/authority-management-cn)

### next.js 自定义 server

https://nextjs.org/docs/advanced-features/custom-server

- 在这个 server 里面可以做一些事情

```js
// server.js
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')


const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    if (pathname === '/a') {
      app.render(req, res, '/b', query)
    } else if (pathname === '/b') {
      app.render(req, res, '/a', query)
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
```

### Can't perform a React state update on an unmounted component.

请求数据后，切换到别的页面，导致setState报错

- 解法也很简单，组件unmount的时候取消请求，可惜的是fetch也不支持
- fetch请求怎么取消？
- 蚂蚁面试题
  - 页面发了个请求，请求没返回用户就切去另一个页面了，这会有什么影响，怎么处理？fetch请求怎么取消？


### react + redux 最佳实践

- Data -> View
  - reselect 库 好用，推荐！！
- View
  - CSS 方案
    - css-modules
- Action -> Store
  - 简单场景
    - redux-thunk, redux-promise 等: 相对原始的异步方案
    - 在 action 需要组合、取消等操作时，会不好处理
  - 复杂场景
    - redux-saga

```js
import { createSelector } from ‘reselect’

const selectNumOfDoneTodos = createSelector( state => state.todos, todos => todos.filter(todo => todo.isDone).length )
```

### React.PureComponent React.memo

- 浅比较
- 两者都是性能优化的手段
- 仅在你的 props 和 state 较为简单时，才使用 React.PureComponent
- React.memo()
  - 包裹函数式组件，不适用于 class 组件
  - 用来优化函数式组件的性能，会复用最近一次的渲染结果
  - 仅检查 props 变更，默认只做浅层对比，如果想要控制比对过程，将比较函数传入第二个参数

### useRef和createRef的区别

* useRef 仅能运用在函数式组件中
* createRef 仅能用在 class 组件中

### with typescript 

https://redux.js.org/recipes/usage-with-typescript

## 学习

### 课程

---

- [Glitch: React Starter Kit](https://glitch.com/glimmer/post/react-starter-kit/) - A free, 5-part video course with interactive code examples that will help you learn React.
- [Codecademy: React 101](https://www.codecademy.com/learn/react-101) - Codecademy’s introductory course for React.

### 示例

---

- **[Hacker News Clone React/GraphQL](https://github.com/clintonwoo/hackernews-react-graphql)** Hacker News clone rewritten with universal JavaScript, using React and GraphQL
- **[Builder Book](https://github.com/builderbook/builderbook)** Open-source web app to write and host documentation or sell books. Built with React, Material-UI, Next, Express, Mongoose, MongoDB
- **[Snap Shot](https://github.com/Yog9/SnapShot)** A photo gallery with search
- **[BMI Calculator](https://github.com/GermaVinsmoke/bmi-calculator)** A React Hooks app for calculating BMI

### 文章

---

- [The Hands-On Guide to Learning React Hooks](https://www.telerik.com/kendo-react-ui/react-hooks-guide/) - Eric Bishard’s step-by-step guide to learning React Hooks.
- [How to Use the React Profiler Component to Measure Render Performance](https://medium.com/@adamhenson/how-to-use-the-react-profiler-component-to-measure-performance-improvements-from-hooks-d43b7092d7a8) - Adam Henson’s article exemplifying a use case for `<React.Profiler />`.
- [Thinking in React Hooks](https://wattenberger.com/blog/react-hooks) - Amelia Wattenberger’s provides visualizations and highlighting the mindset change needed switching from classes to functional components + hooks.

### 资源

---

- [Awesome React](https://github.com/enaqx/awesome-react) - A collection of awesome things regarding React ecosystem.
- [Awesome React Components](https://github.com/brillout/awesome-react-components) - A curated list of React components.