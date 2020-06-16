### babel
```js
// 转码前
input.map(item => item + 1);

// 转码后
input.map(function (item) {
  return item + 1;
});
```

#### babel配置文件
```js
  {
    "presets": [
      "es2015",
      "react",
      "stage-2"
    ],
    "plugins": []
  }

# ES2015转码规则
$ npm install --save-dev babel-preset-es2015

# react转码规则
$ npm install --save-dev babel-preset-react

# ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个
$ npm install --save-dev babel-preset-stage-0
$ npm install --save-dev babel-preset-stage-1
$ npm install --save-dev babel-preset-stage-2
$ npm install --save-dev babel-preset-stage-3

  
```



### 一个polyfill
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



## array
```js
[].toString
[].join
[].concat
[].pop
[].push 将item插入数组尾部，返回新长度
[].shift
[].unshift  将item插入数组头部，返回新长度
[].slice
[].sort
[].splice
[].reverse

- Array.prototype.indexOf
- Array.prototype.lastIndexOf
- Array.prototype.every
- Array.prototype.some
- Array.prototype.forEach
- Array.prototype.map
- Array.prototype.filter
- Array.prototype.reduce
- Array.prototype.reduceRight
- Array.isArray 
- Array.from
- Arrary.of
- Array.fill
- Array.find


```

## object
```js
- Object.getPrototypeOf
- Object.getOwnPropertyDescriptor
- Object.getOwnPropertyNames
- Object.create  以o为prototype创建新的对象并返回
- Object.defineProperty
- Object.defineProperties
- Object.seal
- Object.freeze
- Object.preventExtensions
- Object.isSealed
- Object.isFrozen
- Object.isExtensible
- Object.keys  属性的遍历

```

## string

```js
String.prototype.trim  去除空格
String.prototype.includes
String.prototype.repeat
startsWidth
endsWith

```

## function
```
Function.prototype.bind(targ, arg1, ...argn)   返回一个新的对象
create

```

## Number
```js
Number.isNaN
```