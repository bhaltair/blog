# Webpack
## 参考

> 模块打包器，可以打包一切资源，包括JS、CSS、图片等，把所有文件都打包成一个bundle.js文件中

[前端构建秘籍](https://juejin.im/post/5c9075305188252d5c743520)

[webpack：从入门到真实项目配置](https://juejin.im/post/59bb37fa6fb9a00a554f89d2)

## entry

```
module.exports = {
  entry: {
    vendor: './src/vendor.js',
    index: './src/index.js',
  },
};

```

## output

```js
{
  output:{
   // name是你配置的entry中key名称，或者优化后chunk的名称
   // hash是表示bundle文件名添加文件内容hash值，以便于实现浏览器持久化缓存支持
   filename: '[name].[hash].js',
   // 在script标签上添加crossOrigin,以便于支持跨域脚本的错误堆栈捕获
   crossOriginLoading:'anonymous',
   //静态资源路径，指的是输出到html中的资源路径前缀
   publicPath:'https://7.ur.cn/fudao/pc/',
   path: './dist/',//文件输出路径
  }
}

```
## reslove

主要用于解析模块依赖的自定义项

- modules 加速绝对路径查找效率
- alias   自定义模块查询路径

```js
resolve: {
    modules: [
        path.resolve(__dirname, 'src'), 
        path.resolve(__dirname,'node_modules'),
    ],
    alias: {
      components: path.resolve(__dirname, '/src/components'),
    },
}

```

tsconfig.json 相应的配置

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "src/*": ["./src/*"],
      "components/*": ["./src/components/*"],
      "assets/*": ["./src/assets/*"],
      "pages/*": ["./src/pages/*"]
    }
  },
  "include": ["./src/**/*"]
}

