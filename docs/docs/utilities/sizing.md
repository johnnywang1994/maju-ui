# Sizing

## width, height

- responsive: false

<style>
.sizing-wrap-demo,
.sizing-wrap-demo .box {
  border: 1px solid;
  box-sizing: border-box;
}
</style>

### format
`w-{percent}`, `h-{percent}`

- allowed {percent} value:  
`25, 50, 75, 100, auto`

### Example

<div class="container sizing-wrap-demo">
  <div class="box w-25">25%</div>
  <div class="box w-50">50%</div>
  <div class="box w-75">75%</div>
  <div class="box w-100">100%</div>
</div>

```html
<div class="container">
  <div class="box w-25">25%</div>
  <div class="box w-50">50%</div>
  <div class="box w-75">75%</div>
  <div class="box w-100">100%</div>
</div>
```


## max-width, max-height

- responsive: false

### format
`mw-100`, `mh-100`

### Example

means `max-width: 100%`, `max-height: 100%`

```html
<div class="photofix">
  <img class="d-block mw-100" />
</div>
```
