import {
  LOAD_IMAGES_SUCCESS,
  LOAD_IMAGES_INITIATION,
} from './constants';

// loadImagesInitiation :: None -> {Action}
const loadImagesInitiation = () => ({
  type: LOAD_IMAGES_INITIATION,
});

// loadImagesSuccess :: None -> {Action}
const loadImagesSuccess = () => ({
  type: LOAD_IMAGES_SUCCESS,
});

// fakeDelay :: None -> Promise
const fakeDelay = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('Wooha!!');
    }, 2000);
  });

// loadImagesAsync :: None -> Function -> {Action}
export const loadImagesAsync = () =>
  (dispatch) => {
    dispatch(loadImagesInitiation());
    fakeDelay() // Fake asynchronicity.
      .then(() => dispatch(
        loadImagesSuccess()
      )
    );
  };
