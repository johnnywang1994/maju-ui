# Stretched link

the stretched link is well explained in Bootstrap Documentation, you can see the full detail of this helper [here](https://getbootstrap.com/docs/5.0/helpers/stretched-link/)

To simply understand, it is useful to let `a` link or anything clickable stretched within its parent container for better UX.

<style>
.stretched-wrap-demo {
  border: 1px solid;
  box-sizing: border-box;
  padding: 0 10px;
}
</style>

### format
`stretched-link`

- require: an upper parent container with not `position: static`

### Example

<div class="card stretched-wrap-demo" style="position: relative">
  <h3>Title</h3>
  <p>Content</p>
  <a href="#" class="stretched-link">Something clickable</a>
</div>

```html
<div class="card" style="position: relative">
  <h3>Title</h3>
  <p>Content</p>
  <a href="#" class="stretched-link">Something clickable</a>
</div>
```
