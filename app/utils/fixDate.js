const fixDate = (date) => {
  const dateParts = date.split('/');
  const [a, b, c] = dateParts;
  return [b, a, c].join('/');
};

export default fixDate;
