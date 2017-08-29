# nodejs

> 构建高性能网络应用 非阻塞IO 异步 事件轮询 单线程 一个拥有大量共享状态的大进程

## process对象

## global对象
```
__filename
__dirname

```

## path
```
path.resolve 用于将相对路径转化为绝对路径
__dirname: 总是返回被执行的 js 所在文件夹的绝对路径
__filename: 总是返回被执行的 js 的绝对路径
process.cwd(): 总是返回运行 node 命令时所在的文件夹的绝对路径
```

## EventEmitter

## buffer

## utils
```
util.inherits 原型继承
util.inspect 将任意对象转化为字符串



```

## stream

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

## 测试
1. expect.js
2. mocha

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