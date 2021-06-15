# Text

<style>
.texting-wrap-demo {
  border: 1px solid;
  box-sizing: border-box;
  padding: 10px 0;
}
</style>

## text-align, text-decoration, white-space, text-transform

### format
`text-{type}`

- allowed {type} value:  
 1. text-align: `center, left, right, justify`
  - responsive: true
 2. text-decoration: `over, under, through`
  - responsive: fasle
 3. white-space: `wrap, nowrap`
  - responsive: fasle
 4. word-break: `break-all, break-word, keep`
  - responsive: fasle
 5. text-transform: `upper, lower, capitalize`
  - responsive: fasle

### Example

<div class="price texting-wrap-demo">
  <span class="origin text-through">$9.99</span>
  $4.99
</div>

```html
<div class="price">
  <span class="origin text-through">$9.99</span>
  $4.99
</div>
```

### Example

<div class="text-nowrap texting-wrap-demo" style="width: 8rem;">
  This text should overflow the parent.
</div>

```html
<div class="text-nowrap" style="width: 8rem;">
  This text should overflow the parent.
</div>
```

### Example

 - Text below will break "any word"
<div class="text-break-all texting-wrap-demo" style="width: 20rem;">
  thisisaverylonglonglonglonglongtext thisisanotherlonglonglonglonglongtext
</div>

 - Text below will break "by" words
<div class="text-break-word texting-wrap-demo" style="width: 20rem;">
  thisisaverylonglonglonglonglongtext thisisanotherlonglonglonglonglongtext
</div>

```html
<div class="text-break-all" style="width: 20rem;">
  thisisaverylonglonglonglonglongtext thisisanotherlonglonglonglonglongtext
</div>

<div class="text-break-word" style="width: 20rem;">
  thisisaverylonglonglonglonglongtext thisisanotherlonglonglonglonglongtext
</div>
```

### Example

<div class="text-upper texting-wrap-demo">
  This text go uppercased.
</div>

```html
<div class="text-upper">
  This text go uppercased.
</div>
```


## font-weight, font-style

### format
`fw-{state}`, `fst-{state}`

- allowed {state} value:  
 1. font-weight: `bold, bolder, normal, lighter`
  - responsive: true
 2. font-style: `italic, normal`
  - responsive: fasle

### Example

<div class="container texting-wrap-demo">
  <div class="fw-md-bold">
    This text go bold in PC, noraml in mobile
  </div>

  <div class="fw-lighter">
    This text go light.
  </div>

  <div class="fst-italic">
    This text go italic.
  </div>
</div>

```html
<div class="fw-md-bold">
  This text go bold in PC, noraml in mobile
</div>

<div class="fw-lighter">
  This text go light.
</div>

<div class="fst-italic">
  This text go italic.
</div>
```