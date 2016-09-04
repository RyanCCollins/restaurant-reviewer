## StarRating Component
A component that shows as a star rating.

### Example

```js
<StarRating
  value={5}
  label="Restaurant Review Rating"
  editable={false}
/>
```

### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **value**    | Number   |             | The numeric value, i.e. number of stars filled in.
| **label**    | String   |             | A label that acts as an a11y name
| **editable**    | Boolean   |             | Whether the star rating should be editable
| **onEdit**    | Function   |             | Optional callback function for when the rating is changed.

### Other Information
The component can be editable, or not editable.  It should have an onEdit function passed in as a prop if you wish to subscribe to changes.
