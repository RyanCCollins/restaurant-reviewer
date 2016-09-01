## FilterHeading Component
A component that shows a heading with the currently selected filters.

### Example

```js
<FilterHeading isHidden isFiltered filters={currentFilter} />
```

### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **filters**    | Object   |             | An Object whose keys map to set filters, i.e. ratingFilter
| **isHidden**    | Boolean   |             | Boolean value for whether the heading is shown or not.
| **isFiltered**    | Boolean   |             | A boolean value to determine if there is a set filter
