# Layout

layout helpers includes many useful layout tools.


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
```html
<div class="container">
  <div class="overlay fullcover"></div>
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
```html
<div class="flex-center">
  <span>Text in center</span>
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
```html
<div style="position: relative; width: 100%; height: 200px;">
  <span class="align-center">Text in center</span>
</div>
```

## Clearfix
clearfix will helps you close the float box correctly.

### format
`clearfix`

### Example
```html
<div class="clearfix">
  Here is your float content
</div>
```


## Fix landscape
this class can make the item keep landscape even when screen is in portrait.

useful to make the whole `html` element keep in landscape.

### format
`clearfix`
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
```html
<h2 class="visually-hidden">Title for screen readers</h2>
```
