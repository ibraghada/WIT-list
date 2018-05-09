const selectSubCats = require('../database/queries/selectSubCats');

module.exports = (req, res, next) => {
  selectSubCats((err, subCats) => {
    if (err) {
      return next(err);
    }
    return res.send({ subCats: subCats.rows });
  });
};
