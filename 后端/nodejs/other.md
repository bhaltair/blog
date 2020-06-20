## Node.js 的意义

- Serverless
  - Node.js 的轻量化、容易分散与水平扩充、各种操作系统都容易运行的特性，将 Node.js 作为无服务器服务优先支持的框架，这也让 Node.js 更适合用于超大规模部署的应用
- BFF
  - 引入 Node.js 做 BFF 这样的 API proxy 中间层，使得 API 开发也成了前端的工作范围
  - 让后端同学专注于开发 RPC 服务
- SSR
- 工程化工具

## 语义化版本规范semver

版本格式：主版本号.次版本号.修订号，版本号递增规则如下：

* 主版本号：当你做了不兼容的 API 修改，
* 次版本号：当你做了向下兼容的功能性新增，
* 修订号：当你做了向下兼容的问题修正。

第一个版本: 0.0.1

## cli

1. 彩色输出
ANSI转义码

```
console.log('\033[90m' + 'some info' + '\033[39m');
```
  * \033表示转义序列的开始
  * [ 表示开始颜色设置
  * 90表示前景色为亮灰色
  * m表示颜色设置结束

## 持久化
1. node-mogno
2. node-mysql
3. node-redis

## 测试

### 单元测试
2. mocha
5. nodeunit
6. Vows

### 断言库
1. should.js
2. assert
3. expect.js 这个好用

### 覆盖率 coverage
istanbul

### 验收测试
* Tobi
* Soda
 
## npm 命令

```
npm remove <name> 移除包
npm ls --depth 0 查看当前工程下的包
npm update <name> 更新模块
npm publish 发布模块
```

## 部署平台
1. heroku
2. now

## 生产环境部署

* 将 NODE_ENV 设置为 “production”
* 保证你的应用在发生错误后自动重启
* 使用集群模式运行你的应用 多核优势
* 缓存请求结果
* 使用负载均衡
* 使用反向代理 Nginx代理静态文件



## 异步编程

理解node的事件循环，在浏览器中，事件可能是用户的点击 scroll input等，而在nodejs中，可以是socket的data事件，或者readFile的error事件。

- 针对一次性的事件，使用回调函数；
- 针对重复性事件，使用eventEmitter。


## 流程控制
1. 串行和并行
2. 社区工具  
  * nimble
  * async
  * step
  
## 子进程

> var exec = require('child_process').exec

## node monolithic 单体架构

monolithic 单体架构

?> 单体架构是一种很自然的搭建应用的方式，它符合我们对业务处理流程的认知。但单体应用也存在问题：任何一处，无论大小的修改都会导致整个应用被重新构建和重新部署。随着应用规模和复杂性的不断增大，参与维护的人数增多，每一轮迭代修改的模块增多，对上线来说是极大的考验，对于内部单个模块的拓展也是极为不利的。例如当图片压缩请求剧增时，需要新增图片压缩模块的实例，但实际上不得不扩展整个单体应用的实例。

缺点：

- 修改，任意一个功能模块，别的功能模块都要跟着被修改。

改变：

- 使用微服务架构

### 后端服务要满足2个特性

- 能容错 fault tolerant
- 可扩展 scaclability

### 高并发下的多进程、负载均衡

多进程的目的，是尽可能利用多核 CPU，提高单机的负载能力。

!> 我们都知道NodeJS程序是以单进程形式运行，32 位机器上最多也只有 1GB 内存的实用权限（在64位机器上最大的内存权限扩大到1.7GB。而目前绝大部分线上服务器的CPU都是多核并且至少16GB 内存起，如此以来 Node 程序便无法充分发挥机器的潜力。

所以，Node 允许程序创建多个子进程用于运行多个实例。

?> 你知道，生产机器的每个 CPU 内核都运行一个 Node Worker 进程，然后负载所有的请求吗？

一般而言，一个 CPU 对一个 Worker 就行了。

了解一下nodejs cluster模块。

集群（cluster）模块可以被用来在多核 CPU 环境负载均衡。基于子进程的 fork 方法并且主要允许我们根据 CPU 核数衍生很多次主应用进程。然后主进程将接管并且通过主进程与所有的子进程的交流实现负载均衡。

```js
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}

```

1. 启动 app.js ，当前执行进程是主线程
2. 然后会 fork 与cpu个数一样的worker进程
3. worker进程默认执行 process.argv[1] 文件，即 app.js
4. 当非 master 进程程启动 http server ，每个worker进程启动一个

![1590823081336-16bdd63f-9783-48ca-93e4-3b19ec4b311b.png](http://yanxuan.nosdn.127.net/1ac9a55289a53b3ae21861d7b21a8948.png)

### 多进程的弊端

- 负载均衡
  - 负载均衡算法
  - node cluster 采用 round-robin 算法策略分发 http 请求到不同 worker 进程
- Session 共享
  - 假如某个用户第一次访问该服务分配给了线程A上的实例A处理，并且用户在这个实例上进行了登录，没过多久，用户第二次访问被分配给了线程B上的实例B处理。如果用户在A上的登录状态没有共享给其他实例的话，那么用户不得不重新登录一下，这样的用户体验是无法接受的。
- 反向代理
  - 适用于多台机器多个实例


前端同学不太懂这两个。


### 平滑不停机重启

## error first callback

用一个回调函数 返回两种结果

- Success返回第一个参数是null 第二个参数是res

- Error返回第一个参数是error

回调函数里面判断是否存在error

## 什么叫做有服务端开发的经验？

能说出大概的服务端技术 包括但不限于：

- docker；
- k8s；
- 中后台架构分层
- 缓存处理
- 分布式；
- 响应式编程等。
- rpc原理
  - rpc服务调用
- 负载均衡
  - Nginx负载均衡
    - 主备
  - Node应用负载均衡

## 分布式

## 异常处理

### 处理未捕获的异常

## 上线实践
### 使用 winston 记录日志
### 使用 nginx 反向代理

Node 处理 CPU 密集型任务，如 gzipping，SSL termination 等，表现糟糕。

相反，使用一个真正的中间件服务像 Nginx 更好。

### 检测有漏洞的依赖项

https://docs.npmjs.com/cli/audit

## 性能优化

### V8 内存管理与垃圾回收
### 分析 GC 日志
### 使用 headdump 堆快照
### benchmark
### 使用 prof 进行性能分析


## 应用安全清单

### 转义 HTML、JS 和 CSS 输出

### 验证传入的 JSON schemas

### 限制每个用户允许的登录请求

### 使用非 root 用户运行 Node.js

### 使用反向代理或中间件限制负载大小

### 在沙箱中运行不安全代码

### csurf 防止 CSRF

## 综合应用

### Node.js REST API

### jwt

### Web API 设计

### node-schedule 使用

### 生成 excel

- js-xlsx : 目前 Github 上 star 数量最多的处理 Excel 的库，支持解析多种格式表格XLSX / XLSM / XLSB / XLS /CSV，解析采用纯js实现，写入需要依赖nodejs或者FileSaver.js实现生成写入Excel，可以生成子表Excel，功能强大，但上手难度稍大。不提供基础设置Excel表格api例单元格宽度，文档有些乱，不适合快速上手；[https://github.com/SheetJS/js-xlsx](https://github.com/SheetJS/js-xlsx)
- node-xlsx : 基于Node.js解析excel文件数据及生成excel文件，仅支持xlsx格式文件；[https://github.com/mgcrea/node-xlsx](https://github.com/mgcrea/node-xlsx)
- excel-parser : 基于Node.js解析excel文件数据，支持xls及xlsx格式文件，需要依赖python，太重不太实用；[https://github.com/leftshifters/excel-parser](https://github.com/leftshifters/excel-parser)
- excel-export : 基于Node.js将数据生成导出excel文件，生成文件格式为xlsx，可以设置单元格宽度，API容易上手，无法生成worksheet字表，比较单一，基本功能可以基本满足；[https://github.com/functionscope/Node-Excel-Export](https://github.com/functionscope/Node-Excel-Export)
- node-xlrd : 基于node.js从excel文件中提取数据，仅支持xls格式文件,不支持xlsx,有点过时，常用的都是XLSX 格式。