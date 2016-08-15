## FilterRestaurants Component
A component that shows two filter buttons to allow filtering of the restaurant lists.

### Example

```js
<FilterRestaurants />
```

### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **locations**    | String   |             | An array of location objects containing a value and id for filtering
| **ratings**    | String   |             | An array of rating objects containing a value and id for filtering
| **onFilterLocations**    | Function   |             | A function to call when a location filter has been selected
| **onFilterRatings**    | Function   |             | A function to call when a rating filter has been selected

  locations,
  ratings,
  onFilterLocations,
  onFilterRatings,

### Other Information
In some ways is a higher order component, although
