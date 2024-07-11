# javascript

- 创建对象方法：

```javas
methodName : function() {
    // 代码 
}
```

- 如果使用 fullName 属性，不添加 **()**, 它会返回函数的定义
- 函数内部声明的变量（使用 var）是*局部*变量, 如果不使用 var 则是全局变量
- let 声明的变量只在 let 命令所在的代码块 **{}** 内有效，在 **{}** 之外不能访问。
- 在相同的作用域或块级作用域中，不能使用 **let** 关键字来重置 **var** 关键字声明的变量，**let** 关键字在不同作用域，或不同块级作用域中可以重新声明赋值，但相同作用域不可以
- 使用 const 定义的对象或者数组，其实是可变的。const是块级作用域
- var 关键字定义的变量可以在使用后声明
- <button onclick="getElementById('demo').innerHTML=Date()">现在的时间是?</button>
- 在方法中，this 表示该方法所属的对象。
- 如果单独使用，this 表示全局对象。
- 在函数中，this 表示全局对象。
- 在函数中，在严格模式下，this 是未定义的(undefined)。
- 在事件中，this 表示接收事件的元素。
- 类似 call() 和 apply() 方法可以将 this 引用到任何对象。





- 使用小写文件名



