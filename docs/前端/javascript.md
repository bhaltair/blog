# JavaScript
## 1 类型

### 基本类型

6种基本类型
> undefined null boolean string number symbol

**Number**

**浮点数精度问题如何解决？现在项目中会用到 BigInt 吗？**
- 浮点数精度的问题，展示的时候四舍五入即可
- 要求比较严格的场景，可以转为整数来存取。
- BigInt 是 ES2019 的特性，是以后大多数场景优选方案。

NaN === NaN +0 !== -0


### 引用类型
1. object
2. Array
3. Date
4. RegExp
5. Function
```js
  *函数也是对象*
  * 内置的属性 this 和 arguments
  arguments.callee  
  arguments.caller
  * 内置的方法 call 和 apply 改变作用域
  * 内置的属性 length 和 prototype  
  length代表函数希望接受的命名参数的个数
  > 对于ES5中的引用类型来说，prototype保存了它们的所有实例方法，因此使用for-in无法实现
```
6. 包装类型
```js
  > 为了便于操作基本类型值，引入3个特殊的引用类型，在读取一个基本类型值的时候，会自动创建一个基本包装类型的对象

  * Boolean
  * Number
  * String

  > 引用类型与基本包装类型的主要区别就是对象的生存期，自动创建的基本包装类型的对象，只存在于代码执行瞬间，不能为其添加属性和方法
```
7. 单体内置对象



### 类型判断
* typeof运算符
* instanceof运算符
* Object.prototype.toString方法


## 2 语法

### 运算符

**运算符优先级**

从高到低

- 一元运算符
- 乘除
- 加减
- in、instanceof、>=、
- 等于比较
- 位运算符
- 逻辑运算符
- 条件运算符
- 赋值运算符
- yield
- 展开运算符


### 语句
**for 循环跳出**

- for 循环可以提前终止或者进行下一轮循环
  - continue
  - break


## 3 作用域和闭包

closure 闭包是一个函数在创建时允许该函数访问并操作该自身函数之外的变量时所创建的 `作用域`

> 模仿块级作用域 创建私有变量

```js
function f1() {　　　　
    var n = 999;
    function f2() {　　　　　　
        console.log(n++);　　　　
    }　　　　
    return f2;　　
}
var result = f1();　　
var result2 = f1();　　
result(); // 999
result(); // 1000
result2(); // 999
result(); // 1001

```


## 4 函数

### 递归


### 函数副作用

- 只有逻辑运算与数学运算
- 同一个输入总是得到同一个输出
- 没有副作用
- 可缓存、可测试、可并行（web worker）
- 惰性计算

缓存特性
```js
let memoize = function(f) {
  let cache = {};
  return function() {
    let arg_str = JSON.stringify(arguments);
    cache[arg_str] = cache[arg_str] || f.apply(f, arguments);
    return cache[arg_str];
  };
};
```

纯函数没有副作用
- 更改文件系统
- 往数据库插入记录
- 发送一个 http 请求
- 可变数据
- 打印/log
- 获取用户输入
- DOM 查询
- 访问系统状态

避免副作用 return 一个函数
```js
// 非纯函数
let signUp = function(attrs) {
  let user = saveUser(attrs);
  welcomeUser(user);
};

// 纯函数
let signUp = function(Db, Email, attrs) {
  return function() {
    let user = saveUser(Db, attrs);
    welcomeUser(Email, user);
  }
}
```
### 高阶函数

- 数组提供了很多高阶函数
  - forEach
  - reduce
  - map

## 5 对象和原型

**获取一个对象上可枚举属性的方法**

* for in    会返回原型链上的属性或方法名 需要使用hasOwnProperty()过滤
* Object.keys()    会返回原型链上的属性或方法名，继承的属性也会被返回
* Object.getOwnPropertyNames()    不可枚举属性也返回

**JS 对象**

- 宿主对象（host Objects）：由 JavaScript 宿主环境提供的对象，它们的行为完全由宿主环境决定
  - 全局对象是 window，window 上又有很多属性，如 document，这个全局对象 window 上的属性，一部分来自 JavaScript 语言，一部分来自浏览器环境
  - 宿主对象也分为固有的和用户可创建的两种，比如 document.createElement 就可以创建一些 dom 对象
  - 宿主也会提供一些构造器，比如我们可以使用 new Image 来创建 img 元素
- 内置对象（Built-in Objects）：由 JavaScript 语言提供的对象
- 固有对象（Intrinsic Objects ）：由标准规定，随着 JavaScript 运行时创建而自动创建的对象实例
- 原生对象（Native Objects）：可以由用户通过 Array、RegExp 等内置构造器或者特殊语法创建的对象
- 普通对象（Ordinary Objects）：由 {} 语法、Object 构造器或者 class 关键字定义类创建的对象，它能够被原型继承

**宿主对象**

* window
* document
* screen
* navigator
* location
* history

**内置固有对象**

**内置原生对象**

几乎所有这些构造器的能力都是无法用纯 JavaScript 代码实现的，它们也无法用 class/extend 语法来继承。