```

## module

主要配置就是 rules 了，针对不同资源使用不同的 loader

```js
module: {
  // 这些库都是不依赖其它库的库 不需要解析他们可以加快编译速度
  // 通常可以将那些大型的库且已经编译好的库排除，减少webpack对其解析耗时
  noParse: /node_modules\/(moment|chart\.js)/,
  rules: [
    {
      test: /\.jsx?$/,
      use: resolve('babel-loader'),
      // 需要被这个loader处理的资源
      include: [
        path.resolve(projectDir, 'src'),
        path.resolve(projectDir, 'node_modules/@tencent'),
      ].filter(Boolean),
      // 忽略哪些压缩的文件
      exclude: [/(.|_)min\.js$/],
    }
  ]

```

## optimization

最常用的是 splitChunks 和 minimizer

- minimizer 可以自己配置输出的文件压缩插件
  - js 压缩 使用 webpack 集成的 uglifyjs
  - css 压缩，使用 optimize-css-assets-webpack-plugin 压缩
- splitChunks 是webpack4.x推出的重磅功能，优化的公共chunk提取策略，更高效的提取公共模块，在后面性能优化中会详细说明其使用方法。


## Loader

### 常用的 Loader？用过哪些 Loader?

- file-loader 处理图片和字体
- url-loader 可以设置一个阈值，小于阈值使用 `base64` 大于阈值使用 publicPath
- babel-loader 转换 ES6 代码
- ts-loader 转换 TS 代码
- awesome-typescript-loader 转换 TS 代码，性能要比上面的好
- sass-loader 转换 sass
- css-loader 加载 CSS
- postcss-loader 
- vue-loader 处理单文件组件
- source-map-loader 加载额外的 Source Map 文件，以方便断点调试

### babel-loader

> npm i --save-dev babel-loader babel-core babel-preset-env

- babel-loader 用于让 webpack 知道如何运行 babel
- babel-core 可以看做编译器，这个库知道如何解析代码
- babel-preset-env 这个库可以根据环境的不同转换代码

### 处理图片

依赖安装 url-loader

```js
module.exports = {
  // ...
  module: {
    // ...
    output: {
      publicPath: 'build/' // 知道如何寻找资源
    },
    rules: [
      // ...
      {
        // 图片格式正则
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          // 配置 url-loader 的可选项
          options: {
            // 限制 图片大小 10000B，小于限制会将图片转换为 base64格式
            limit: 10000,
            // 超出限制，创建的文件格式
            // build/images/[图片名].[hash].[图片格式]
            name: 'images/[name].[hash].[ext]'
          }
        }]
      }
    ]
  }
}
```

### 处理 CSS

依赖安装

> npm i --save-dev css-loader style-loader extract-text-webpack-plugin

- css-loader 可以让 CSS 文件也支持 impost，并且会解析 CSS 文件
- style-loader 可以将解析出来的 CSS 通过标签的形式插入到 HTML 中，依赖 css-loader
- extract-text-webpack-plugin CSS 单独打包

```js
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    // ....
    module: {
      rules: [{
          test: /\.css$/,
          // 写法和之前基本一致
          loader: ExtractTextPlugin.extract({
            // 必须这样写，否则会报错
            fallback: 'style-loader',
            use: [{
              loader: 'css-loader',
              options: {
                modules: true
              }
            }]
          })
        ]
      }
    ]
  },
  // 插件列表
  plugins: [
    // 输出的文件路径
    new ExtractTextPlugin("css/[name].[hash].css")
  ]
}
```

## Plugin

plugin 可以介入整个构建过程任何阶段

可以完成
- 报告构建耗时
- 修改输出代码
- 代码压缩
- 资源替换

常见的 Plugin? 用过哪些？

* CommonChunkPlugin     将多个入口文件
* ExtractTextWebpackPlugin     提取css
* ComponentWebpackPlugin     通过webpack使用组件
* HtmlWebpackPlugin     简化html文件的创建
- extract-text-webpack-plugin 提取 CSS 为单独文件，支持缓存 CSS
- clean-webpack-plugin 目录清理
- webpack-bundle-analyzer：可视化 Webpack 文件输出的体积，可以分析

loader 和 plugin 的区别？
- Loader 本质上是一个函数，对函数接收到的内容进行转换，返回转换后的结果。
- Plugin 插件，可以扩展 Webpack 的功能，Webpack 运行的生命周期中会广播很多事件，Plugin 会监听这些事件，改变输出结果

## Webpack 构建流程简单说一下

1. 初始化：启动构建，从配置文件读取参数，初始化 Compiler 对象
2. 编译：从 Entry 出发，加载所有插件，执行对象的 `run` 方法开始执行编译，针对每个 `Module` 串行调用 Loader 对模块进行编译，再找出模块依赖的模块，递归本步骤直到所有依赖文件都被编译
5. 输出：将编译后的 Module 组合成 Chunk，将 Chunk 转换成文件，输出到文件系统中。

## 有哪些可以提高效率的插件

- HotModuleReplacementPlugin: 模块热替换
- webpack-merge：提取公共配置，减少重复配置代码

## source map 是什么？生产环境怎么用？

sourcemap 文件是将编译、打包、压缩后的文件映射回源代码的过程。

可以 debug 到具体的行数。

- hidden-source-map：借助第三方错误监控平台 Sentry 使用，把 sourcemap 上传到公司内搭建的 Sentry 上面
  - 通过 sentry-webpack-plugin 上传
  - 推荐- sourcemap 文件不暴露到公网
- 通过 nginx 设置 .map 文件只对白名单开放（公司内网）

```js
const gitSha = require('child_process').execSync('git rev-parse HEAD').toString().trim() //这个是获取提交版本的记录
const SentryPlugin = require('@sentry/webpack-plugin');
  
process.env.RELEASE_VERSION = gitSha //将记录赋值给RELEASE_VERSION
  
