# Text

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
```html
<div class="price">
  <span class="origin text-through">$9.99</span>
  $4.99
</div>
```

### Example
```html
<div class="text-nowrap" style="width: 8rem;">
  This text should overflow the parent.
</div>
```

### Example
```html
<div class="text-break-all" style="width: 20rem;">
  thisisaverylonglonglonglonglongtext thisisanotherlonglonglonglonglongtext
</div>

<div class="text-break-word" style="width: 20rem;">
  thisisaverylonglonglonglonglongtext thisisanotherlonglonglonglonglongtext
</div>
```

### Example
```html
<div class="text-upper">
  This text go uppercased.
</div>
```


## font-weight, font-style

### format
`fw-{state}`, `fst-{state}`

- allowed {state} value:  
 1. font-weight: `bold, bolder, normal, light, lighter`
  - responsive: true
 2. font-style: `italic, normal`
  - responsive: fasle

### Example
```html
<div class="fw-bold fw-sm-normal">
  This text go bold in Mobile, noraml in PC.
</div>

<div class="fw-light">
  This text go light.
</div>

<div class="fst-italic">
  This text go italic.
</div>
```