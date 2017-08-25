# express

## express需要的中间件
> express4.0不再捆绑connect ，所以有些中间件，需要手动安装引用 app.use()

1. body-parser
2. compress
  用gzip压缩
3. cookie-parser
4. cookie-session
5. express-session
  提供会话支持，默认存在内存，可以配置为存在session
6. csurf
7. errorhandler
8. static-favicon
9. morgan
10. query
11. vhost

## 路由
1. 子路由  
使用vhost中间件
2. 自动化渲染html  
好处是不用给每一个文件添加一个路由  
3. 路由组织方式
  * 命名空间路由 express-namespace
  * 随机应变路由

## handlerbars模板引擎

## 流程控制工具
1. 串行和并行
2. nimble

## 子进程
> var exec = require('child_process').exec



## REST API  
> 提供数据和服务

1. 跨域  
npm install --save cors

2. 发送http请求  
使用postman插件
3. 自动化测试API服务  
npm install restler --save 

4. API路由  
/api 与常规网站路由隔离开来

5. 使用子域名  
npm install --save vhost  
将abc.com/api 变为 api.abc.com

6. rest插件  
npm install --save connect-rest

## 静态内容
1. Expires/cache-control
2. Last-Modified/ETag
3. 静态资源放到cdn上
4. 文件加指纹
5. 

## 邮件服务
nodemailer

## 安全
1. 处理跨站请求伪造  
使用csurf插件

2. 使用https  
从ca那里得到一个ssl证书 
```javascript
var https = require('https')
var options = {
  key: fs.readFileSync(__dirname + 'ca.pem'),
  cert: fs.readFileSync(__dirname + 'ca.crt')
}
https.createServer(options, app).listen(app.get('port'), function(){
  console.log('app started at ' + app.get('port'))
})
```

3. 基本的basicAuth中间件  
类似路由页面那个

4. 使用Bcrypt加密密码  
Bcrypt是一个加盐的哈希函数，用来对密码做哈希处理的第三方模块

## 生产环境部署
1. 进程管理  
pm2

2. APM检测  
newrelic

3. 集群  
多核cpu 可以设置cluster

4. 多台服务器？

5. 减少日志输出  
morgan设置为tiny

6. 将邮件作为网站监测工具

7. nginx代理80端口转发

8. nginx处理静态资源


## 调试
3. console.log
4. debugger

### 调试工具
1. 使用vscode调试
2. 使用webstorm调试
3. node-inspector
4. 内置调试器 node debug app.js 

## 部署
1. https
2. 域名注册
3. 主机托管  
heroku


## 测试
1. 单元测试
  * assert模块
  * Mocha
  * Vows
  * should.js

2. 验收测试
> 功能测试 利用自动化测试 不需要人工测试
  * TObi
  * Soda + selenium