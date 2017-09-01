这里就不区分es5还是es6了 因为es6通过babel是要编译成es5

## const let
var变量，函数作用域，能重复声明覆盖

## babel
```js
// 转码前
input.map(item => item + 1);

// 转码后
input.map(function (item) {
  return item + 1;
});
```

### babel配置文件
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



## 一个polyfill
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