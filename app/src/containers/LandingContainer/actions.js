import {
  LOAD_IMAGES_SUCCESS,
  LOAD_IMAGES_FAILURE,
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

// loadImagesFailure :: Error -> {Action}
const loadImagesFailure = (error) => ({
  type: LOAD_IMAGES_FAILURE,
  error,
});


const fakeDelay = () => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      if (true) {
        resolve();
      }
    }, 3000);
  });
};

export const loadImagesAsync = () =>
  (dispatch) => {
    dispatch(loadImagesInitiation());
    fakeDelay()
      .then(() => loadImagesSuccess());
  };
