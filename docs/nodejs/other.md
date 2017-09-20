
## 语义化版本规范semver
版本格式：主版本号.次版本号.修订号，版本号递增规则如下：

主版本号：当你做了不兼容的 API 修改，
次版本号：当你做了向下兼容的功能性新增，
修订号：当你做了向下兼容的问题修正。

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

## 单元测试
2. mocha
5. nodeunit
6. Vows

## 断言库
1. should.js
2. assert
3. expect.js 这个好用

## 覆盖率coverage
istanbul

## 验收测试
* Tobi
* Soda

## npm命令
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

针对一次性的事件，使用回调函数；针对重复性事件，使用eventEmitter。

完。


## 流程控制
1. 串行和并行
2. 社区工具  
  * nimble
  * async
  * step
  
## 子进程
> var exec = require('child_process').exec