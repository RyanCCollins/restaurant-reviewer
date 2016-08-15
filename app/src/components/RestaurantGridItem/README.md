## RestaurantGridItem Component
A component that represents a single item in the restaurant grid.

### Example

```js
...
{restaurants.map((rest,index) =>
  <RestaurantGridItem
    key={index}
    restaurant={rest}
    onViewDetails={this.handleViewDetails.bind(this, index)}
  />
)}
```

### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **restaurant**    | Object   |             | A single restaurant object represening the view of the details for an item.
| **onViewDetails**    | Function   |             | A callback function called when the view detail button for a single item is pressed.

### Other Information
Acts only as a presentational component.
