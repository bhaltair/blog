## position

## line-height

- line-height 具有遗传的特性，文本属性都具有继承的特性
- line-height的默认值为normal,  
  - normal的推荐设置值为1.0到1.2之间

## z-index

z-index 属性：表示谁压着谁。数值大的压盖住数值小的。

- z-index 值没有单位，就是一个正整数。默认的z-index值是0。
- 只有定位了的元素，才能有z-index值。
  - 不管相对定位、绝对定位、固定定位，都可以使用z-index值
  - 而浮动的元素不能用。
- 如果大家都没有 z-index 值，或者 z-index 值一样，那么在HTML代码里写在后面，谁就在上面能压住别人。
- 定位了的元素，永远能够压住没有定位的元素
- 从父现象：父亲怂了，儿子再牛逼也没用

## 选择器

1. 属性选择器
2. 结构性伪类选择器
  - first-child
  - last-child
  - nth-child
  - nth-of-type
  - only-child
3. UI元素伪类选择器
  - link hover active focus
  - checked 
  - E::selection
4. 使用::after和::before插入元素
  * 插入文字
  > 使用content属性
  * 插入图片
  > content: url(mark.png)


### 选择器优先级

## @ 规则

### @charset
### @keyframes
### @fontface
### @supports
### @media
### @import

## 盒模型

### content-box

### border-box

## L-V-H-A

## rgba 和 opacity

## 响应式设计

## flex

### 概念

- 剩余空间
- 不足空间
- 容器
  - 主轴
  - 交叉轴

### 作用在容器的属性

* flex-direction
* flex-wrap: nowrap | wrap | wrap-reverse;
* flex-flow: row nowrap
* justify-content 属性定义了项目在主轴上的对齐方式。
  - flex-start 向左对齐
  - flex-end 向右对齐
  - center 居中
  - space-betewwn 两端对齐
  - space-around 间隔相等
* align-items 属性定义项目在交叉轴上如何对齐。
* align-content 属性定义了多根轴线的对齐方式

### 作用在元素的属性

flex 是一个简写属性 flex-grow, flex-shrink与flex-basis

* flex-basis
  - 在分配多余空间之前，项目占据的主轴空间
  - 有效值：auto inherit 0px 50%
  - 如果同时设置 width 和 basis 的具体值 ，会忽略 width
  - 如果设置 width 和 basis = auto 时 ，会根据 width 来技术 flex 元素的宽度
  - auto，意思是根据 flex 项目的内容宽度来计算宽度
  - 可以用 min-width 和 max-width 来限制最终的flex-basis
* flex-grow
  - 定义项目的放大比例，默认为0
* flex-shrink
  - 默认为1，即如果空间不足，所有项目将同比例的缩小
  - 设为0，代表不缩小
* order
  - 定义项目的排列顺序。数值越小，排列越靠前，默认为0

## grid

## 动画

### 理论知识
### transition
### animation

## 原理

### translateZ 硬件加速原理

### reset 和 normalize

- CSS Reset是激进的，拍扁一切，类似二向箔的作用。
- Normalize 相对「平和」，只重置掉该重置的样式，按取所需

### font-family

- 分為兩個部分
  - 一個是指定字體”family-name”，另一種是通用字体族名”generic-family”。
- 先后顺序
  - font-family允许您通过给定一个有先后顺序的，由字体名或者字体族名组成的列表来为选定的元素设置字体。

#### 通用字体族名 generic-family

!> 通用字体族名都是关键字，所以不可以加引号

通用字体族名是一种备选机制，用于在指定的字体不可用时给出较好的字体。具体是什么字体是由浏览器设置决定的

- serif 带衬线字体，笔画结尾有特殊的装饰线或衬线
- sans-serif 无衬线字体  即笔画结尾是平滑的字体 
- monospace 等宽字体

> 无衬线字体包括 Arial、Tahoma和 Verdana。Verdana 字体间距较大，适合作为订单金额的字体

#### 字体匹配规则

- 字体匹配算法是针对每个字符的
  - > font-family: Arial, Verdana, 宋体;
  - 比如对于一个汉字来说，即使你的电脑上有 Tahoma 和 Arial 字体，但是由于这两个字体里没有提供汉字字符的字形，因此还是会fallback到“宋体”。
- 当文本中包含了「宋体」中没有对应字形的字符时，会匹配到 sans-serif 这种 generic family
- 通用字体族名，具体是什么字体是由浏览器设置决定的

#### 系统自带字体

