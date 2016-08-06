import * as validation from 'utils/validator';
import memoize from 'lru-memoize';

const nameInput = [
  validation.valueRequired,
  validation.containsTwoWords,
];

const textInput = [
  validation.valueRequired,
];

const ratingInput = [
  validation.containsValidRating,
  validation.valueRequired,
];

const formValidation = validation.createValidator({
  nameInput,
  textInput,
  ratingInput,
});

const validator = memoize(10)(formValidation);
export default validator;
