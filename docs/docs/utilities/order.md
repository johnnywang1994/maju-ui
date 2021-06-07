# Order

- responsive: true

### format
`order-{number}`, `order-first`, `order-last`

### Example
```html
<div class="container">
  <div class="row">
    <div class="col order-2">
      Column 1
    </div>
    <div class="col order-1">
      Column 2
    </div>
  </div>
</div>
```

### format
`order-{breakpoint}-{number}`

### Example
```html
<div class="container">
  <div class="row">
    <div class="col order-first order-md-2">
      Column 1
    </div>
    <div class="col order-last order-md-1">
      Column 2
    </div>
  </div>
</div>
```