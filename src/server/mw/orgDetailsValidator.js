module.exports = (req, res, next) => {
  const { orgDetails } = req.body;
  const failedKeys = [];
  const exp = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  const regex = new RegExp(exp);

  Object.keys(orgDetails)
    .map(
      key => {
        (!orgDetails[key] && key !== 'comments' && key !== 'funding') ?
          failedKeys.push(key)
          :
          null;
        (key === 'website' && orgDetails[key] && !orgDetails[key].match(regex)) ?
          failedKeys.push(key)
          :
          null;
      }
    );

  !failedKeys.length?
    next()
    :
    res.send({ inserted: false, failedKeys });
};
