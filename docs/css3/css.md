## ios的scroll
iOS 5 之后开始支持 Native Scrolling，为 Web App 带来媲美原生应用的滚动体验。使用十分方便只要在 CSS 中加入：

.wrapper {
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}


## BFC
        父元素设置overflow: hidden
        父元素float为left或者right
        position为absolute或者fixed
        display为inline-block5
          

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