- windows
  - 宋体(SimSun) 为默认字体
  - 微软雅黑为 Win 平台上最值得选择的中文字体
- mac
  - 默认西文 San Francisco,
  - 默认中文 PingFang SC
    - 苹果为中国用户打造了一款全新中文字体--苹方
    - 字族共六枚字体：极细体、纤细体、细体、常规体、中黑体、中粗体
    - 常规 PingFangSC-Regular
    - 中黑 PingFangSC-Medium
- ios
  - 默认西文字体：San Francisco
  - 默认中文字体：PingFang SC
  - 不支持微软雅黑字体 如果装了office 就有了微软雅黑
- android
  - 默认西文字体：Roboto 
    - 【Roboto是为Android操作系统设计的一个无衬线字体家族】
  - 默认中文字体：Roboto
- 其他
  - Helvetica Neue 
    - 一种被广泛使用的传奇般的西文字体
    - 是苹果生态中最常用的西文字体
    - Helvetica Neue 为 Helvetica 的改善版本，且增加了更多不同粗细与宽度的字形，共拥有51种字体版本，极大的满足了日常的使用
  - Hiragino Sans GB 冬青黑体
    - 日文字体 Hiragino KakuGothic 的简体中文版
  - WenQuanYi Micro Hei 文泉驿微米黑
    - 照顾到Linux操作系统的体验

#### system-ui

font-family: system-ui 的目的就是在不同的操作系统的 Web 页面下，自动选择本操作系统下的默认系统字体。

- -apple-system 
  - 过渡阶段的厂商前缀。
  - 被 macOS 和 iOS 支持
- BlinkMacSystemFont 
  - 只被 macOS 支持

#### 设置规则

- 先设置 system-ui
- 优先设置英文字体
  - 原因是中文字体基本上都能表示英文，但是英文不一定能表示中文，这样能最大程度的保证中文使用中文字体渲染，英文使用英文字体渲染 
- 具体的字体名在前，字体族名在后防止出现前面的字体都没有的情况
- 操作系统排序 [Mac Win Android iPhone]
- 还要注意向下兼容
  - 如果还需要考虑旧版本操作系统用户的话，不得不加上一些旧版操作系统存在的字体：Mac中的华文黑体、冬青黑体，Win中的黑体等
  - > font-family: Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", STXihei, "Microsoft YaHei", SimHei, "WenQuanYi Micro Hei";
- 最后补充字体族名称

```css
// 简书
font-family: -apple-system,SF UI Text, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
// 分析
// 0 -apple-system 跟随系统
// 1 SF UI Text, Arial 英文字体，绝大多数系统内置
// 2 PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei 中文字体
// 2.1 先苹果 PingFang SC, Hiragino Sans GB，后面的Hiragino Sans GB是为了兼容 macOS 老系统
// 2.2 Win Microsoft YaHei Win 下使用微软雅黑
// 2.3 Linux WenQuanYi Micro Hei 照顾到Linux操作系统的体验
// 3 sans-serif

// 知乎
font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;

// 分析
// 0 -apple-system,BlinkMacSystemFont 跟随系统
// 1 Helvetica Neue 英文字体
// 2 PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei 中文字体
// 3 sans-serif


// github
font-family:  -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif

```

#### 分析一下

```css
// System Font            // https://www.webkit.org/blog/3709/using-the-system-font-in-web-content/
-apple-system,            // OSX ^10.11 & iOS ^9  San Francisco & 苹方

// English First
"Helvetica Neue",         // OSX
"Arial",                  // Win "Helvetica"
//" Segoe UI",            // Win ^8

// Chinese Fallback
"PingFang SC",            // OSX ^10.11 & iOS ^9  苹方（华康信凭黑）
"Hiragino Sans GB",       // OSX ^10.6            冬青黑体
"STHeiti",                // OSX <10.6  & iOS <9  华文黑体
"Microsoft YaHei",        // Win                  微软雅黑
"Microsoft JhengHei",     // Win                  微软正黑
"Source Han Sans SC",     // SourceHan - begin    思源黑体
"Noto Sans CJK SC",
"Source Han Sans CN",
"Noto Sans SC",
"Source Han Sans TC",
"Noto Sans CJK TC",       // SourceHan - end
"WenQuanYi Micro Hei",    // Linux                文泉驿微米黑
SimSun,                   // Win old              中易宋体
sans-serif;               // System Fallback
```

## 布局