//vue project webpack配置
module.exports = {
   chainWebpack: config => {
      if (NODE_ENV === 'production') {
       config.plugin("sentry").use(SentryPlugin, [{
        ignore: ['node_modules'],
        include: './dist', //上传dist文件的js
        configFile: './.sentryclirc', //配置文件地址
        release: process.env.RELEASE_VERSION, //版本号
        deleteAfterCompile: true,
        urlPrefix: 'https://s.xx.com/fe-static/learning/student-pk' //cdn js的代码路径前缀
       }])
      }
   }
}
```

## TODO:模块打包原理知道吗？

WebPack 实际上为每个模块创造了一个可以导出和导入的环境

## 说一下 Webpack 的热更新原理吧

Hot Module Replacement，缩写为 HMR。这个机制可以做到不用刷新浏览器而将变更的模块替换掉

核心就是客户端从服务端拉去更新后的文件，chunk diff

客户端和服务端通过 WebSocket，当本地资源发生变动，服务端会向浏览器推送更新，并带上构建时的 hash，客户端对比差异发起 Ajax 请求来获取 chunk 的增量更新。

拿到增量更新后，由 HotModulePlugin 来完成后续的操作，哪些状态该保留？哪些需要更新，像 react-hot-loader 和 vue-loader 都是借助这些 API 实现 HMR。

## 如何对bundle体积进行监控和分析？

引入的时候，通过 vscode 有一个 Import Cost 插件，得到引入模块的大小。

后续还可以使用 webpack-bundle-analyzer 来分析 bundle 的体积和模块组成图。

## 文件指纹是什么？怎么用？

可以设置比较长时间的强缓存，提高页面打开速度。

可以给 JS、CSS、图片等资源文件打上 hash，文件内容变动 hash 会改变。

## 如何优化 Webpack 的构建速度？

- 多进程构建
  - HappyPack 不维护了
- 减少要构建的内容(Smaller = Faster) - 提取页面公共资源
  - 将基础包通过 CDN 引入，不打入 bundle 中，利用 html-webpack-externals-plugin
  - 使用 SplitChunksPlugin，进行基础包分离
- 减少要构建的内容 - 动态 polyfill
  - 使用 polyfill service，探测浏览器的 UA，
  - 部分浏览器可能无法识别，可以降级返回全部 polyfill
- 少构建 - dll plugin
  - 使用 DLLReferencePlugin(索引链接) 对 manifest.json 引用
  - 使用 DLLPlugin 进行分包，让一些不频繁改动的代码进行单独编译
  - 缺点：增加构建过程的复杂性
- 利用缓存，提供二次构建速度
  - babel-loader 开启缓存
  - 使用 `cache-loader` 启用 持久化缓存
    - 使用 `package.json` 中的 `postinstall` 清除缓存目录
- Tree shaking
  - 检测没有引用的模块进行标记，在资源压缩时将它们从 `bundle` 中去掉
  - TODO:
- 避免在开发环境引入生产环境才会用到的工具
  - UglifyJsPlugin
  - ExtraceTextPlugin
  - [hash] / [chunkHash]

## 是否写过 Loader? 写 Loader 的思路？

Loader 支持链式调用，开发时要遵循 `单一职责`。

TODO:
## 是否写过 Plugin? 写 Plugin 的思路？

webpack 在运行的生命周期会广播很多事件，Plugin 可以监听这些事件，在特定的阶段添加一些自定义功能。

Webpack 的 `Tapable` 事件流机制保证了插件的有序性

TODO:


## 聊一聊 Babel 原理吧

1. 解析：将代码转换成 AST
  - 词法分析：将代码字符串分割成 token 流，即语法单元组成的数组
  - 语法分析：分析上面生成的语法数组，生成 AST
2. 转换：旧 AST 生成新的 AST
  - Taro 就是利用 babel 完成小程序语法转换
3. 生成：以新的 AST 为基础生成代码

TODO:


## 在项目中使用 webpack

### tree shaking

- harmony export (immutable) 表明代码是有用的
- unused harmony export func2 表明 func2 是无用代码
- webpack 仅仅是做了标记，去掉这些代码的能力，是通过插件实现的，常用的便是 unglify

```js
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = func1;
/* unused harmony export func2 */
function func1() {
  console.log('func1');
}
function func2() {
  console.log('func2');
}
/***/ })
```

### DllPlugin 加快打包速度

DllPlugin 是基于 Windows 动态链接库（dll）的思想被创作出来的。

这个插件会把第三方库单独打包到一个文件中，这个文件就是一个单纯的依赖库。 

因为这个依赖库不会跟着你的业务代码一起被重新打包，只有当依赖自身发生版本变化时才会重新打包。所以打包速度会加快。

```js
const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
      // 依赖的库数组
      vendor: [
        'prop-types',
        'babel-polyfill',
        'react',
        'react-dom',
        'react-router-dom',
      ]
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
      library: '[name]_[hash]',
    },
    plugins: [
      new webpack.DllPlugin({
        // DllPlugin的name属性需要和libary保持一致
        name: '[name]_[hash]',
        path: path.join(__dirname, 'dist', '[name]-manifest.json'),
        // context需要和webpack.config.js保持一致
        context: __dirname,
      }),
      new webpack.DllReferencePlugin({
        context: __dirname,
        // manifest就是我们第一步中打包出来的json文件
        manifest: require('./dist/vendor-manifest.json'),
      }),
    ],
}
```

### Happypack 并发执行

webpack 是单线程的，就算此刻存在多个任务，你也只能排队一个接一个地等待处理。 

这是 webpack 的缺点，好在我们的 CPU 是多核的

Happypack 会充分释放 CPU 在多核并发方面的优势，帮我们把任务分解给多个子进程去并发执行，大大提升打包效率。


```js
const HappyPack = require('happypack')
// 手动创建进程池
// cpu 核数
const happyThreadPool =  HappyPack.ThreadPool({ size: os.cpus().length })