- 基本类型
  - Boolean、String、Number、Symbol、Object
- 基础功能和数据类型
  - Array、Date、RegExp、Promise、Proxy、Map、WeakMap、Set、WeapSet、Function
- 错误类型
  - Error、EvalError、RangeError、ReferenceError、SyntaxError、TypeError、URIError
- 二进制操作
  - ArrayBuffer、SharedArrayBuffer、DataView
- 带类型的数组
  - Float32Array、Float64Array、Int8Array、Int16Array、Int32Array、UInt8Array、UInt16Array、UInt32Array、Uint8ClampedArray

**内置普通对象**

- 函数：具有 [[call]] 私有字段的对象，任何对象只需要实现 [[call]]，它就是一个函数对象
- 构造器对象：具有 [[construct]] 的对象，实现 [[construct]]，它就是一个构造器对象，可以作为构造器被调用
- Object 对象初始化
  - 可以通过new Object()，Object.create()方法，或者使用字面量初始化对象
- Object.create() 创建无原型的对象
- 用方括号[]来表示计算属性
- 重复属性名，后面的会覆盖前面的


### 原型

```js
//题目
var a = {num:2};
var b = Object.create(a);
//问题,以下顺序执行,值是？
b.num
b.num++ 
a.num

// 结果 222
// b 是个空对象，__proto__ 是 a 的 copy
```

**构造函数**

**无原型对象**

**原型污染**

**覆盖继承的属性**

### 继承

**instanceof 运算符**

### this

- this对象是在运行时基于函数的执行环境绑定的
- 全局函数，this等于window
- 当作对象的方法调用，this等于那个对象




## 6 数组和对象

## 7 异步和并发 


* 异步更新策略
* 宏任务与微任务
* Event Loop 过程
* 渲染的时机
* Vue 异步更新策略 nextTick
* 面试题
  - https://juejin.im/post/5c9a43175188252d876e5903?utm_source=gold_browser_extension

### Promise

**安全的 promise**

```js
const safePromise = promise => 
  promise.then(data => [null, data]).catch(err => [err])

async funcion fetchData(url) {
  const [err, result] = await safePromise(fetchApi(url))
  return err ? err ? result
}

```

## 8 性能

### 垃圾收集
*找出那些不使用的变量，释放其占用的内存*

## 9 错误处理

### 严格模式

### 测试框架

### console 和 debugger

### throw 错误

### try-catch-finally

**选择性捕获**
- 捕获特殊类型的异常

```js
function InputError(message) {
  this.message = message;
  this.stack = (new Error()).stack
}
InputError.prototype = Object.create(Error.prototype)
InputError.prototype.name = 'InputError'

try {
  ....
} catch (e){
  if (e instanseof InputeError) 
    console.log('Not a Valid direction')
  else 
    // 重新抛出来 
    throw e
}
```

### error-first

### 错误记录到服务器

```js
function logError(sev, msg) {
  var img = new Image()
  img.src = `log.php?sev=${encodeURIComponent(sev)}&msg=${encodeURIComponent(msg)}`
}

```

## 原理


### Object.is polyfill

```js
if (!Object.is) {
        Object.is = function(v1, v2) {
                // 测试 `-0`
                if (v1 === 0 && v2 === 0) {
                        return 1 / v1 === 1 / v2;
                }
                // 测试 `NaN`
                if (v1 !== v1) {
                        return v2 !== v2;
                }
                // 其他的一切情况
                return v1 === v2;
        };
}

```


### 解构赋值中的默认值

- 数组、对象解构赋值时
  - 只有当属性（数组索引对应的值）值为 undefined 时，才会使用默认值。

```js
function doSomething(options = { foo: 'bar' }) {
  console.log(options);
}


doSomething(); // { foo: "bar" }
doSomething(undefined); // { foo: "bar" }
doSomething(null); // null
```


### arr.toString() 和 Object.prototype.toString.call(arr) 的结果为什么不一样？

- string 和 array 的 toString 方法被重写了，
- 多了解一下继承
- Object.prototype.toString调用的是object的原型（也就是父类）的tostring方法



### iterable 迭代器

- 任何数据结构只要部署 Iterator 接口，就可以完成遍历操作
- ES6 新增的2个协议：可迭代协议与迭代器协议？
- 内置可迭代对象
  - String、Array、TypedArray、Map 和 Set 都是内置可迭代对象
- 用于可迭代对象的语法
  - for-of 循环，展开语法，yield* 和 解构赋值


### babel
```js
// 转码前
input.map(item => item + 1);

// 转码后
input.map(function (item) {
  return item + 1;
});
```

babel配置文件

```js
  {
    "presets": [
      "es2015",
      "react",
      "stage-2"
    ],
    "plugins": []
  }

// ES2015转码规则
$ npm install --save-dev babel-preset-es2015

// # react转码规则
$ npm install --save-dev babel-preset-react

// # ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个
$ npm install --save-dev babel-preset-stage-0
$ npm install --save-dev babel-preset-stage-1
$ npm install --save-dev babel-preset-stage-2
$ npm install --save-dev babel-preset-stage-3
  
```