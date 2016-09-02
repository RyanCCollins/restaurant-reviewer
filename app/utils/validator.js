/* Note: used this as a starting place to create the higher order functions
 * https://github.com/rszczypka/swd-p1-meetup/blob/master/common/validation.js
 */

const isIntegerRE = /^\+?(0|[1-9]\d*)$/;
const numberRE = /^(?=.*[0-9]).+$/;
const twoWordsRE = /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/;
const lowercaseRE = /^(?=.*[a-z]).+$/;
const uppercaseRE = /^(?=.*[A-Z]).+$/;
const specialCharRE = /^(?=.*[_\W]).+$/;
const emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


/**
 * @function join
 * @description takes a collection of validation rules, joining into an array
 * @param [function] - an array of functions to call to validate
 * @param value - the value to validate
 * @param data - the data to validate
 * @return error - the first error returned from the validation function
 */
const join = (rules) =>
(value, data) =>
  rules.map(rule =>
    rule(value, data)).filter(error =>
      !!error
    )[0];

const noValue = value =>
  value === undefined ||
    value === null ||
      value === '';

/**
 * @function validateWithRE
 * @description - takes a regular expression and a message and returns a function that will return
 * The message if the re does not pass with the value passed into the curried function.
 * @param {RegExp} = the regular expression to be used to test the value.
 * @param String - the message value to return upon failure
 * @return Function - a function that takes a value and returns a string message if the RE fails.
 */
const validateWithRE = (RE, message) =>
  (value) => {
    if (!RE.test(value)) {
      return message;
    }
    return undefined;
  };

export const minLength = (minimum) =>
  (value) => {
    if (!noValue(value) && value.length < minimum) {
      return `Value must contain at least ${minimum} characters`;
    }
    return undefined;
  };

export const maxLength = (maximum) =>
  (value) => {
    if (!noValue(value) && value.length > maximum) {
      return `Value must be no more than ${maximum} characters in length`;
    }
    return undefined;
  };

export const valueRequired = (value) => {
  if (noValue(value)) {
    return 'Value Required';
  }
  return undefined;
};

export const isAtLeast = (min) =>
  (value) => {
    if (value < min) { return `${value} must be no less than ${min}`; }
    return undefined;
  };

export const isAtMost = (max) =>
  (value) => {
    if (value > max) { return `${value} must be no greater than ${max}`; }
    return undefined;
  };

export const containsSpecialChar = (value) =>
  value &&
    validateWithRE(
      specialCharRE, 'Must contain 1 special character.'
    )(value);

export const isInteger = (value) =>
  value &&
    validateWithRE(
      isIntegerRE,
      'Must be an integer value.'
    )(value);

export const containsNumber = (value) =>
  value &&
    validateWithRE(
      numberRE,
      'Must Contain at least one number'
    )(value);

export const containsLowercase = (value) =>
  value &&
    validateWithRE(
      lowercaseRE,
      'Must contain at least one lowercase letter.'
    )(value);

export const containsUppercase = (value) =>
  value &&
    validateWithRE(
      uppercaseRE,
      'Must contain at least one uppercase letter'
    )(value);

export const containsTwoWords = (value) =>
  value &&
    validateWithRE(
      twoWordsRE,
      'Must contain two words, i.e. full name.'
    )(value ? value.toLowerCase() : '');

export const isEmail = (value) =>
  value &&
    validateWithRE(
      emailRE,
      'Must be a valid email address.'
    )(value);

export const createValidator = (validationRules) =>
  (data = {}) => {
    const errors = {};
    Object.keys(validationRules).forEach((key) => {
      const rule = join([].concat(validationRules[key]));
      const error = rule(data[key], data);
      if (error) {
        errors[key] = error;
      }
    });
    return errors;
  };
