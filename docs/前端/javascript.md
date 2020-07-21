# JavaScript
## 1 类型

- 变量不持有类型
- 值才有类型

### 基本类型

6种基本类型
> undefined null boolean string number symbol

还有一个没有正式发布但即将被加入标准的原始类型BigInt。

**Number**

- JS 没有明显的整数类型
- 双精度浮点数，64 位编码数字，可以表示高达 53 位精度的整数，从 2^-53 到 2 ^ 53
- 控制小数部分的显示位数
  - toFixed()
- 42..Fixed(2)
  - `42.` 被视为 number 的一部分
  - `42.Fixed(2)` 就错误了
  - `42.4.toFixed(2)` 这样是正确的，只识别第一个小数点  
- 指定有效数位的显示位数
  - 42.59.toPrecision( 6 ) '42.5900'
- 指数形式表示较大的数字
  - > 1E3 // 1 * 10 ^ 3
  - > 1.1E6 // 1.1 * 10 ^ 6
- 比较两个数字是否相等（在指定的误差范围内）
  - 如何判断 0.1 + 0.2 === 0.3 呢？
  - Number.EPSILON 机器精度
  ```js
  function numberCloseEnougyToEqual(n1, n2) {
    return Math.abs(n1 - n2) < Number.EPSILON
  }
  ```
- 整数的安全范围
  - 远小于 Number.MAX_VALUE
  - `Number.MAX_SAFE_INTEGER` 和 `Number.MIN_SAFE_INTEGER`
    - 2 ^ 53 - 1 到 2 ^ 53
  - 整数检测
    - Number.isInteger()
  - 安全的整数检测
   -  Number.issafeInterger()
- 大数值的支持
  - 通过字符串实现
  - BigInt

**浮点数精度问题如何解决？现在项目中会用到 BigInt 吗？**
- 超过 Number.MAX_SAFE_INTEGER 会出现精度丢失，通常引入第三方库来进行解决
- 浮点数精度的问题，展示的时候四舍五入即可
- 要求比较严格的场景，可以转为整数来存取。
- BigInt 是 ES2019 的特性，是以后大多数场景优选方案。

**特殊的数字**
- NaN (not a number) 和自身不相等
  - NaN === NaN // false
  - 不要使用 Window.isNaN 这家伙只要不是数字、不是 NaN 就返回 true
  - 推荐使用 Number.isNaN() 来判断
  - 或者使用 NaN自身不等于自身的特性(JS 唯一不等于自身的值) n !== n
- `0 === -0 // true`
  ```js
  function isNegZero(n) {
    n = Number( n)
    return (n === 0) && ( 1 / n === -Infinity)
  }
  ```
- `Infinity 和 -Infinity`
- 判断两个值是否相等？
  - 由于 NaN 和 0 -0 的问题，我们推荐使用 Object.is() 来判断两个值是否相等


**位运算符**
- 会转化为 32 位有符号整数后进行运算

```js
8 | 1 = 9

// 按位或
// 0000****1000
// 0000****0001
// 0000****1001
```

**JS 为基本数据类型提供了包装类型，称为原生函数**


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


**复合条件判断 null 值的类型
typeof null === 'object'
> (!a && typeof a === 'object')

### 类型转换

**显示类型转换**

**隐式类型转换**

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

**运算符优先级 - 短路**


### 语句
**for 循环跳出**

- for 循环可以提前终止或者进行下一轮循环
  - continue
  - break


## 3 作用域和闭包

> 作用域是一套规则，用于确定在何处以及如何查找变量。

- 查找会向上查找，直到全局作用域才停止。

### 词法作用域

作用域有2套工作模型：
- 词法作用域
  - JS
  - 大多数编程语言使用
- 动态作用域
  - Bash 脚本

**什么是词法作用域？**
你写代码时候将变量和块作用域写在哪里来决定的。

### 函数作用域
### 块作用域
### 声明提升

所有的声明（变量和函数）都会被移动到各自作用域的最顶端，这叫做提升。

### 闭包

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

### 匿名函数表达式

匿名函数调试非常不方便，在栈追踪中不会显示有意义的函数名。

### 立即执行函数表达式

