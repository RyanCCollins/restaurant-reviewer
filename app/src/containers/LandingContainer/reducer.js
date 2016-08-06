import {
  LOAD_IMAGES_SUCCESS,
  LOAD_IMAGES_FAILURE,
  LOAD_IMAGES_INITIATION,
} from './constants';

const initialState = {
  isLoading: false,
  errors: [],
  restaurants: [],
};

const seedData = [
  {
    src: 'https://github.com/RyanCCollins/cdn/blob/master/restaurant-reviewer/restauranttwo.jpg?raw=true',
    caption: 'Awesome Restaurant Two',
    name: 'Name Two',
    rating: 3,
    type: 'Japanese',
  },
  {
    src: 'https://github.com/RyanCCollins/cdn/blob/master/restaurant-reviewer/restaurantthree.jpg?raw=true',
    caption: 'Awesome Restaurant Three',
    name: 'Name Three',
    rating: 4,
    type: 'Sushi',
  },
  {
    src: 'https://github.com/RyanCCollins/cdn/blob/master/restaurant-reviewer/restaurantfour.jpg?raw=true',
    caption: 'Awesome Restaurant Four',
    name: 'Name Four',
    rating: 3,
    type: 'Japanese',
  },
  {
    src: 'https://github.com/RyanCCollins/cdn/blob/master/restaurant-reviewer/restaurantfive.jpg?raw=true',
    caption: 'Awesome Restaurant Five',
    name: 'Name Five',
    rating: 4,
    type: 'Japanese',
  },
];

const featured = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_IMAGES_INITIATION:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case LOAD_IMAGES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        restaurants: seedData, // So bad, I know, but this will fake the image data
      });
    case LOAD_IMAGES_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        errors: [...action.error],
      });
    default:
      return state;
  }
};

export default featured;
