
#CSS
=============

###line-height
*****
_
  *line-height*的意义在于指定行内框盒子的高度，对于块级元素，line-height指定的是块级元素内部
 line-boxes的最小高度，对于非替代行内元素，line-height用于计算行内框盒子高度，对于替代行内元素,line-height
 多数是没有影响的。<br/>
line-height的取值可以为具体值/数字/百分比。<br>
*具体值：这个没有疑问，设置多少就是多少，不过一般不推荐。
*数字：实际的line-height的值为当前字体的 数字，比如font-size:60px;line-height:1.5;
        等同于line-height:90px.
*百分比：计算方式与数字是一样的，比如font-size:60px;line-height:150%;
        等同于line-height:90px.