```js
var a = 2
(function IIFE( global) {
  var a = 3
  console.log(a) // 3
  console.log(global.a) // 2
})( window )
```

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

### 函数式编程

[函数式编程](/前端/函数式编程)

## 5 对象和原型

### 对象

> 许多人认为 JS 中万物都是对象，这是错误的。❎

- 使用 null 原型以防止原型污染
- 使用 hasOwnProperty 方法以避免原型污染
  - for-in 循环会把继承属性也枚举出来
- 属性的特性可以用属性描述符来控制，比如 writeable 和 configurable，或者 enumbeable
- 属性不一定包含值，可能是具备 getter/setter 的 访问描述符。

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

- 使用 Object.getPrototypeOf 函数而不要使用实例对象的 __proto__

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

- this 是在运行时基于函数的执行环境绑定的
  - this 是在运行时绑定的，并不是在编写时绑定，它的上下文取决于函数调用的各种条件
  - this 的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。
  - 学习 this 的第一步就是明白 this 既不指向函数自身，也不指向函数的词法作用域。
  - this 实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用。
- **箭头函数**没有自己的 this，捕获其上下文的 this 作为自己的 this，不能被 new 调用，定义时所在作用域的 `this` 值

```js
var obj = {
  getArrow: function getArrow() {
    var _this = this
    return function() {
      console.log(_this === obj)
    }
  }
}
```

**绑定规则**
- 默认绑定
- 隐式绑定
  - this 丢失
    ```js
      function foo() {
        console.log(this.a)
      }
      var obj = {
        a: 2,
        foo
      }
      var a = 'oops, global'
      // obj.foo 引用的其实是 foo 本身
      setTimeout( obj.foo, 100 ) // 'oops global'
    ```
- 显式绑定
  - Function.prototype.bind()
- new 绑定

### 类设计模式

> 类是一种设计模式

[面向对象编程](/前端/面向对象)

**多态**

类的核心概念，多态，这个概念是说父类的通用行为可以被子类更特殊的行为重写。

**面向对象设计模式**
- 单例模式
- 观察者模式
- 工厂模式
- 迭代器模式

[设计模式](/计算机/设计模式)


## 6 数组和对象

- 使用数组而不要使用字典（对象）来存储有序集合
- 避免在枚举期间修改对象
  - 当迭代一个对象时，如果该对象的内容会在循环期间改变，应该使用 while 或者 for 循环，而不是 for-in 循环
  - 如果被枚举的对象在枚举期间添加了新的属性，那么在枚举期间并不能保证新添加的属性能够被访问。
- 数组迭代要优先使用 for 循环而不是 for-in 循环
  - 虽然数组也是对象，但是不要把数组当做对象用
  - 对象属性 key 始终是字符串
- 在类数组对象上使用数组的方法

## 7 异步和并发 

**事件循环**

**并发**
- 对异步循环使用递归
  ```js
  // 错误的版本
  function downloadOneAsync(urls, onsucces, onfailure) {
    for (var i = 0, n = urls.length; i < n; i++) {
      downloadAsync(urls[i], onsucces, function() {
        // ?
      }
    }
    throw new Error('all downloads failed')
  }
  // 正确的版本
  function downloadOneAsync(urls, onsucces, onfailure) {
    var n = urls.length
    function tryNextUrl(i) {
      if ( i >= n) {
        onfailure('all downloads failed')
        return
      }
      downloadAsync(urls[i], onsucces, function() {
        tryNextUrl(i + 1)
      })
    }
    tryNextUrl(0)
  }
  ```
  - 异步 API 在其回调函数被调用前会立即返回，导致其栈帧会从调用栈中弹出，并不会导致调用栈溢出。
- 不要在计算时阻塞事件队列
  - 我们可以控制事件队列的每个轮次 tick 可以执行算法的几个迭代
  - 将 while 循环替换为 setTimeout + 递归
  - setTimeout 0 API 可以将回调函数几乎立刻地添加到事件队列的作用
  ```js
  // 错误的版本
  function inNetwork(other) {
    var visited = [], worklist = []
    while(worklist.length > 0) {
      var member = worklist.pop()
      // 做大量运算
      if (member === other) return true
      // .....
    }
  }
  // 正确的版本
  function inNetwork(other, callback) {
    // ...
    function next() {
      for (var i = 0; i < 10; i++) {
        // ...
      }
      setTimeout(next, 0)
    }
    setTimeout(next, 0)
  }  
  ```