module.exports = {
  module: {
    rules: [
      ...
      {
        test: /\.js$/,
        // 问号后面的查询参数指定了处理这类文件的HappyPack实例的名字
        loader: 'happypack/loader?id=happyBabel',
        ...
      },
    ],
  },
  plugins: [
    ...
    new HappyPack({
      // 这个HappyPack的"名字"就叫做js，和楼上的查询参数遥相呼应
      id: 'js',
      // 指定进程池
      threadPool: happyThreadPool,
      loaders: ['babel-loader?cacheDirectory']
    })
  ],
}
```

### 分离库代码 vendor.js

第三方库和应用代码单独打包，这样发版本的时候，就不用重新下载第三方库的 JS，可以用本地的缓存。

```js
// 这是 packet.json 中 dependencies 下的
const VENOR = [
  "faker",
  "lodash",
  "react",
  "react-dom",
  "react-input-range",
  "react-redux",
  "redux",
  "redux-form",
  "redux-thunk"
]

module.exports = {
  // 之前我们都是使用了单文件入口
  // entry 同时也支持多文件入口，现在我们有两个入口
  // 一个是我们自己的代码，一个是依赖库的代码
  entry: {
    // bundle 和 vendor 都是自己随便取名的，会映射到 [name] 中
    bundle: './src/index.js',
    vendor: VENOR
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  // ...
}
```

有一个缺点就是：bundle 中也引入了依赖库的代码

上面还少了一步，没有把 bundle 中的 vendor 代码抽取出来。我们继续看。


### CommonsChunkPlugin 抽取共同代码

打包之后，会发现 bundle.js 体积变得很小

```js
module.exports = {
  // ...
  output: {
    path: path.join(__dirname, 'dist'),
    // 既然我们希望缓存生效，就应该每次在更改代码以后修改文件名
    // [chunkhash]会自动根据文件是否更改而更换哈希
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      // vendor 的意义和之前相同
      // manifest文件是将每次打包都会更改的东西单独提取出来，保证没有更改的代码无需重新打包，这样可以加快打包速度
      names: ['vendor', 'manifest'],
      // 配合 manifest 文件使用
      minChunks: Infinity
    }),
    // 清除上次打包的文件，因为每次打包生成的文件 hash 都不一样
    // 只删除 dist 文件夹下的 bundle 和 manifest 文件
    new CleanWebpackPlugin(['dist/bundle.*.js','dist/manifest.*.js'], {
    // 打印 log
      verbose: true,
      // 删除文件
      dry: false
    }),
  ]
};
```

### 自动插入 JS 文件到 HTML 中

每次打包生成的 JS 文件名都需要引入到 HTML 中，使用插件帮我们做这一步。

```js

npm install html-webpack-plugin --save-dev

module.exports = {
//...
  plugins: [
  // 我们这里将之前的 HTML 文件当做模板
  // 注意在之前 HTML 文件中请务必删除之前引入的 JS 文件
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
};

```

### 按需加载

我们不需要在首页就加载所有的 应用代码，是否可以只加载首页的代码？

可以通过路由的异步加载来完成

```js
// 注意在最新版的 V4路由版本中，更改了按需加载的方式，如果安装了 V4版，可以自行前往官网学习
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './components/Home';
import ArtistMain from './components/artists/ArtistMain';

const rootRoute = {
  component: Home,
  path: '/',
  indexRoute: { component: ArtistMain },
  childRoutes: [
    {
      path: 'artists/new',
      getComponent(location, cb) {
        System.import('./components/artists/ArtistCreate')
          .then(module => cb(null, module.default))
      }
    },
    {
      path: 'artists/:id/edit',
      getComponent(location, cb) {
        System.import('./components/artists/ArtistEdit')
          .then(module => cb(null, module.default))
      }
    },
    {
      path: 'artists/:id',
      getComponent(location, cb) {
        System.import('./components/artists/ArtistDetail')
          .then(module => cb(null, module.default))
      }
    }
  ]
}

const Routes = () => {
  return (
    <Router history={hashHistory} routes={rootRoute} />
  );
};

export default Routes;

```