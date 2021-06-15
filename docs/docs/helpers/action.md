# Action

action helpers includes user action tools.

<style>
.action-wrap-demo {
  border: 1px solid;
  box-sizing: border-box;
  padding: 0 10px;
  cursor: pointer;
}
</style>

## Active scale
this class is just an click/touch effect for better UI.

### format
`active-scale`

### Example

<div class="active-scale d-inline-block action-wrap-demo user-select-none" ontouchstart="">
  Touch ME
</div>

```html
<div class="d-inline-block user-select-none active-scale" ontouchstart="">
  Touch ME
</div>
```

> the `:active` pseudo in mobile will somehow been caught by `touch` events, if the effect is not working on mobile touch, try to add `ontouchstart` event on the target. [See Issue](https://stackoverflow.com/questions/3885018/active-pseudo-class-doesnt-work-in-mobile-safari)