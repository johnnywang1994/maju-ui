# Text Gradient

text gradient effect

<style>
.text-gradient-wrap-demo {
  border: 1px solid;
  box-sizing: border-box;
  padding: 0 10px;
}

.text-gradient-wrap-demo .my-gradient {
  --maju-text-gradient: to bottom, red, yellow;
}
</style>


## Basic

you can add `demo` class to see how to use css variable to define your gradient color.

### format
`text-gradient`

### Example

<div class="container text-gradient-wrap-demo">
  <div class="text-gradient demo" style="font-size: 60px">Hello World</div>
</div>

```html
<div class="text-gradient demo">Hello World</div>
```

## Advanced

We can customize our gradient color by changing the `--maju-text-gradient` variable

### Example

<div class="container text-gradient-wrap-demo">
  <div class="my-gradient text-gradient" style="font-size: 60px">Hello World</div>
</div>

```html
<div class="my-gradient text-gradient">Hello World</div>
```

```css
.my-gradient {
  --maju-text-gradient: to bottom, red, yellow;
}
```