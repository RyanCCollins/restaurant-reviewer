import * as validation from 'utils/validator';
import memoize from 'lru-memoize';

const nameInput = [
  validation.valueRequired,
];


const textInput = [
  validation.valueRequired,
];

const ratingInput = [
  validation.isAtLeast(1),
  validation.isAtMost(5),
  validation.valueRequired,
];

const formValidation = validation.createValidator({
  nameInput,
  textInput,
  ratingInput,
});

const validator = memoize(10)(formValidation);
export default validator;
