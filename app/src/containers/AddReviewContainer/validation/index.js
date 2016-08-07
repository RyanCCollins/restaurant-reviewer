import * as validation from 'utils/validator';
import memoize from 'lru-memoize';

const ratingInput = [
  validation.valueRequired,
];

const textInput = [
  validation.valueRequired,
];

const nameInput = [
  validation.valueRequired,
];

const formValidation = validation.createValidator({
  ratingInput,
  textInput,
  nameInput,
});

const validator = memoize(10)(formValidation);
export default validator;
