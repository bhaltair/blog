## ios 的 scroll
iOS 5 之后开始支持 Native Scrolling，为 Web App 带来媲美原生应用的滚动体验。使用十分方便只要在 CSS 中加入：

.wrapper {
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
## position

## 选择器

### 选择器优先级

## @ 规则

### @charset
### @keyframes
### @fontface
### @supports
### @media
### @import

## CSS 盒模型

### content-box

### border-box

## L-V-H-A

## rgba 和 opacity

## 响应式设计

## flex

## grid

## css3 动画
### 理论知识
### transition
### animation

## 水平垂直居中的 10 种方式

## translateZ 硬件加速原理


## IFC 

Inline Formatting Contexts（行内级格式化上下文），IFC 只有在一个块级元素中仅包含内联级别元素时才会生成。

## BFC
        父元素设置overflow: hidden
        父元素float为left或者right
        position为absolute或者fixed
        display为inline-block5
          
## CSS 的布局模型

- Flow Model：流动模型
块状元素、内联元素以及父子元素的默认展示形式
- Float Model：浮动模型
父元素的高度无法自适应，因为浮动子元素脱离了文档流
- Layer Model：层模型
层模型有 3 中形式，absolute、fixed 可以使元素脱离文档流


## selector
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

## 伪类
```css
@规则
@charset
@import
@media
@font-face
@keyframes

伪类
:active
:checked
:disabled
:enabled
:fist-child
:focus
:hover
:not
:nth-child


伪元素
::after
::placeholder
```

## css 单位
* px
* rem
* em
* vw & vh // vmin & vmax
* %

## css 实例

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
## css 参考

### CSS-Inspiration
https://chokcoco.github.io/CSS-Inspiration/#/./init

### CSS-Tricks
https://qishaoxuan.github.io/css_tricks/

## 综合应用

### 浮层设计

### 两栏布局

### 三栏布局

### iOS 开关