# vue

访问子组件
```js
<user-profile ref="profile"></user-profile>
var parent = new Vue({ el: '#parent' })
// 访问子组件
var child = parent.$refs.profile

```


## vue UI
* ivew
* mint-ui
* elemen-ui
* 有赞UI
* vux

## webpack proxy
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



## vue单元测试
- Karma: 启动浏览器来跑测试，运行测试用例并将结果报告给我们。
- karma-webpack: 使用webpack来跑Karma测试的插件
- Mocha: 我们编写测试规范的测试框架。
- Chai: 提供更好的断言语法的测试断言库。
- Sinon: 测试工具库，提供了spies, stubs 和 mocks。
