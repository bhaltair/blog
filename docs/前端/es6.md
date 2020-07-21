# ES6
## 块级作用域绑定

- var 变量声明，提到函数的顶部，可以看出声明和赋值

```js
function f() {
  {
    let x;
    {
      // this is ok since it's a block scoped name
      const x = "sneaky";
      // error, was just defined with `const` above
      x = "foo";
    }
    // this is ok since it was declared with `let`
    x = "bar";
    // error, already declared above in this block
    let x = "inner";
  }
}
```

## 字符串和正则表达式

- 模板字符串
- Unicode
- 正则
  - y 修饰符

```js
// same as ES5.1
"𠮷".length == 2

// new RegExp behaviour, opt-in ‘u’
"𠮷".match(/./u)[0].length == 2

// new form
"\u{20BB7}" == "𠮷"
"𠮷" == "\uD842\uDFB7"

// new String ops
"𠮷".codePointAt(0) == 0x20BB7

// for-of iterates code points
for(var c of "𠮷") {
  console.log(c);
}
```

## 函数

- 箭头函数
  - 没有 `this` 绑定
  - 没有 `arguments` 绑定
- 默认参数
- 剩余参数
- 展开运算符
- 尾调用优化

## 扩展对象

- 对象字面量增强
- 新增方法
  - Object.is()
  - Object.assign()
  - Object.setPrototypeOf() 改变对象原型
  - Supre 引用，简化原型访问

```js
var obj = {
    // Sets the prototype. "__proto__" or '__proto__' would also work.
    __proto__: theProtoObj,
    // Computed property name does not set prototype or trigger early error for
    // duplicate __proto__ properties.
    ['__proto__']: somethingElse,
    // Shorthand for ‘handler: handler’
    handler,
    // Methods
    toString() {
     // Super calls
     return "d " + super.toString();
    },
    // Computed (dynamic) property names
    [ "prop_" + (() => 42)() ]: 42
};
```

## 解构

```js
// list matching
var [a, ,b] = [1,2,3];
a === 1;
b === 3;

// object matching
var { op: a, lhs: { op: b }, rhs: c }
       = getASTNode()

// object matching shorthand
// binds `op`, `lhs` and `rhs` in scope
var {op, lhs, rhs} = getASTNode()

// Can be used in parameter position
function g({name: x}) {
  console.log(x);
}
g({name: 5})

// Fail-soft destructuring
var [a] = [];
a === undefined;

// Fail-soft destructuring with defaults
var [a = 1] = [];
a === 1;

// Destructuring + defaults arguments
function r({x, y, w = 10, h = 10}) {
  return x + y + w + h;
}
r({x:1, y:2}) === 23
```

## Symbol

第 6 种原始类型，前面 5 种是 string、number、boolean、undefined、null

- 注意不要用 new 操作符调用 Symbol
- 可以作为对象的 Key【该数据类型仅有的目的】
- Symbol() 的值是唯一的

```js
// Symbol([description])
let firstName = Symbol('first name')

let person = {
  [firstName]: 'Nicholas'
}

Symbol('foo') === Symbol('foo') // false
```

## Set Map

- Weak Map 中的 key 必须是一个对象，用于存储对象的弱引用。
  - 如果在弱引用之外不存在其他的强引用，会触发垃圾回收
  - 可以用来跟踪 DOM 元素
- Set 集合是无重复元素的列表

**Map**
- 可以将一个二维键值对数组转换成一个 Map 对象
  - > [[ 1, 'one' ],[ 2, 'two' ]]
  - 使用 Array.from 函数可以将一个Map对象转换成一个二维键值对数组
- Map 和 Object 有啥区别？
  - Map 都可以作为一个键或一个值，包括函数、对象、基本类型
    - Object呢，字符串和Symbols作为key
  - Map 可以通过 size 属性获取键值对个数

```js
// Sets
var s = new Set();
s.add("hello").add("goodbye").add("hello");
s.size === 2;
s.has("hello") === true;

// Maps
var m = new Map();
m.set("hello", 42);
m.set(s, 34);
m.get(s) == 34;

// Weak Maps
var wm = new WeakMap();
wm.set(s, { extra: 42 });
wm.size === undefined

// Weak Sets
var ws = new WeakSet();
ws.add({ data: 42 });
// Because the added object has no other references, it will not be held in the set
```

## 迭代器和生成器

- 迭代器对象启用自定义迭代
- Symbol.iterator 用来定义对象的默认迭代器
  - 如果先对象有 `Symbol.iterator` 属性，则此对象为可迭代对象
- 默认迭代器
  - 字符串默认迭代器
    - for-of 迭代
  - 集合对象内置迭代器【Map、Set】
    - entries()，map 集合的默认迭代器
    - keys()
    - values()，数组和 Set 的默认迭代器
- 生成器是一个返回迭代器的特殊函数，定义的时候需要加一个星号，被调用时会自动创建一个迭代器，并通过关键词 yield 来表示每次调用迭代器的 next() 的返回值
  - yield 只能在生成器内部使用
- 用于可迭代对象的语法
  - for-of 循环
  - 展开语法
  - yield*
  - 解构赋值

