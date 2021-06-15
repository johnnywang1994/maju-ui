# Order

- responsive: true

<style>
.order-demo-1 .col {
  text-align: center;
  border: 1px solid;
  box-sizing: border-box;
  padding: 10px 0;
}
</style>

### format
`order-{number}`, `order-first`, `order-last`

### Example

<div class="container order-demo-1">
  <div class="row">
    <div class="col order-2">
      Column 1
    </div>
    <div class="col order-1">
      Column 2
    </div>
  </div>
</div>

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

<div class="container order-demo-1">
  <div class="row">
    <div class="col order-first order-md-2">
      Column 1
    </div>
    <div class="col order-last order-md-1">
      Column 2
    </div>
  </div>
</div>

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