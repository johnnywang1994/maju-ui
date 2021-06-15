# Ratio
use the pseudo elements to make an element maintain the aspect ratio, useful for image, background-image or iframe...

## Basic

### format
`ratio ratio-{value}`

- require: a sized parent element(container)
- allowed {value} values:  
`1x1 4x3 16x9 21x9`

### Example

<!-- container -->
<div style="width: 80%;max-width: 500px;margin: auto">
  <!-- wrap aspect ratio item -->
  <div class="ratio ratio-16x9">
    <!-- target item -->
    <iframe
      src="https://www.youtube.com/embed/qZXt1Aom3Cs"
      frameborder="0"
    ></iframe>
  </div>
</div>

```html
<!-- container -->
<div style="width: 80%;max-width: 500px;margin: auto">
  <!-- wrap aspect ratio item -->
  <div class="ratio ratio-16x9">
    <!-- target item -->
    <iframe
      src="https://www.youtube.com/embed/kj0F3stJb8I"
      frameborder="0"
    ></iframe>
  </div>
</div>
```


## Advanced
We can customize the aspect ratio by defining our own css variable value for `--maju-aspect-ratio`.

### Example
```html
<div style="width: 80%;max-width: 500px;margin: auto">
  <!-- define the ratio for 3x2 as following -->
  <div class="ratio" style="--maju-aspect-ratio: calc(2 / 3 * 100%)">
    <iframe src="https://www.youtube.com/embed/kj0F3stJb8I" frameborder="0"></iframe>
  </div>
</div>
```