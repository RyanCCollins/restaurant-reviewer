const chunkString = (str, length) => str.match(new RegExp('.{1,' + length + '}', 'g'));

const fixLongText = (text) => {
  const textParts = text.split(' ');
  const newTextParts = [];
  textParts.forEach((item) => {
    if (item.length >= 30) {
      newTextParts.push(chunkString(item, 15).join(' '));
    } else {
      newTextParts.push(item);
    }
  });
  return newTextParts.join(' ');
};

export default fixLongText;
