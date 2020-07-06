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

> 所有使用可计算属性名的地方，都可以使用 Symbol

```js
let firstName = Symbol('first name')

let person = {
  [firstName]: 'Nicholas'
}
```

## Set Map

- Weak Map 中的 key 必须是一个对象，用于存储对象的弱引用。
  - 如果在弱引用之外不存在其他的强引用，会触发垃圾回收
  - 可以用来跟踪 DOM 元素
- Set 集合是无重复元素的列表

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
- for-of 循环可以持续获取可迭代对象中的值
  - 所有的集合类型、字符串都有默认迭代器
  - 集合对象迭代器
    - entries()，map 集合的默认迭代器
    - keys()
    - values()，数组和 Set 的默认迭代器
- 生成器是一个返回迭代器的特殊函数，定义的时候需要加一个星号，被调用时会自动创建一个迭代器，并通过关键词 yield 来表示每次调用迭代器的 next() 的返回值
  - yield 只能在生成器内部使用

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

## 扩展数组

## Promise

## 代理和反射

## 模块