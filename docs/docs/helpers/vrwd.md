# Viewport Responsive Unit
use `vrwd` class with `vw`, `vh`, `vmin` together to manage responsive font size for element

## Basic

### format
`vrwd`

### Example
<div style="width: 80%;max-width: 500px;margin: auto;text-align: center;">
  <div class="vrwd">Hello Viewport font size</div>
</div>

```html
<div class="vrwd">Hello Viewport font size</div>
```

## Advanced
By default the basic value of `vrwd` is `16`, you can adjust the basic value to enlarge or scale down the font size by css variable `--maju-vrwd`

### format
`vrwd` + `--maju-vrwd`

### Example - style

<div style="width: 80%;max-width: 500px;margin: auto;text-align: center;">
  <div class="vrwd" style="--maju-vrwd: 20">Hello Viewport font size</div>
</div>

```html
<div class="vrwd" style="--maju-vrwd: 20">Hello Viewport custom basic value</div>
```

### Example - css

<div style="width: 80%;max-width: 500px;margin: auto;text-align: center;">
  <div class="vrwd-welcome vrwd">Hello Viewport font size</div>
</div>

<style>
.vrwd-welcome {
  --maju-vrwd: 20;
}
</style>

```html
<div class="welcome vrwd">Hello Viewport font size</div>
```

```css
.welcome {
  --maju-vrwd: 20;
}
```