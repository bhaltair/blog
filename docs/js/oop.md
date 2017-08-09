# oop

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
  > 没有显示的创建对象  
  > 没有return语句