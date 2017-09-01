angular实例化对象
通过var app = angular.module返回应用程序对象

控制器
通过app.controller定义控制器，控制器的作用域服务需要注入

事件
Angular的事件回调函数定义在$scope中

JS作用域
ng的{{}}插值符号中可以使用JS表达式，ng-bind指令中也可以使用JS表达式

过滤器
JSON
Currency过滤器
Filter过滤器
自定义过滤器


表单验证
form表单元素设置name属性，会在$scope里面添加响应的Formcontroller

内置指令

ng-init
ng-app
ng-bind
ng-src
ng-href
ng-change
ng-if
ng-class
ng-repeate
ng-switch
ng-show / ng-hide



创建自定义指令
使用app.directive自定义指令，第一个参数时指令名称，驼峰写法，第二个是指令工厂函数。
指令工厂函数返回一个对象，
     
restrict
     指令的restrict为ECMA

template
     外部模板
controller 
     定义数据 $scope
link
     定义业务逻辑

scope
     定义与父作用域的关系



自定义元素内容作用域和父作用域的关系    
     true      相互隔离
     false     默认的，子作用域和父作用域是同一个作用域 
     {}

Scope的值是一个对象，可以使用作用域修饰符。





