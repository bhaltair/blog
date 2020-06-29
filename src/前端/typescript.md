# TypeScript

## 泛型

- TS 中最为困难的内容之一`泛型`
- 言简意赅
  - 泛型时对类型进行编程，参数是类型，返回值是一个新的类型
- 我们可以对泛型的参数进行约束，类似函数的类型约束
- 泛型支持类型推断
- 泛型和函数很像
  - 很多函数的内容可以迁移到泛型
    - 函数嵌套
    - 默认参数
    - 支持递归
      ```typescript
        // 单链表节点定义
        type ListNode<T> = {
          data: T;
          next: ListNode<T> | null;
        };
      ```
    - 等等
- 泛型使用尖括号
- 什么时候用泛型
  - 当你的函数、接口或者类
    - 需要作用到很多类型
    - 需要被用到很多地方


## 类型映射
## 类型保护
## 类型推论
## 类型断言



## tsconfig.json

## 版本

### 3.9

1. 平均编译时长从26秒缩短至10秒
2. 修复了Promise.all/race的问题

## 学习资源

- 官网 https://www.typescriptlang.org/
- 官网翻译
  - https://www.tslang.cn/
  - https://typescript.bootcss.com/
  - https://zhongsp.gitbook.io/
- 入门教程
  - https://ts.xcatliu.com/
- 微信读书
  - Typescript 实战指南
  - 深入理解 TypeScript