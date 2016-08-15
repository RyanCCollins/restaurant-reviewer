## RestaurantGrid Component
A presentational component that shows a grid of restaurants.

### Example

```js
<RestaurantGrid 
  restaurants={myRestaurants}
  onViewDetails={this.viewDetails}
/>
```

### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **restaurants**    | Array   |             | An Array of restaurants to map to the grid items
| **onViewDetails**    | Function   |             | A function to call when one item is tapped to view details for that item.


### Other Information
Presentational only component with no state.

```js
const myRestaurants = [
{
  id: 1,
    name: "The New Magnum Café",
    address: "Jalan M Husni Thamrin 1",
    city: "Jakarta Pusat",
    state:"Daerah Khusus Ibukota Jakarta",
    zip:"23435",
    country: "id",
    phone: "(021) 23580055",
    website: "http://mymagnum.co.id/",
  },
  {
    ...
  }
]
```
