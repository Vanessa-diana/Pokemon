export const getImage = (objImage) => {
  if (!objImage) return '';
  const { large } = objImage;

  return large;
};

export const iterableArray = (array) => {
  if (!iterableArray.length) return '';

  const dado = array.map((item) => item);

  return dado;
};
