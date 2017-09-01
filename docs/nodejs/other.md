
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