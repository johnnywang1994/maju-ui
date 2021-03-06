# Ellipsis

<style>
.ellipsis-wrap-demo {
  border: 1px solid;
  box-sizing: border-box;
  padding: 0 10px;
}
</style>

## Basic
you can use `ellipsis` to make text truncation effect

### format
`ellipsis line-{number}`

- require: `display: inline-block` or `display: block`
- allowed {number} values:  
`1-3`

if the line number over 1, add with `multi` to change to using `display: -webkit-box;`.

### Example

 - line 1:
<div class="ellipsis line-1 ellipsis-wrap-demo" style="width: 10rem">
  This is a text sentence which will be into ellipsis
</div>

 - multi lines:
<div class="ellipsis multi line-3 ellipsis-wrap-demo" style="width: 10rem">
  This is a text sentence which will be into ellipsis and overflow will into ellipsis and overflow will into ellipsis
</div>

```html
<div class="ellipsis line-1" style="width: 10rem">
  This is a text sentence which will be into ellipsis
</div>

<div class="ellipsis multi line-3" style="width: 10rem">
  This is a text sentence which will be into ellipsis and overflow will into ellipsis and overflow will into ellipsis
</div>
```


## Advanced
if we need to make ellipsis over 3 lines, we can easily add the class as following:

```css
.line-4 {
  --maju-ellipsis-line: 4;
}
```
