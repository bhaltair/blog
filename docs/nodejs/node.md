# nodejs

> 构建高性能网络应用 非阻塞IO 异步 事件轮询 单线程 一个拥有大量共享状态的大进程

## 安装nodejs
ubuntu  
* 包管理工具安装  
sudo apt-get install nodejs

* 直接下载文件
```linux
tar -xvf node-v8.4.0-linux-x64.tar.xz
ln -s node-v8.4.0-linux-x64/bin/node /usr/local/bin/node
ln -s node-v8.4.0-linux-x64/bin/npm /usr/local/bin/npm
```

## process对象

## 1 process对象

## 2 global对象
```
__filename
__dirname
setTimeoute
setInterval
console
exports
module
process
require
setImmediate

```

## 3 path
```
path.resolve 用于将相对路径转化为绝对路径
__dirname: 总是返回被执行的 js 所在文件夹的绝对路径
__filename: 总是返回被执行的 js 的绝对路径
process.cwd(): 总是返回运行 node 命令时所在的文件夹的绝对路径
```

## 4 EventEmitter

## 5 buffer

## 6 utils 实用工具
```
util.inherits 原型继承
util.inspect 将任意对象转化为字符串
util.promisify 返回一个返回值是一个 promise 版本的函数。
```

## 7 http
```
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`);
});
```

## 8 stream

## 9 child_process
### spawn
spawn方法创建一个子进程来执行特定命令，用法与execFile方法类似，但是没有回调函数，只能通过监听事件，来获取运行结果。它属于异步执行，适用于子进程长时间运行的情况。
```js
var child_process = require('child_process');

var path = '.';
var ls = child_process.spawn('/bin/ls', ['-l', path]);
ls.stdout.on('data', function (data) {
  console.log('stdout: ' + data);
});

ls.stderr.on('data', function (data) {
  console.log('stderr: ' + data);
});

ls.on('close', function (code) {
  console.log('child process exited with code ' + code);
});
```


## 10 url
```js
url.hash/host/search/origin
const { URL } = require('url');
const myURL = new URL('https://example.org/foo#bar');
console.log(myURL.hash);
  // 输出 #bar

myURL.hash = 'baz';
console.log(myURL.href);
```

## 11 querysting
```js
querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
// 返回 'foo=bar&baz=qux&baz=quux&corge='

querystring.parse('foo=bar&abc=xyz&abc=123') = {
  foo: 'bar',
  abc: ['xyz', '123']
}

querystring.escape()
```

## 12 assert
```js
assert.deepEqual(obj1, obj2);
assert.ok(obj1, obj2);
```

## 13 crypto
crypto 模块提供了加密功能，包含对 OpenSSL 的哈希、HMAC、加密、解密、签名、以及验证功能的一整套封装。


## 14 events
```js
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('触发了一个事件！');
});
myEmitter.emit('event');
```
## 15 fs
```js
fs.stat 读取文件夹
  stats.isDirectory()
  stats.isFile()
fs.createReadStream('test.txt');

```

## 16 readline
```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('你认为 Node.js 中文网怎么样？', (answer) => {
  // 对答案进行处理
  console.log(`多谢你的反馈：${answer}`);

  rl.close();
});

rl.prompt();


```