- 使用计数器避免并行操作中的数据竞争
  - JS 中的事件发生是不确定的，即顺序是不可预测的
  - 使用一个计数器来追踪正在进行的操作数量
  ```js
    function downloadAllAsync(urls, onsuccess, onerror) {
      var pending = urls.length, result = []
      if (pending === 0) {
        setTimeout(onsuccess.bind(null, result), 0)
        return
      }
      urls.forEach((url, i) => {
        downloadAsync(url, text => {
          if (result) {
            result[i] = text
            pending--
            if (pending === 0) {
              onsuccess(result)
            }
          }
        }, error => {
          if (result) {
            result = null
            onerror(error)
          }          
        })
      })
    }
  ```
- 绝不要同步地调用异步的回调函数，总是异步地调用回调函数

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

**promise不能取消**

- 建议更高层级的抽象中实现取消

```js
// 下面是一个错误的示范
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// expected output: "two"
```

### 生成器和迭代器

```js
function *gen(i) {
  yield i
  yield i + 10
  return 'R'
}

var foo = gen(1)
foo.next() // { value: 1, done: false }
foo.next().value // 11
foo.next() // { value: 'R', done: true }
foo.next() // { value: undefined, done: true }
```

### async 和 await

> async 函数 ES2017 标准引入的语法，是 Generator 函数的语法糖

TODO:
- async 函数就是 Generator 函数的语法糖
- await 放在 promise 调用之前，只能在 async 函数内部调用
  - 如果 await 后面不是 promise，会自动调用 Promise.resolve() 转化为 promise 对象
  - await 关键字会在内部调用 then 方法将 resolve 的值返回【await关键字是then方法的语法糖，会将resolve的值传递出来】
  - 如果 await 执行报错，后面的语句不会继续执行
  - await 可以直接调用 async 函数
- async 函数总是返回 Promise
- 相比 Promise 的优势？
  - 同步的写法，Promise 链式调用写起来不优雅
  - 错误处理友好，使用 try-catch 
- 相比 Generator 函数的优点
  - 内置执行器
  - 返回值是 Promise，可以用 then 方法指定下一步操作
    - Generator 函数返回值是 迭代对象
- 捕获错误
  - 直接跟 catch()
  - async 内部可以用 try-catch，只能捕捉同步的错误
- 优势
  - 异步过程同步化
  - 代码量很少

**处理错误**
在函数调用的时候使用 catch()，这是最简便的

## 8 性能

### 垃圾收集
*找出那些不使用的变量，释放其占用的内存*

### 性能测试

**被问到如何测试某个运算的速度**
```js
var start = (new Date().getTime())
// 进行一些操作
var end = Date.now()
console.log(end - start)
```

上面这个方法是不准确的，这个性能测试基本上是无用的。

你或者会想到重复取平均数，但实际情况是即使只有几个异常值也会影响整个平均值。

要确保把异常因素排除，你需要大量的样本来平均化。

正确的性能测试：要考虑统计学的合理实践，标准差、方差、误差幅度。

- Benchmark.js
- jsPerf.com

### 尾调用优化 TCO

> 尾调用就是一个出现在另一个函数”结尾“处的函数调用。整个调用结束后就没有事情做了。

```js
function foo(x) {
  return x
}

// 尾调用
// foo(y+1) 是 bar(...)的尾调用，因为在foo()完成后，bar()也完成了，并且只需要返回foo()调用的结果
function bar(y) {
  return foo( y + 1)
}

// 非尾调用
// 不是尾调用，它的结果还需要加1才能由baz()返回
function baz() {
  return 1 + bar( 40 )
}

```

- 支持 `TCO` 的引擎，能够意识到 `foo(y+1)` 调用位于尾部，那么在调用 `foo()`时，它就不需要创建一个新的栈帧（调用一个函数需要额外的一块预留内存来管理调用栈），而是可以重用已有的baz() 的栈帧，这样不仅速度更快，也更节省内存。
- 虽然在简单代码片段中，这类优化没啥卵用，但是在处理递归时，这就解决了大问题，特别是递归导致成百上千个栈帧的时候，有了 TCO，引擎可以用同一个栈帧执行这类调用。

