# oop
## 理解对象
```
var p = new Object()
var o = {}
```

## 属性类型
1. 数据属性
```javascript
var person = {}
Object.defineProperty(person, 'name', {
  configurable: false,
  value: 'jason',
  writable: false,
  enumberable: false
})
```

2. 访问器属性  
包含四个属性，[[Configurable]] [[Enumberable]] [[Get]] [[Set]] 
*IE8+支持*
```javascript
var person = {}
Object.defineProperty(person, 'name', {
  configurable: false,
  enumerable: false,
  get: function(value) {

  },
  set: function(value) {

  }
})
```

## ES5新增
```javascript
Object.definePropertyDescriptor() //读取属性访问器属性
Object.defineProperties() //定义多个属性
```
## 创建对象
1. 工厂模式
```javascript
function createPersion(name, age, job){
      var o = new Object();
      o.name = name;
      o.age = age;
      o.job = job;
      o.sayName = function(){
        alert(this.name)
      }
      retrun o;
}
```

2. 构造函数
```javascript
function Person(name, age, job){
      this.name = name;
      this.age = age;
      this.job = job;
      this.sayName = function() {
        alert(this.name)
      }
}
```
*优点：*
  > 没有显示的创建对象  
  > 没有return语句
  > 

  *缺点：*
    1. 每个方法都要在实例上创建一遍

3. 原型模式
> 所有实例共享原型对象的属性和方法