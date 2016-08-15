## AddReviewContainer
A higher-order container that surrounds the add review form.

### Example Usage

```js
<AddReviewContainer  />
```


### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **isAddingReview**    | Bool   |             | Whether you are currently adding a review or not.
| **fields**    | Object   |             | Redux form fields
| **hasFab**    | Bool   |             | Whether the container should show a fab button to add a review.
| **resetForm**    | Function   |             | A callback function to reset the form's state.
