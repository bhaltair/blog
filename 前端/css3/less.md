## mixin

```css
 声明不带参混合
.of() {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

调用方式 .of()

带参混合
.fsc(@fontSize,@color){
  color: @color;
  font-size: @fontSize;
}

调用方式
@position: 90% center;
.imgicon(@position,@size);
```