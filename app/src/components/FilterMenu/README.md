## FilterMenu Component
A component that shows a menu to select a filter list item.

### Example

```js
<FilterButton
  menuItems={myItems}
  onSelectItem={this.handleSelectItem}
/>
```

### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **menuItems** | Array |             | An array containing strings, which are selectable items
| **onSelectItem** | Func |             | A function called when selecting an item.

### Other Information
This component is presentational and does not hold any state.
