## RestaurantsGridContainer
A connected container that wraps around the restaurant grid on the landing page.

### Example Usage

```js
<RestaurantsGridContainer  />
// Props are connected through redux, not passed in.
```

  restaurants: state.restaurants.items,
  selectedFilterIndex: state.restaurants.selectedFilterIndex,
  isLoading: state.restaurants.isLoading,
  errors: state.restaurants.errors,
  categories: state.restaurants.categories,
  locations: state.restaurants.locations,
  ratings: state.restaurants.ratings,

### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **restaurants**    | Array   |             | An Array of restaurants to map to the grid items
| **selectedFilterIndex**    | String   |             | Indicates that a filter is selected for an item for cuisine type.
| **isLoading**    | Boolean   |             | Whether the container is loading its data
| **errors**    | Array   |             | An array of errors, if applicable
| **categories**    | Array   |             | Restaurant cuisine categories
| **locations**    | Array   |             | Unique locations of restaurants, used to filter by location
| **ratings**    | Array   |             | Unique ratings of restaurants, used to filter by rating


### Other Information
Connected container component that connects to the redux store for the restaurant grid.

#### Models

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
]
```

Errors:
```js
const errors = [
  {
    id: 0,
    message: 'My message',
  },
  {
    ...
  }
]
```

Categories:
```js

```

Locations:
```js
const locations = [
  {
    id: 0,
    value: 'Brooklyn, NY',
  },
  {
    id: 1,
    value: 'Jakarta',
  }
];
```

Ratings:
```js
const ratings = [
  {
    id: 0,
    value: 'All',
  },
  {
    id: 1,
    value: '1 Star',
  }
];
```