![a.png](https://utools-1255885027.cos.ap-shanghai.myqcloud.com/25962FF9-A886-485C-A6BF-823EEC288CD1.jpg)

## IFC 

Inline Formatting Contexts（行内级格式化上下文），IFC 只有在一个块级元素中仅包含内联级别元素时才会生成。

## BFC
        父元素设置overflow: hidden
        父元素float为left或者right
        position为absolute或者fixed
        display为inline-block5
          
## 布局模型

- Flow Model：流动模型
块状元素、内联元素以及父子元素的默认展示形式
- Float Model：浮动模型
父元素的高度无法自适应，因为浮动子元素脱离了文档流
- Layer Model：层模型
层模型有 3 中形式，absolute、fixed 可以使元素脱离文档流

## 伪类

```css

/* @规则 */
@charset
@import
@media
@font-face
@keyframes

/* 伪类 */
:active
:checked
:disabled
:enabled
:fist-child
:focus
:hover
:not
:nth-child


/* 伪元素 */
::after
::placeholder
```

## 单位
* px
* rem
* em
* vw & vh // vmin & vmax
* %

## 应用

### 字符间距

- letter-spacing
  - 字符间隔    对英文、中文都适用
  - 默认值是normal 即0
- word-spacing
  - 单词间隔
  - 默认值是normal，等同于设置为0
  - 可以用负值 将更为紧凑

### transform-origin

* transform-origin: 50% 50% 0 /这是默认值
* transform-origin: 100% 100% 0 /以右下角为起点
* transform-origin: 0 0 0 /*以左上角为起点
* transform-origin: top left;

### 1像素解决方案

- 主要区别就在于是否可以使用圆角
* 图片实现 border
* 伪元素 + transform实现
* box-shadow + transform实现

1

伪类 + transform
原理是把原先元素的 border 去掉，然后利用 :before 或者 :after 重做 border ，并 transform 的 scale 缩小一半，原先的元素相对定位，新做的 border 绝对定位

2

可以使用postcss-retina插件解决1px的问题，根据DPR缩放不同倍数

### 实体符号

- https://css-tricks.com/snippets/html/glyphs/
- https://brajeshwar.github.io/entities/

### vw 适配

由于浏览器对vw还具有一定的兼容性，其在Android 4.4之下和iOS8以下的版本都存有一定的问题。

使用viewport-units-buggyfill  polyfill

- viewport-units-buggyfill
- postcss-viewport-units
- postcss-px-to-viewport插件

### 使用自定义字体

- 在使用web字体前，请先确认字体是否免费，或是否有该字体的版权；
- 中文字体文件一般较大，有几M或者更大，建议使用工具提取页面中需要的字的字体文件；
- 移动端IOS系统、安卓系统均支持.ttf格式的字体
- WEB字体选择中建议引用.ttf格式字体；

**提取页面所需字体工具**

推荐使用 [字蛛+（Font-spider-Plus）](https://github.com/allanguys/font-spider-plus) 进行字体提取压缩,是一个智能 WebFont 压缩工具，它能自动分析出本地页面和线上页面使用的 WebFont 并进行按需压缩。

**字体格式的转换工具**

为了全面兼容不同浏览器，需要.eot,.woff,.ttf,.svg四种格式的字体文件，但大多数我们得到的可能只有一种格式的字体

可以通过一些在线工具进行格式转换

- fontsquirrel
  - 上传已有的字体文件，然后会生成所有需要的格式文件；
- cloudconvert
  - 全能格式在线转换，适合从一种字体格式转换为另一种；

```css
// 定义web字体
@font-face {
    font-family: 'WebFontName';
    src: url('WebFontName.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
   }

.WebFontName {
  font-family: 'WebFontName'
}
```

### 水平垂直居中的 10 种方式

### ios 的 scroll
iOS 5 之后开始支持 Native Scrolling，为 Web App 带来媲美原生应用的滚动体验。使用十分方便只要在 CSS 中加入：

.wrapper {
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

### input 光标颜色

```css
input{
  color:  #fff;
  caret-color: red;
}
```

### 输入框的选中颜色

### 开启硬件加速

### 禁止输入框填充颜色

### placeholder 字体大小

### 禁止文本缩放

### 清除输入框内阴影

### 禁止用户选择

### 去除点击样式闪动

### 去除图片底部空白

- 把图片设为块级元素
- 设置图片的垂直对齐方式
- 设置父对象的文字大小为0px
- 改变父对象的属性
- 设置图片的浮动属性


### 移动端 1px 像素线
```css
.mod_grid_bottom {
  position: relative;
  border-bottom: none !important;
  &::after {
    content: '';
    position: absolute;
    z-index: 1;
    pointer-events: none;
    background-color: #ddd;
    height: 1px;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    @media only screen and (-webkit-min-device-pixel-ratio: 2) {
      -webkit-transform: scaleY(0.5);
      -webkit-transform-origin: 50% 0%;
    }
  }
}
```

### 自定义滚动条
```css
@mixin scrollbarStyle($width) {
  /* 设置滚动条的样式 */
   ::-webkit-scrollbar {
    width: $width;
  }
   ::-webkit-scrollbar-track:vertical {
    background-color: #FFF;
    &:hover {
      background-color: #E6E7E6;
      -webkit-transition: background-color 1000ms linear;
      -ms-transition: background-color 1000ms linear;
      transition: background-color 1000ms linear;
    }
  }
  /* 滚动条的滑轨背景颜色 */
   ::-webkit-scrollbar-thumb:vertical {
    background-color: #DCDCDC;
    &:hover {
      background-color: #B4B4B4;
      -webkit-transition: background-color 1000ms linear;
      -ms-transition: background-color 1000ms linear;
      transition: background-color 1000ms linear;
    }
  }
  /* 滑块颜色 */
   ::-webkit-scrollbar-button:vertical {
    background-color: #FFF;
  }
  /* 滑轨两头的监听按钮颜色 */
   ::-webkit-scrollbar-corner:vertical {
    background-color: #FFF;
  }
  /* 横向滚动条和纵向滚动条相交处尖角的颜色 */
}
```

[cinwell website](https://codepen.io/ringcrl/pen/GLeoNV ':include :type=iframe width=100% height=400px')

### CSS 文字两端对齐

```css
<style>
div {
  margin:10px 0; 
  width:100px;
  border:1px solid red;
  text-align-last: justify;
}
</style>

