# Position

use position to directly point the target element `position` property.

<style>
  .position-demo-1 {
    border: 1px solid;
    text-align: center;
    box-sizing: border-box;
    height: 100px;
  }
</style>

## Example

### format
`static`, `relative`, `absolute`, `fixed`, `sticky`

<div class="relative position-demo-1">
  <div class="absolute" style="background: red; right: 0; top: 0; width: 50px; height: 50px;"></div>
</div>

```html
<div class="relative" style="height: 100px">
  <div class="absolute" style="background: red; right: 0; top: 0; width: 50px; height: 50px;"></div>
</div>
```

## Work with Breakpoints

### format
- `{position}-{breakpoint}`

you will see below example red block on the left when your device width is greater than `md` breakpoint.

<div class="relative position-demo-1">
  <div
    class="absolute relative-md"
    style="background: red; right: 0; top: 0; width: 50px; height: 50px;"
  ></div>
</div>

```html

<div class="relative">
  <div
    class="absolute relative-md"
    style="background: red; right: 0; top: 0; width: 50px; height: 50px;"
  ></div>
</div>
```