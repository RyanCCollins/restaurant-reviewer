## ReviewSRonly Component
A component that Allows for a screen reader only overview of the review.

### Example

```js
<ReviewSrOnly review={myReview} />
```

### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **review**    | Object   |             | An object representing a single review (see below for details).

### Other Information
Although not always best practice to make things screen reader only, in this case, it makes sense because it keeps the focus cycling through the modal and gives the end user something to focus on when viewing a full review.

```js
const myReview = {
  id: 0,
  text: "blah blah blah",
  rating: 5,
  person: "Ryan Collins",
  date: "1/12/2016",
};
```
