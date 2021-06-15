# Float

- responsive: true

<style>
.float-wrap-demo {
  border: 1px solid;
  padding: 20px 0;
  box-sizing: border-box;
}
</style>

### format
`float-{align}`

- allowed {align} values:  
`left, right, none`

### Example

<div class="container float-wrap-demo">
  <div class="float-right">
    Content to Float
  </div>
</div>

```html
<div class="container">
  <div class="float-right">
    Content to Float
  </div>
</div>
```

### format
`float-{breakpoint}-{align}`

<div class="container float-wrap-demo">
  <div class="float-right float-sm-left">
    Content to Float
  </div>
</div>

### Example
```html
<div class="float-right float-sm-left">
  Content to Float
</div>
```