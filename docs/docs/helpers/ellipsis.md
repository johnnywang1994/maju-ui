# Ellipsis

### format
`ellipsis line-{number}`

- allowed {number} values:  
`1-5`

if the line number over 1, add with `multi` to change to using `display: -webkit-box;`.

### Example
```html
<div class="ellipsis line-1" style="width: 10rem">
  This is a text sentence which will be into ...
</div>

<div class="ellipsis multi line-3" style="width: 8rem">
  This is a text sentence which will be into ...
</div>
```

