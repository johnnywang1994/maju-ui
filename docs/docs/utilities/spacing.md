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

<style>
.margin-wrap-demo,
.margin-inner-demo {
  border: 1px solid;
  box-sizing: border-box;
}

.margin-inner-demo {
  padding: 10px;
}
</style>

### format
`m-{level}`, `p-{level}`

- {level}: `1-5` or `auto`, each level stands for `4px`.

### Example

<div class="container margin-wrap-demo">
  <div class="box margin-inner-demo m-1">
    Content with margin unit 1 (4px)
  </div>
</div>

```html
<div class="container">
  <div class="m-1">
    Content with margin unit 1 (4px)
  </div>
</div>
```

### format
`m{direction}-{level}`, `p{direction}-{level}`

 - allowed {direction} values:  
  `t, r, b, l, x, y`

### Example

<div class="container margin-wrap-demo">
  <div class="mx-auto text-center" style="width: 300px">
    Block will be margin-auto
  </div>
</div>

```html
<div class="container">
  <div class="mx-auto text-center" style="width: 300px">
    Block will be margin-auto
  </div>
</div>
```

### format
`m{direction}-{breakpoint}-{level}`, `p{direction}-{breakpoint}-{level}`

### Example

<div class="container margin-wrap-demo">
  <div class="m-1 m-md-2 m-lg-4 text-center">
    Block margin will changed by breakpoints
  </div>
</div>

```html
<div class="container">
  <div class="m-1 m-md-2 m-lg-4 text-center">
    Block margin will changed by breakpoints
  </div>
</div>
```