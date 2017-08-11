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

## 对象相关API
```javascript
Object.definePropertyDescriptor() //读取属性访问器属性
Object.defineProperties() //定义多个属性
Object.getPrototypeOf() //读原型对象  不用__proto__
hasOwnProperty()  //判断一个属性是否存在于实例中，还是存在于原型上
instanceOf
```
## 创建对象
1. 工厂模式
```javascript
function createPerson(name, age, job){
      var o = new Object();
      o.name = name;
      o.age = age;
      o.job = job;
      o.sayName = function(){
        alert(this.name)
      }
      retrun o;
var person1 = createPerson('Nico', 29, 'Software Engineer')
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

3. *原型模式*
> 所有实例共享原型对象的属性和方法

    * 原型对象上存在constructor属性，指向它的构造函数
    * 构造函数上有一个prototype属性，指向它的原型对象
    * 实例Instance上有一个__proto__指针，指向它的prototype对象
    * 实例上的同名属性，并不会覆盖原型对象上的值，只不过查找值，先从实例上找

4. 寄生构造函数模式  
> 和工厂模式很类似,只不过是用New操作符  
```javascript
function Person(name, age, job){
      var o = new Object();
      o.name = name;
      o.age = age;
      o.job = job;
      o.sayName = function(){
        alert(this.name)
      }
      retrun o;
var person1 = new Person('Nico', 29, 'Software Engineer')
```
*返回的对象与构造函数或者与构造函数的原型属性之间没有关系*

## 理解原型链的查找
先在实例对象上找，如果找不到，那么去原型对象上找，如果原型对象上找不到，那么原型对象的原型上找

## 继承
### 原型式继承
> SubType.prototype = new SuperType()

问题：父类实例上的属性变为现在的原型属性了。

### 组合继承
*最常用的继承模式*
组合继承 = 借用构造函数 + 原型继承
> 使用原型链继承共享的属性和方法，而通过借用构造函数继承实例属性。

```javascript
function Super(name) {
  this.name = name;
  this.colors = ['red', 'blue'];
}
Super.prototype.sayName = function() {
  alert(this.name)
}

function SubType(name, age){
  Super.call(this, name);
  this.age = age;
}

SubType.prototype = new SuperType();

```

*缺点：调用两次父类构造函数*


### 原型式继承
Object.create()

```javascript
function inherit(o){
  function F(){}
  F.prototype = o;
  return new F();
}

```

### 寄生组合式继承
> 组合继承和原型式继承的结合
最理想的继承范式。

1. 创建超类型原型的一个副本 利用Object.creat()
2. 为创建的副本添加constructor属性，指向子类构造函数
3. 新创建的对象副本复制给子类型的原型

```javascript
function Super(name) {
  this.name = name;
  this.colors = ['red', 'blue'];
}
Super.prototype.sayName = function() {
  alert(this.name)
}

function SubType(name, age){
  Super.call(this, name);
  this.age = age;
}

//SubType.prototype = new SuperType();  不用这句了

function inheritPrototype(sub,Super){
  var proto = inherit(Super.prototype);
  proto.constructor = sub;
  sub.prototype = proto;
}

inheritPrototype(SubType, Super);

SubType.prototype.sayAge = function() {
  alert(this.age);
}


```

优点： 只调用一次父类构造函数，避免了在SubType.prototype上面创建不必要的属性；而且还能正常用instanceof和isPrototypeOf()


## Object.Prototype
```
constructor
hasOwnProperty
isPrototypeOf
toLocaleString
toString
valueOf
```