<div>姓名</div>
<div>手机号码</div>
<div>验证码</div>
<div>账号</div>

```

### 横向带惯性滚动
```css
.scroll-horizontally-wrap {
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  .container-wrap {
    .container {
      display: inline-block;
      width: 100px;
      .report-cover-wrap {
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
  }
}
```

### 避免横屏切换对字体的调整
```css
.size-adjust {
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  text-size-adjust: 100%;
}
```

### 单行文字超出省略号

固定宽度必须

```css
.overfloat-ellipsis {
  width: 520px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

### 多行文字超出省略号

```css
.wrap {
  width: 100%;
  overflow: hidden;
  display: -webkit-box;   // 将对象作为弹性伸缩盒子模型显示  *必须结合的属性*
  -webkit-box-orient: vertical;   // 设置伸缩盒对象的子元素的排列方式  *必须结合的属性*
  -webkit-line-clamp: 3;   // 用来限制在一个块元素中显示的文本的行数
  word-break: break-all;   // 让浏览器实现在任意位置的换行 *break-all为允许在单词内换行*
}
```
### tabel 水平垂直居中

```css
<div class="container">
  <div class="center"><span>Centered content</span></div>
</div>

.container {
  border: 1px solid #333;
  height: 250px;
  width: 250px;
}
.center {
  display: table;
  height: 100%;
  width: 100%;
}
.center > span {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
```

### 长英文单词强制换行

```css
.break-word {
  word-wrap: break-word;
}

```

### 图片居中

```css
.center-image {
  background: #4a4a4a;
  width: 100px;
  height: 200px;
  border-radius: 4px;
  background-size: contain;
  background-position: 50%;
  background-repeat: no-repeat;
}
```

### 给 html 标签添加类名

- className

``` css
var root = document.documentElement;
root.className += ' myCssClass';
```

- classList

```css
var root = document.getElementsByTagName( 'html' )[0]; // '0' to assign the first (and only `HTML` tag)
root.classList.add('myCssClass');
```

- setAttribute

```css
var root = document.getElementsByTagName( 'html' )[0]; // '0' to assign the first (and only `HTML` tag)
root.setAttribute( 'class', 'myCssClass' )
```

### 浮层设计

### 两栏布局

### 三栏布局

### iOS 开关


## 参考

### CSS-Inspiration
https://chokcoco.github.io/CSS-Inspiration/#/./init

### CSS-Tricks
https://qishaoxuan.github.io/css_tricks/


## css 技巧进阶 
https://github.com/AllThingsSmitty/css-protips

## 30-seconds-of-css 
https://github.com/30-seconds/30-seconds-of-css

## you-neek-to-know-css 
https://github.com/l-hammer/You-need-to-know-css  
https://lhammer.cn/You-need-to-know-css/#/zh-cn/
