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

一个不用编写 class 就能使用 state 和其他 React 特性的方法

- Hook 允许你在不使用 class 的情况下使用 state 和 React 其他特性
- 帮助你用一种更简单的方式来编写你的组件

### 组件逻辑复用的发展历程

mixin -> HOC & render-props -> Hook

### HOC 高阶组件

- 是一种开发模式
  - HOC并不是React的API，他是根据React的特性形成的一种开发模式。
  - 可以提高 React 开发组件复用性
- 是一个函数
    - 接受一个组件作为参数
    - 返回一个组件

#### library

- umi-hooks
- react-use
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

### Redux-sage

- takeLatest/takeEvery/throttle
  - 便利的实现对事件的仅关注最近事件、关注每一次、事件限频
- cancel/delay方法
  - 可以便利的取消、延迟异步请求
- race(effects),[…effects]
  - 支持竞态和并行场景
- channel机制
  - 支持外部事件

#### side effects

#### middleware api

#### effect creatrors

##### put
##### select
##### take
##### takeEvery
##### takeLatest
##### fork
##### apply
##### cancel

#### effect combinaators

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

- 简化开发体验
  - 内置了 react-router 和 fetch

数据流向

![liu.png](https://www.notion.so/Dva-d7d7b10f0dae40a289fde391a91a8d1e#d85e2057b57a4ee8a55bfcf6f37dd04d)

## Dva

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