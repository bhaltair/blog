## 跨平台开发

### WebView

为了解决WebView性能差的问题，以React Native为代表的一类框架将最终渲染工作交还给了系


### Flutter

Flutter 从头到尾重写一套跨平台的 UI 框架，包括 UI 控件、渲染逻辑甚至开发语言

渲染引擎依靠跨平台的Skia图形库来实现，依赖系统的只有**图形绘制相关的接口**，可以在最大程度上保证不同平台、不同设备的体验一致性。

## 学习资料

[Flutter 中文网](https://flutterchina.club/)
[Flutter 实战](https://book.flutterchina.club/)
[常用库](https://www.cnblogs.com/yangyxd/articles/9232308.html)

## Dart

### 基本概念

- 所有变量的值都是对象，也就是类的实例。
  - 甚至数字、函数和null也都是对象，都继承自Object类
- Dart没有public、protected和private这些关键字，使用下划线“_”开头的变量或者函数，表示只在库内可见
- Dart支持泛型，List<int>表示包含int类型的列表，List<dynamic>则表示包含任意类型的列表

## 数据类型
```dart
var name = 'Bob'; // 类型推断
int b = 10;
String s = "hello";
bool ss = true;
dynamic name = 'Bob'; // 如果对象不限于单个类型 
String name = 'Bob'; // 明确声明将被推断的类型
// 没有赋初值的变量都会有默认值null
```

## 类

```dart
// 3个成员变量，一个构造方法和一个成员方法
class Person {
  String name;
  int age;
  String gender;
  
  // 构造函数
  Person(this.name, this.age, this.gender);

  sayHello() {
    print("hello, this is $name, I am $age years old, I am a $gender");
  }
}
```