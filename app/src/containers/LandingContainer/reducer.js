import {
  LOAD_IMAGES_SUCCESS,
  LOAD_IMAGES_FAILURE,
  LOAD_IMAGES_INITIATION,
} from './constants';

const initialState = {
  isLoading: false,
  errors: [],
  images: [],
};


const seedData = [
  {
    src: 'https://github.com/RyanCCollins/cdn/blob/master/restaurant-reviewer/restaurantone.jpg?raw=true',
    caption: 'Awesome Restaurant One',
  },
  {
    src: 'https://github.com/RyanCCollins/cdn/blob/master/restaurant-reviewer/restauranttwo.jpg?raw=true',
    caption: 'Awesome Restaurant Two',
  },
  {
    src: 'https://github.com/RyanCCollins/cdn/blob/master/restaurant-reviewer/restaurantthree.jpg?raw=true',
    caption: 'Awesome Restaurant Three',
  },
  {
    src: 'https://github.com/RyanCCollins/cdn/blob/master/restaurant-reviewer/restaurantfour.jpg?raw=true',
    caption: 'Awesome Restaurant Four',
  },
  {
    src: 'https://github.com/RyanCCollins/cdn/blob/master/restaurant-reviewer/restaurantfive.jpg?raw=true',
    caption: 'Awesome Restaurant Five',
  },
];

const landing = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_IMAGES_INITIATION:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case LOAD_IMAGES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        images: seedData, // So bad, I know, but this will fake the image data
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

export default landing;
