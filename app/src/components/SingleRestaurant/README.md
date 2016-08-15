## SingleRestaurant Component
A component that represents a single restaurant, showing a panel of information for the restaurant and a header with the restaurants name.

### Example

```js
<SingleRestaurant restaurant={myRestaurant} />
```

### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **restaurant**    | Object   |             | An object representing a restaurant (see below).


### Other Information
Presentational component to show a single restaurant.

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
