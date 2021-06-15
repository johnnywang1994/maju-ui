# Display

- responsive: true

<style>
.display-demo-1 {
  border: 1px solid;
  padding: 10px;
  box-sizing: border-box;
}

.display-demo-1 p {
  color: red;
  margin: 0;
}
</style>

### format
`d-{state}`

- allowed {state} value:  
`none, flex, block, grid, table, inline-block, inline-flex, inline, table-cell, table-row`

### Example
to hide an DOM by css, easily use `d-none`

<div class="container display-demo-1">
  "p" will be hidden below~
  <p class="d-none">Content will be hide</p>
</div>

```html
<div class="container">
  "p" will be hidden below~
  <p class="d-none">Content will be hide</p>
</div>
```

### format
`d-{breakpoint}-{state}`

### Example
use breakpoints to hide elements in PC as following:

<div class="container display-demo-1">
  "p" will be shown only when screen size over~
  <p class="d-none d-lg-block">Content will be hide</p>
</div>

```html
<div class="container">
  "p" will be shown only when screen size over~
  <p class="d-none d-lg-block">Content will be hide</p>
</div>
```
