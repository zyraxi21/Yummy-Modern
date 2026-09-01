---
layout: post
title: CSS 动画
category: CSS
tags: [css]
---

关于 CSS 动画的快速笔记。

## CSS 动画

CSS3 动画可以让元素逐渐从一种样式过渡到另一种样式。

分为两步：

1. 使用 `@keyframes` 定义动画。
2. 在元素上通过动画属性应用该动画。

你可以逐个设置属性，也可以使用下面的简写形式：

{% highlight css %}
animation: [animation-name] [animation-duration] [animation-timing-function] [animation-delay] [animation-iteration-count] [animation-direction] [animation-fill-mode] [animation-play-state];
{% endhighlight %}

## @keyframes

它定义动画时间轴中每个阶段的样子，由以下内容组成：

* 动画名称，例如 `changeColor`。
* 阶段：从 `0%` 到 `100%`，表示动画的完整过程。
* CSS 属性：在动画时间轴每个阶段定义的 CSS 属性。

下面示例创建名为 `changeColor` 的动画，并应用到 `div:hover`：

{% highlight css %}
@keyframes changeColor {
  0% {
    background: red;
  }
  60% {
    background: blue;
  }
  100%{
    background: green;
  }
}

div:hover{
  animation: changeColor 5s ease .1s;
}
{% endhighlight %}

> 在上例中，也可以使用 `from` 表示 `0%`，使用 `to` 表示 `100%`。

## 动画属性

动画包含以下属性：

1. animation-name
2. animation-duration
3. animation-timing-function
4. animation-delay
5. animation-iteration-count
6. animation-direction
7. animation-fill-mode
8. animation-play-state

### animation-name

动画名称，在 `@keyframes` 中定义。

### animation-duration

动画持续时间，单位为秒（如 `5s`）或毫秒（如 `200ms`）。

### animation-timing-function

动画的速度曲线或节奏：

| 时间函数 | 说明 |
|---|---|
| linear | 动画从开始到结束速度相同 |
| ease | **默认值**。开始慢，中间快，最后又慢下来。 |
| ease-in | 开始慢，结束快。 |
| ease-out | 比 linear 开始更快，结束后变慢。与 ease-in 相反。 |
| ease-in-out | 开始和结束都慢 |
| initial | 将属性设为默认值，即 `ease`。 |
| inherit | 从父元素继承该属性。 |

> 更多细节见 [缓动基础](https://developers.google.com/web/fundamentals/design-and-ui/animations/the-basics-of-easing?hl=en)。

### animation-delay

指定动画何时开始，以秒（s）或毫秒（ms）为单位。

### animation-iteration-count

指定动画播放次数，可能的值包括：

* 指定迭代次数（默认是 1）
* `infinite`：无限重复
* `initial`
* `inherit`

### animation-direction

指定动画正向播放、反向播放，或是交替循环播放。

* `normal`：默认。每个循环都恢复到起始状态（0%），再次正向播放（到 100%）。
* `reverse`：每个循环都恢复到结束状态（100%），再反向播放（到 0%）。
* `alternate`：奇数次循环正向播放（0% 到 100%），偶数次循环反向播放（100% 到 0%）。
* `alternate-reverse`：奇数次循环反向播放（100% 到 0%），偶数次循环正向播放（0% 到 100%）。

### animation-fill-mode

指定动画播放前或播放后的样式是否可见。

* `normal`：默认。动画前后都不应用任何样式。
* `forwards`：动画结束后，保留最终关键帧（100%）定义的样式。
* `backwards`：动画开始前（动画延迟期间），应用初始关键帧（0%）的样式。
* `both`：同时具备 `forwards` 和 `backwards` 的效果。

### animation-play-state

只有两个值：`running` 和 `paused`。

它指定动画是“播放中”还是“已暂停”。**恢复暂停的动画会从暂停位置继续播放。但如果暂停动画，元素样式会恢复初始状态。**

示例：

{% highlight css %}
div:hover {
  animation-play-state: paused;
}
{% endhighlight %}

## 多个动画

可以为选择器添加多个动画，中间用逗号分隔：

{% highlight css %}
div {
  animation: animationA 2s, animationB 2s;
}
{% endhighlight %}

## 参考

* [Imooc 十天精通CSS3](http://www.imooc.com/learn/33)
* [CSS Animation for Beginners](https://robots.thoughtbot.com/css-animation-for-beginners#animation-iteration-count)
* [CSS3 animation-timing-function Property](http://www.w3schools.com/cssref/css3_pr_animation-timing-function.asp)
