const selectOrgsSubCats = require('../database/queries/selectOrgsSubCats');

module.exports = (req, res, next) => {
  selectOrgsSubCats((err, orgsSubCats) => {
    if (err) {
      return next(err);
    }
    return res.send({ orgsSubCats: orgsSubCats.rows });
  });
};
