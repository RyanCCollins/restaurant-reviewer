## RestaurantReview Component
A component that shows a review for a restaurant.  Mapped over to show a list of reviews in a grid.

### Example

```js
...
{myReviews.map((item, i) => 
  <RestaurantReview review={item} onReviewClick={this.handleReviewClick.bind(this, i)} />
)}
...
```
  review,
  onReviewClick,

### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **review**    | Object   |             | A single review item to show a review for the restaurant (see details below)
| **onReviewClick**    | Function   |             | A callback function to call when a review is clicked


### Other Information
Presentational only component.  Shows a review with a star rating (1-5), text, name of reviewer and date of review.

```js
const myReview = {
  id: 0,
  text: "blah blah blah",
  rating: 5,
  person: "Ryan Collins",
  date: "1/12/2016",
};
```

The model for reviews is further detailed in the [restaurant reviewer API repo](https://github.com/RyanCCollins/restaurant-reviewer-api).  