```js
function *createIerator(items) {
  for (let i = 0; i < items.length; i++) {
    yidld item[i]
  }
}

let iterator = createIerator([1,2,3])

iterator.next() // { value: 1, done: false }
iterator.next() // { value: 2, done: false }
iterator.next() // { value: 3, done: false }
iterator.next() // { value: undefined, done: true }
iterator.next() // { value: undefined, done: true }
```

```typescript
interface IteratorResult {
  done: boolean;
  value: any;
}
interface Iterator {
  next(): IteratorResult;
}
interface Iterable {
  [Symbol.iterator](): Iterator
}
```

```js
var fibonacci = {
  [Symbol.iterator]: function*() {
    var pre = 0, cur = 1;
    for (;;) {
      var temp = pre;
      pre = cur;
      cur += temp;
      yield cur;
    }
  }
}

for (var n of fibonacci) {
  // truncate the sequence at 1000
  if (n > 1000)
    break;
  console.log(n);
}
```

## 类

```js
let methodName = 'sayName‘
class SkinnedMesh extends THREE.Mesh {
  constructor(geometry, materials, name) {
    super(geometry, materials);

    this.idMatrix = SkinnedMesh.defaultMatrix();
    this.bones = [];
    this.boneMatrices = [];
    this.name = name
    //...
  }
  get bones() {
    return this.bones
  }
  set bones(value) {
    this.bones = value
  }  
  [methodName]() {
    console.log(this.name)
  }
  // 等价于 SkinnedMesh.prototype.update
  update(camera) {
    //...
    super.update();
  }
  // 静态方法 等价于 SkinnedMesh.defaultMatrix
  static defaultMatrix() {
    return new THREE.Matrix4();
  }
}
```

## 扩展数组

- 创建数组
  - Array.of()
    - new Array()的一些怪异行为
  - Array.from(类数组对象或可迭代对象) 

## Promise

- Promise 的设计目标是为了改进 JS 的异步编程，比事件系统和回调更好用。
- Promise 编排的任务会被添加到引擎任务队列并在未来执行。
- Promise 有 3 个状态，进行中 pending、已完成 fulfilled、已拒绝 rejected，起始状态是进行中，执行成功会变为已完成，失败变为已拒绝
- 通过 then 方法可以额添加完成处理程序或拒绝处理程序
- 创建 Promise
  - 创建未完成的 Promise，使用 new Promise
  - 创建已处理的 Promise
    - Promise.resolve()
    - Promise.reject()
- 串联 romise （链式）
  - 可以只提供一个错误处理程序，因为错误处理会自动地通过 promise 传播
  - 在 Promise 链中返回 Promise
- 响应多个
  - Promise.all 和 Promise.race()
  - Promise.race 有点特殊 TODO:

```js
function timeout(duration = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    })
}

var p = timeout(1000).then(() => {
    return timeout(2000);
}).then(() => {
    throw new Error("hmm");
}).catch(err => {
    return Promise.all([timeout(100), timeout(200)]);
})
```

## 代理和反射

- 代理 API，可以自定义 JS 底层的非标准特性。
  - 比如修改数组的 length 属性的行为
  - 代理可以拦截 JS 引擎内部的底层对象操作，被拦截后会触发 handler(陷阱函数)
- 反射 API，使开发者可以实现每个代理的默认行为
  - 每个代理陷阱都对应一个默认特性
    - get 对应 Reflect.get()
  - 如果说陷阱函数内，覆写了对象的一些内建特性，如果仍需使用内建特性，可以使用对应的反射 API 方法。

```js
// Proxying a normal object
var target = {};
var handler = {
  get: function (receiver, name) {
    return `Hello, ${name}!`;
  }
};

var p = new Proxy(target, handler);
p.world === "Hello, world!";


```

```js
var handler =
{
  // target.prop
  get: ...,
  // target.prop = value
  set: ...,
  // 'prop' in target
  has: ...,
  // delete target.prop
  deleteProperty: ...,
  // target(...args)
  apply: ...,
  // new target(...args)
  construct: ...,
  // Object.getOwnPropertyDescriptor(target, 'prop')
  getOwnPropertyDescriptor: ...,
  // Object.defineProperty(target, 'prop', descriptor)
  defineProperty: ...,
  // Object.getPrototypeOf(target), Reflect.getPrototypeOf(target),
  // target.__proto__, object.isPrototypeOf(target), object instanceof target
  getPrototypeOf: ...,
  // Object.setPrototypeOf(target), Reflect.setPrototypeOf(target)
  setPrototypeOf: ...,
  // for (let i in target) {}
  enumerate: ...,
  // Object.keys(target)
  ownKeys: ...,
  // Object.preventExtensions(target)
  preventExtensions: ...,
  // Object.isExtensible(target)
  isExtensible :...
}
```

```js
var O = {a: 1};
Object.defineProperty(O, 'b', {value: 2});
O[Symbol('c')] = 3;

Reflect.ownKeys(O); // ['a', 'b', Symbol(c)]

function C(a, b){
  this.c = a + b;
}
var instance = Reflect.construct(C, [20, 22]);
instance.c; // 42
```

## 模块

```js
// lib/math.js
export function sum(x, y) {
  return x + y;
}
export var pi = 3.141593;
```