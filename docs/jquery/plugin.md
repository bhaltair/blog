# jquery 插件

## 原则套路
1. 总是把插件包装在闭包里
2. 总是返回this 保持链式调用
3. 传给一个option对象
4. 总是为方法、事件和数据定义namespace
5. 单个插件，定义一个$.fn.plugin