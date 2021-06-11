# Spacing

- responsive: true

m: stands for `margin`  
p: stands for `padding`  
t: `top`  
r: `right`  
b: `bottom`  
l: `left`  
x: `left, right`  
y: `top, bottom`

### format
`m-{level}`, `p-{level}`

- {level}: `1-5` or `auto`, each level stands for `4px`.

### Example
```html
<div class="box m-1">
  Content
</div>
```

### format
`m{direction}-{level}`

 - allowed {direction} values:  
  `t, r, b, l, x, y`

### Example
```html
<div class="box mx-auto py-auto">
  Content
</div>
```

### format
`m{direction}-{breakpoint}-{level}`, `p{direction}-{breakpoint}-{level}`

### Example
```html
<div class="box m-1 m-md-2 m-lg-4">
  Content
</div>
```