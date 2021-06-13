# Action

action helpers includes user action tools.


## Active scale
this class is just an click/touch effect for better UI.

### format
`active-scale`

### Example
```html
<div class="active-scale" ontouchstart="">
  This is Button with scale effect
</div>
```

> the `:active` pseudo in mobile will somehow been caught by `touch` events, if the effect is not working on mobile touch, try to add `ontouchstart` event on the target. [See Issue](https://stackoverflow.com/questions/3885018/active-pseudo-class-doesnt-work-in-mobile-safari)