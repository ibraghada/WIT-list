const selectOrgs = require('../database/queries/selectOrgs');

module.exports = (req, res, next) => {
  selectOrgs((err, orgs) => {
    if (err) {
      return next(err);
    }

    return res.send({ orgs: orgs.rows });
  });
};
