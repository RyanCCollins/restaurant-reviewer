## FullReviewModal Component
A component that shows a review in a full screen modal layer.

### Example

```js
<FullReviewModal
  isOpen={this.isModalOpen}
  onToggleClose={this.handleClose}
  review={myReview}
/>
```
  isOpen,
  onToggleClose,
  review,
### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **isOpen**    | Bool   |             | Whether the layer is open, or just nonexistant.
| **onToggleClose**    | Function   |             | A function to use to close the element.
| **review**    | Object   |             | An object representing one review item.


### Other Information
