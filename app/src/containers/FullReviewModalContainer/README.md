## FullReviewModalContainer Component
A higher order container for showing a full screen modal for a review.

### Example

```js
<FullReviewModalContainer review={myReview} />
```

### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **review**    | Object   |             | An object representing a review (see below).


### Other Information
Higher order component that sits on top of the component for a fullscreen modal review.

Review Model
```js
const myReview = {
  id: 0,
  text: "blah blah blah",
  rating: 5,
  person: "Ryan Collins",
  date: "1/12/2016",
};
```