```js
// TCO 版阶乘
function factorial(n) {
  function fact(n, res) {
    if (n < 2) return res
    return fact( n - 1, n * res)
  }
  return fact(n, 1)
}

factorial( 5 ) // 120
```

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

### babel

Babel是一个JavaScript编译器：它解析，转换和输出转换后的代码。

**babel-core**
这是解析和输出部分。
它不做任何转换。
可以从命令行或捆绑程序（webpack，rollup和co。）使用它。

**babel-polyfill / babel-runtime**
通过在代码之前添加es5 javascript来模拟es2015 +函数（例如Object.assign），从而对转换部分起作用。
依赖 Regenerator（用于polyfill生成器）和core-js（用于polyfill所有其余的）。
babel-polyfill和babel-runtime之间的区别：前者定义了全局方法（并污染了全局范围），而后者则转换了您的代码以提供相同的功能。

**babel plugins**
转换您编写的代码。
babel语法/转换插件：解析并转换es2015 +语法（如箭头功能）以将其转换为es5。
babel-plugins-stage-x（从Stage-0到Stage-4）：将将来不在JS规范中的javascript语法转换为从Stage-0（只是一个想法）到Stage-4（将进入babel插件很快）。

**babel-preset-env**
babel-preset-env确定特定环境所需的Babel插件和polyfill。
如果没有配置，它将加载将es2015 +移植到es5所需的所有插件（包括es2015，es2016和es2017）。
使用 target 选项时，它仅加载在特定目标上运行所需的插件。
使用BuiltIn选项时，它仅使用目标中未内置的babel-polyfill。
不适用于babel-transform-runtime（截至2017年11月）

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

### 如何在 JavaScript 中实现不可变对象？

- 深克隆
  - 浅复制用 Object.assign() 或者 扩展运算符
  - 对多层嵌套的引用类型，浅复制会产生副作用
  - JSON.parse 实现深克隆的坑(序列化和反序列化)
    - 函数无法克隆
    - 对象有循环引用，会报错
    - 特殊对象无法复制
      - Date 对象无法复制
      - 正则对象无法复制
    - new Array(4) 数组复制错误
    - 构造函数指向错误
  - 如何实现自己的 深拷贝
    - 处理上面的坑
    - 维护两个储存循环引用的数组
- immutable.js 完全实现了一套数据结构
- immer，利用 Proxy
  - 搞一个拷贝对象，如果修改，修改那个拷贝对象，返回也只返回那个拷贝对象
  - 维护一个是否修改过 状态
  - Reflect.get(target, key, receiver)
  - 浅拷贝


```js
/**
* deep clone
* @param  {[type]} parent object 需要进行克隆的对象
* @return {[type]}        深克隆后的对象
*/
const clone = parent => {
  // 维护两个储存循环引用的数组
  const parents = [];
  const children = [];

  const _clone = parent => {
    if (parent === null) return null;
    if (typeof parent !== 'object') return parent;

    let child, proto;

    if (isType(parent, 'Array')) {
      // 对数组做特殊处理
      child = [];
    } else if (isType(parent, 'RegExp')) {
      // 对正则对象做特殊处理
      child = new RegExp(parent.source, getRegExp(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (isType(parent, 'Date')) {
      // 对Date对象做特殊处理
      child = new Date(parent.getTime());
    } else {
      // 处理对象原型
      proto = Object.getPrototypeOf(parent);
      // 利用Object.create切断原型链
      child = Object.create(proto);
    }

    // 处理循环引用
    const index = parents.indexOf(parent);

    if (index != -1) {
      // 如果父数组存在本对象,说明之前已经被引用过,直接返回此对象
      return children[index];
    }
    parents.push(parent);
    children.push(child);

    for (let i in parent) {
      // 递归
      child[i] = _clone(parent[i]);
    }

    return child;
  };
  return _clone(parent);
};

```

- Buffer、Promise、Set、Map 还需要做特殊处理