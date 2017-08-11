## 基本数据类型
> 5种 undefined null boolean string number

## 引用类型
1. object
2. Array
3. Date
4. RegExp
5. Function

  *函数也是对象*
  * 内置的属性 this 和 arguments
  > arguments.callee  
  > arguments.caller
  * 内置的方法 call 和 apply 改变作用域
  * 内置的属性 length 和 prototype  
  length代表函数希望接受的命名参数的个数
  > 对于ES5中的引用类型来说，prototype保存了它们的所有实例方法，因此使用for-in无法实现

6. 包装类型
  > 为了便于操作基本类型值，引入3个特殊的引用类型，在读取一个基本类型值的时候，会自动创建一个基本包装类型的对象

  * Boolean
  * Number
  * String

  > 引用类型与基本包装类型的主要区别就是对象的生存期，自动创建的基本包装类型的对象，只存在于代码执行瞬间，不能为其添加属性和方法
7. 单体内置对象

## 垃圾收集
*找出那些不使用的变量，释放其占用的内存*


## 作用域和内存管理
不用的变量
`global

## this
> this对象是在运行时基于函数的执行环境绑定的
1. 全局函数，this等于window
2. 当作对象的方法调用，this等于那个对象


## 挥舞函数
### 闭包
> 模仿块级作用域 创建私有变量
### IIFE
### 匿名函数
拉姆达函数
### 模块模式