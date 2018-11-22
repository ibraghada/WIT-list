const selectAllOrgs = require('../database/queries/selectAllOrgs');

module.exports = (req, res, next) => {
  selectAllOrgs((err, orgs) => {
    if (err) {
      return next(err);
    }

    return res.send({ orgs: orgs.rows });
  });
};
