## 两个原则
1. DRY
2. KISS




## 减少if分支

```js
/ BAD
if ( eventfade.data( "currently" ) !== "showing" ) {
    eventfade.stop();
}
if ( eventhover.data( "currently" ) !== "showing" ) {
    eventhover.stop();
}
if ( spans.data( "currently" ) !== "showing" ) {
    spans.stop();
}
// GOOD!!
var elems = [ eventfade, eventhover, spans ];
$.each( elems, function( i, elem ) {
    if ( elem.data( "currently" ) !== "showing" ) {
        elem.stop();
    }
});

```

## 警惕匿名函数
> 匿名函数很难被追踪、调试、测试，使用对象字面量来管理，给你的hanlder和callback来命名  

```js
// BAD
$( document ).ready(function() {
    $( "#magic" ).click(function( event ) {
        $( "#yayeffects" ).slideUp(function() {
            // ...
        });
    });
    $( "#happiness" ).load( url + " #unicorns", function() {
        // ...
    });
});
// BETTER
var PI = {
    onReady: function() {
        $( "#magic" ).click( PI.candyMtn );
        $( "#happiness" ).load( PI.url + " #unicorns", PI.unicornCb );
    },
    candyMtn: function( event ) {
        $( "#yayeffects" ).slideUp( PI.slideCb );
    },
    slideCb: function() { ... },
    unicornCb: function() { ... }
};
$( document ).ready( PI.onReady );

```

## 使用对象字面量来封装代码
 
eg. 点击列表中的一项，使用它的id属性，加载一些内容，并且隐藏它的兄弟元素。

```js

//传统的jquery style 
$( document ).ready(function() {
    $( "#myFeature li" ).append( "<div>" ).click(function() {
        var item = $( this );
        var div = item.find( "div" ); 
        div.load( "foo.php?item=" + item.attr( "id" ), function() {
            div.show();
            item.siblings().find( "div" ).hide();
        });
    });
});


// Using an object literal for a jQuery feature
var myFeature = {
    init: function( settings ) {
        myFeature.config = {
            items: $( "#myFeature li" ),
            container: $( "<div class='container'></div>" ),
            urlBase: "/foo.php?item="
        };
        // Allow overriding the default config
        $.extend( myFeature.config, settings );
        myFeature.setup();
    },
    setup: function() {
        myFeature.config.items
            .each( myFeature.createContainer )
            .click( myFeature.showItem );
    },
    createContainer: function() {
        var item = $( this );
        var container = myFeature.config.container
            .clone()
            .appendTo( item );
        item.data( "container", container );
    },
    buildUrl: function() {
        return myFeature.config.urlBase + myFeature.currentItem.attr( "id" );
    },
    showItem: function() {
        myFeature.currentItem = $( this );
        myFeature.getContent( myFeature.showContent );
    },
    getContent: function( callback ) {
        var url = myFeature.buildUrl();
        myFeature.currentItem.data( "container" ).load( url, callback );
    },
    showContent: function() {
        myFeature.currentItem.data( "container" ).show();
        myFeature.hideContent();
    },
    hideContent: function() {
        myFeature.currentItem.siblings().each(function() {
            $( this ).data( "container" ).hide();
        });
    }
};
$( document ).ready( myFeature.init );


```

## 模块模式
提供私有变量和函数，暴露出一个有限的API，其中包含返回对象的属性和方法


```js
// The module pattern
var feature = (function() {
    // Private variables and functions
    var privateThing = "secret";
    var publicThing = "not secret";
    var changePrivateThing = function() {
        privateThing = "super secret";
    };
    var sayPrivateThing = function() {
        console.log( privateThing );
        changePrivateThing();
    };
    // Public API
    return {
        publicThing: publicThing,
        sayPrivateThing: sayPrivateThing
    };
})();
feature.publicThing; // "not secret"
// Logs "secret" and changes the value of privateThing
feature.sayPrivateThing();

```



## 错误处理

* try-catch

* throw
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

## iife的写法
```js
// 推荐
~function() {
  // ...
}();

// 推荐
void function() {
  // ...
}();

// 不推荐
(function() {
  // ...
})();

```    



## 函数注释
```js
/**
  *
  * @param {string} p1 参数1的说明
  * @param {string} p2 参数2的说明
  *     那就换行了
  * @return {Object} 返回值描述
  *
  */

  function foo(p1 ,p2, p3){
    //todo
  }


```

## 命名
* 变量使用驼峰命名
* 私有变量使用下划线_开头
* 常量使用大写字母 var HTML_ENTITY = {}


## 返回true的表达式
  * '0'字符串
  * [] 空数组
  * {} 空对象

## 三元操作符替代if条件判断

## && 和 || 


## 一些实践
1. 您的代码应该被划分为功能单元——模块、服务等等。避免将所有代码都放在一个巨大的$(document).就绪()块中。这个概念，松散地称为封装
2. 不要重复你自己。识别功能块之间的相似点，并使用继承技术来避免重复的代码
3. 功能单元应该是松散耦合的，也就是说，一个功能单元应该能够独立存在，并且单元之间的通信应该通过一个消息传递系统来处理，比如定制事件或者发布/订阅。尽量避免在功能单元之间进行直接通信。
* 活用函数重载，根据参数的个数不同，同样的函数名重载不同的方法