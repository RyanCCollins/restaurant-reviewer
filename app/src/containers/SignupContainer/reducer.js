import {
  SIGNUP_DEFAULT_ACTION,
} from './constants';

const initialState = {
  // Initial State goes here!
};

const signupReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        return state;
      default:
        return state;
    }
};

export default signupReducer;
