export default inputsObj => {
  const failedKeys = [];
  Object.keys(inputsObj).map(key => {
    !inputsObj[key] && key !== 'comments'? failedKeys.push(key) : null;
  });
  return failedKeys;
};
