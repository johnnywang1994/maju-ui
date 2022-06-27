# Placement

## justify-content, align-items, place-content

- responsive: false

<style>
.placement-demo-1,
.placement-demo-2,
.placement-demo-1 *,
.placement-demo-2 * {
  text-align: center;
  border: 1px solid;
  box-sizing: border-box;
  padding: 10px 0;
}

.placement-demo-2 {
  height: 200px;
}
</style>

### format
`justify-content-{value}`, `align-content-{value}`, `place-content-{value}`

- allowed {percent} value:  
`center, start, end, between, around, evenly`, place-content has `stretch`

### Example

<div class="container">
  <div class="row justify-content-center placement-demo-1">
    <div class="col-2">
      Column 1
    </div>
    <div class="col-2">
      Column 2
    </div>
  </div>
</div>

```html
<div class="container">
  <div class="row justify-content-center">
    <div class="col-2">
      Column 1
    </div>
    <div class="col-2">
      Column 2
    </div>
  </div>
</div>
```

### Example

<div class="container">
  <div class="row align-content-center placement-demo-2">
    <div class="col-2">
      Column 1
    </div>
    <div class="col-2">
      Column 2
    </div>
  </div>
</div>

```html
<div class="container">
  <div class="row align-content-center">
    <div class="col-2">
      Column 1
    </div>
    <div class="col-2">
      Column 2
    </div>
  </div>
</div>
```

### Example

<div class="container">
  <div class="row place-content-center placement-demo-2">
    <div class="col-2">
      Column 1
    </div>
    <div class="col-2">
      Column 2
    </div>
  </div>
</div>

```html
<div class="container">
  <div class="row place-content-center">
    <div class="col-2">
      Column 1
    </div>
    <div class="col-2">
      Column 2
    </div>
  </div>
</div>
```