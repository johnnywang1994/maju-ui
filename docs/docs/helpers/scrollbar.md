# Scrollbar

<style>
.scrollbar-wrap-demo {
  border: 1px solid;
  box-sizing: border-box;
  padding: 0 10px;
}

.my-scrollbar {
  --maju-scrollbar-width: 10px;
  --maju-scrollbar-thumb: pink;
  --maju-scrollbar-radius: 10px;
  --maju-scrollbar-bg: transparent;
}
</style>

## Basic
Using the scrollbar for scrollable elements

### format
`scrollbar {direction}`

- allowed {direction} values:  
`vertical horizontal`

### Example

<div
  class="scrollbar vertical"
  style="height: 200px;overflow: auto;"
>
  <div
    style="height: 1000px;background: linear-gradient(to top, red, yellow)"
  ></div>
</div>

```html
<div
  class="scrollbar vertical"
  style="height: 200px;overflow: auto;"
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

<div
  class="hide-scrollbar"
  style="height: 200px;overflow: auto;"
>
  <div
    style="height: 1000px;background: linear-gradient(to top, red, yellow)"
  ></div>
</div>

```html
<div
  class="hide-scrollbar"
  style="height: 200px;overflow: auto;"
>
  <div
    style="height: 1000px;background: linear-gradient(to top, red, yellow)"
  ></div>
</div>
```


## Advanced
We can customize the scrollbar style by overwriting the default variables

<div
  class="my-scrollbar scrollbar vertical"
  style="height: 200px;overflow: auto;"
>
  <div
    style="height: 1000px;background: linear-gradient(to top, red, yellow)"
  ></div>
</div>

```css
/* default variables */
.scrollbar {
  --maju-scrollbar-width: 6px;
  --maju-scrollbar-thumb: #cacaca;
  --maju-scrollbar-radius: 10px;
  --maju-scrollbar-bg: transparent;
}

/* customize your own scrollbar */
.my-scrollbar {
  --maju-scrollbar-width: 10px;
  --maju-scrollbar-thumb: pink;
  --maju-scrollbar-radius: 10px;
  --maju-scrollbar-bg: transparent;
}
```

```html
<div
  class="my-scrollbar scrollbar vertical"
  style="height: 200px;overflow: auto;"
>
  <div
    style="height: 1000px;background: linear-gradient(to top, red, yellow)"
  ></div>
</div>
```
