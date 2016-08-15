## RestaurantPanel Component
A presentational component that represents information for a single restaurant, to be shown on the single restaurant page.

### Example

```js
<RestaurantPanel
  restaurant={myRestaurant}
/>
```

### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **restaurant**    | Object   |             | A restaurant to show information about.


### Other Information
Presentational component only.  Transforms a restaurant model object as show below.

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
