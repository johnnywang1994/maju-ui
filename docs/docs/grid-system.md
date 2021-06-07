# Grid system

Maju UI inspired by Bootstrap with 12 cols grid system.


## Example
use class `col` inside `row`, each column inside `row` will auto scale to fit each other.

```html
<div class="container">
  <div class="row">
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
  </div>
</div>
```

or you can specify the grid space number for both `row` and `col`

### format
`col-{number}`, `row-{number}`

1. `row-12` means `height: 100%;`
2. `col-12` means `width: 100%;`

```html
<div class="container">
  <div class="row">
    <div class="col-6">
      Column 1
    </div>
    <div class="col-6">
      Column 2
    </div>
  </div>
</div>
```

## Work with Breakpoints
there are 6 breakpoints in Maju UI. which are same with Bootstrap 5.x:

- Extra small (xs)
- Small (sm)
- Medium (md)
- Large (lg)
- Extra large (xl)
- Extra extra large (xxl)

you can use each breakpoint with both `col` and `row` as following:

### format
`col-{breakpoint}-{number}`, `row-{breakpoint}-{number}`

```html
<div class="container">
  <div class="row">
    <div class="col-12 col-sm-6" style="height: 200px">
      <div class="row-6">Column 1-1</div>
      <div class="row-6">Column 1-1</div>
    </div>
    <div class="col-12 col-sm-6">
      Column 2
    </div>
  </div>
</div>
```



## Advanced
you can use `row-cols-{number}` to easily define the col size within `row`.

### format
`row-cols-{number}`, `row-cols-auto`
the number means how many parts you want.

```html
<div class="container">
  <div class="row row-cols-2">
    <div class="col">
      Column 1
    </div>
    <div class="col">
      Column 2
    </div>
  </div>
</div>
```

and also with the breakpoint system

### format
`row-cols-{breakpoint}-{number}`, `row-cols-{breakpoint}-auto`

```html
<div class="container">
  <div class="row row-cols-md-3 row-cols-lg-4">
    <div class="col">
      Column 1
    </div>
    <div class="col">
      Column 2
    </div>
    <div class="col">
      Column 3
    </div>
    <div class="col">
      Column 4
    </div>
  </div>
</div>
```