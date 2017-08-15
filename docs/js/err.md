# 错误处理

## try-catch

## throw
1. throw new ReferenceError('you didn't cite youre references properly')
2. throw new TypeError
3. 自定义错误
```js
function CustomError(msg){
  this.name = 'CustomError'
  this.message = msg;
}
CustomError.prototype = new Error();
throw new CustomError('My message')
```