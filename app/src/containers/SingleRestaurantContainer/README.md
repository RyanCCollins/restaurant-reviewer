## SingleRestaurantContainer
A container for single restaurants, loading info and reviews for it.

### Example Usage

```js
<SingleRestaurantContainer  />
```
  selectedReviewId: PropTypes.number,
  errors: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  restaurants: PropTypes.array.isRequired,
  params: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  addReviewData: PropTypes.object,

### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **selectedReviewId**    | Number   |             | The currently selected review, if any.
| **errors**    | Array   |             | Errors for the single restaurant container
| **isLoading**    | Boolean   |             | Whether the container is loading its data
| **restaurants**    | Array   |             | An array of restaurants
| **params**    | Object   |             | React router params object
| **actions**    | Object   |             | Redux actions object
| **addReviewData**    | Object   |             | Data for adding a review, if applicable


### Other Information
Higher order component that is loaded by the SingleRestaurantPage, connected to redux store.

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
