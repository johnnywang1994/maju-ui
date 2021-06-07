# Display

- responsive: true

### format
`d-{state}`

- allowed {state} value:  
`none, flex, block, grid, table, inline-block, inline-flex, inline, table-cell, table-row`

### Example
to hide an DOM by css, easily use `d-none`

```html
<p class="d-none">Content will be hide</p>
```

### format
`d-{breakpoint}-{state}`

### Example
use breakpoints to hide elements in PC as following:
```html
<p class="d-none d-lg-block">Content will be hide</p>
```
