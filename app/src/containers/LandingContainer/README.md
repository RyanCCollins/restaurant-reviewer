## LandingContainer
A connect container that wraps over the landing page components

### Example Usage

```js
<LandingContainer  />
// Props and actions are connected through redux, not passed into the component
```

### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **restaurants**    | Array   |             | Restaurants, which are provided by the Redux Store.
| **isLoading**    | Bool   |             | Whether the component is loading data or not.
| **errors**    | Array   |             | An array of errors, if there are any.
| **actions**    | Object   |             | Connected actions to mutate state through redux

### Other Information
Higher order connected container, which gets props through the redux store.

#### Models:

Restaurants:
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
];
```

Errors:
```
const errors = [
  {
    id: 0,
    message: 'Error message number 1',
  },
  {
    id: 1,
    message: 'Error message number 2',
  }
];
```
