## ReviewGrid Component
A component that shows a grid of reviews for a single restaurant object.

### Example

```js
<ReviewGrid reviews={myReviews} onReviewClick={this.handleReviewClick} />
```

### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **reviews**    | Array   |             | An array of reviews for the restaurant.
| **onClickReview**    | Function   |             | A callback function called when a review is clicked.

### Other Information
Presentational only component, used in the single restaurant page.

See the [API repository](https://github.com/RyanCCollins/restaurant-reviewer-api) for more info on the model.
