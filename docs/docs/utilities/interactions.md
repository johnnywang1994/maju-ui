# Interactions

<style>
.action-wrap-demo {
  border: 1px solid;
  padding: 10px 0;
  box-sizing: border-box;
}
</style>

## user-select
- responsive: false

change the content select status interacts with user.

### format
`user-select-{type}`

- allowed {type} values:  
`none, auto, all`

### Example

<div class="user-select-none action-wrap-demo">
  Content cannot be selected
</div>

```html
<div class="user-select-none">
  Content cannot be selected
</div>
```


## pointer-events
- responsive: false

prevents interactions with a pointer (mouse, stylus, touch)

### format
`pe-{type}`

- allowed {type} values:  
`none, auto`

### Example
```html
<div class="pe-none">
  Content cannot triggered point events.
</div>
```