## RestaurantInfo Component
A component that shows the restaurants info, following specifications for project.

### Example

```js
<RestaurantInfo restaurant={myRestaurant} />
```

### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **restaurant**    | Object   |             | An object describing a restaurant.


### Other Information
Does not error check for bad data.  Is a presentational component ONLY.

```js
const myRestaurant = {
  id: 1,
  name: "The New Magnum Café",
  address: "Jalan M Husni Thamrin 1",
  city: "Jakarta Pusat",
  state:"Daerah Khusus Ibukota Jakarta",
  zip:"23435",
  country: "id",
  phone: "(021) 23580055",
  website: "http://mymagnum.co.id/",
};
```
