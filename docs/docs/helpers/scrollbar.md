# Scrollbar

## Basic
Using the scrollbar for scrollable elements

### format
`scrollbar {direction}`

- allowed {direction} values:  
`vertical horizontal`

### Example
```html
<div
  class="scrollbar vertical"
  style="height: 300px;overflow: auto;"
>
  <div
    style="height: 1000px;background: linear-gradient(to top, red, yellow)"
  ></div>
</div>
```

### format
`hide-scrollbar`

hide the default browser scrollbar

### Example
```html
<div
  class="hide-scrollbar"
  style="height: 300px;overflow: auto;"
>
  <div
    style="height: 1000px;background: linear-gradient(to top, red, yellow)"
  ></div>
</div>
```


## Advanced
We can customize the scrollbar style by overwriting the default variables

```css
/* default variables */
.scrollbar {
  --maju-scrollbar-width: 6px;
  --maju-scrollbar-thumb: #cacaca;
  --maju-scrollbar-radius: 10px;
  --maju-scrollbar-bg: transparent;
}
```
