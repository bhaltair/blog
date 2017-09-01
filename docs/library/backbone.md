轻量级的MVC框架

主要由
模型类 Backbone.Model
视图类     Backbone.Vuew
路由类     Backbone.Router
集合类     Backbone.Collection
历史类     Backbone.History

Backbone的render是需要手动更新的，render函数是需要自己实现的。
我们对每个模型实例化对象的操作，都可以通过事件函数被监听到。
其中，集合的add与remove也有对应的事件监听，通常写在initiallize函数里面

Backbone的事件模块是基于观察者模式实现的。可以跨对象进行监听，比如说View层监听集合层的add事件。



Backbone项目总结
这是一个手机端的热门图片网站，使用Backbone MVC框架进行开发。定义Model Collection View类，在Backbone中，视图就是我们的控制器，我们在这里可以定义render函数，在events中可以定义事件，此外在这个对象中还可以自定义其他方法。

其中,render方法就是模板字符串，设置DOM元素的innerHTML就可以更新视图。
相比VUE的双向绑定，Backbone需要我们手动更新视图，手动完成Model层到View层的渲染。

此外Backbone的路由，是根据hash改变进行视图的更换的，我们只需要定义routes对象的路由规则就可以，最后启动路由。
