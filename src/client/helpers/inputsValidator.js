export default inputsObj => {
  const failedKeys = [];

  Object.keys(inputsObj).map(key => {
    !inputsObj[key] && key !== 'comments' && key !== 'funding' ? failedKeys.push(key) : null;
    if (key === 'website' && inputsObj[key]) {
      const exp = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
      const regex = new RegExp(exp);
      if (!inputsObj[key].match(regex)) {
        failedKeys.push(key);
      }
    }
  });

  return failedKeys;
};
