# Layout

layout helpers includes many useful layout tools.

<style>
.layout-wrap-demo {
  border: 1px solid;
  box-sizing: border-box;
  padding: 0 10px;
}

.layout-wrap-demo .overlay {
  background: rgba(0, 0, 0, 0.3);
}

.layout-demo-modal-wrapper {
  position: relative;
  height: 500px;
  background: rgba(0, 0, 0, 0.7);
}

.layout-demo-modal-inner {
  background: #fff;
}

.layout-demo-modal-inner > img {
  display: block;
  margin: auto;
}
</style>

## Fullcover
an alias with following css settings, useful when creating popup or something that covers the whole space within its parent element.

### format
`fullcover`
```css
.fullcover {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
```

### Example

<div class="container layout-wrap-demo" style="position: relative;height: 60px;">
  <div class="overlay fullcover"></div>
  Some contents here
</div>

```html
<div class="container" style="position: relative;height: 60px;">
  <div class="overlay fullcover"></div>
  Some contents here
</div>
```


## Flex center
an alias for using flexbox to center child

### format
`flex-center`
```css
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### Example

<div class="flex-center layout-wrap-demo" style="height: 100px;">
  <span>Flex in center</span>
</div>

```html
<div class="flex-center">
  <span>Flex in center</span>
</div>
```


## Align center
an alias for using transform center within parent

- require: not `position: static` in sized parent(width, height exist)

### format
`align-center`
```css
.align-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### Example

<div class="container layout-wrap-demo" style="position: relative; width: 100%; height: 100px;">
  <span class="align-center">Align in center</span>
</div>

```html
<div style="position: relative; width: 100%; height: 100px;">
  <span class="align-center">Align in center</span>
</div>
```

## Clearfix
clearfix will helps you close the float box correctly.

### format
`clearfix`

### Example

 - without `clearfix`
<div class="container layout-wrap-demo">
  <div class="float-right">Float to right</div>
  <div class="float-left">Float to left</div>
</div>
<font color="red">Something outside</font>

 - with `clearfix`
<div class="container clearfix layout-wrap-demo">
  <div class="float-right">Float to right</div>
  <div class="float-left">Float to left</div>
</div>
<font color="red">Something outside</font>

```html
<div class="clearfix">
  <div class="float-right">Float to right</div>
  <div class="float-left">Float to left</div>
</div>
<font color="red">Something outside</font>
```


## Safe Modal
By adding `safe-modal` class, it scales the size of your modal with `vmin` units. So it would never break out!!

### format
`safe-modal`

### Example

<div class="container layout-wrap-demo">
  <div class="layout-demo-modal-wrapper">
    <div class="layout-demo-modal-inner safe-modal">
      <img src="https://fakeimg.pl/400x300/" />
    </div>
  </div>
</div>

```html
<div class="modal-wrapper">
  <div class="safe-modal">
    <img src="https://fakeimg.pl/400x300/" />
  </div>
</div>
```


## Full Breakout
No Matter where the block or image is, this class let them become full page width without the limit to its parent element.

### format
`full-breakout`

### Example

<div class="container layout-wrap-demo">
  Below block is insane...
  <div class="full-breakout" style="height: 100px;background: pink"></div>
</div>

```html
<div class="container">
  Below block is insane...
  <div class="full-breakout" style="height: 100px;background: pink"></div>
</div>
```


## Photofix
use `photofix` to scale img automatically

### format
`photofix`

### Example

<div class="container layout-wrap-demo">
  Below image will always cover into 300x300
  <div class="photofix" style="width: 300px;height: 300px;margin: auto">
    <img src="https://fakeimg.pl/500x300/" />
  </div>
</div>

```html
<div class="container">
  Below image will always cover into 300x300
  <div class="photofix" style="width: 300px;height: 300px">
    <img src="https://fakeimg.pl/500x300/" />
  </div>
</div>
```


## Fix landscape
this class can make the item keep landscape even when screen is in portrait.

useful to make the whole `html` element keep in landscape.

### format
`fix-landscape`
```css
@media only screen and (orientation: portrait) {
  .fix-landscape {
    transform: rotate(90deg) translateY(-100%);
    transform-origin: top left;
  }
}
```

### Example
```html
<html class="fix-landscape">
  <head>
    <title>Website</title>
  </head>
  <body>
    Hello World
  </body>
</html>
```


## Visually hidden
to make an element not `display: none` but unvisible and without space

### format
`visually-hidden`

### Example

<div class="container layout-wrap-demo">
  <p>Name: <input /></p>
  <p>Age: <input /></p>
  <p>Invisible: <input class="visually-hidden" /></p>
</div>

```html
<div class="container layout-wrap-demo">
  <p>Name: <input /></p>
  <p>Age: <input /></p>
  <p>Invisible: <input class="visually-hidden" /></p>
</div>
```
