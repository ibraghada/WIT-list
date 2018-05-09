const selectCats = require('../database/queries/selectCats');
module.exports = (req, res, next) => {
  selectCats((err, cats) => {
    if (err) {
      return next(err);
    }
    return res.send({ cats: cats.rows });
  });
};
