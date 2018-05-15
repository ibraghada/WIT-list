const insertOrg = require('../database/queries/insertOrg');
const insertSubCats = require('../database/queries/insertSubCats');

module.exports = (req, res, next) => {
  const { orgDetails } = req.body;

  insertOrg(orgDetails, (insertOrgErr, orgData) => {
    if (insertOrgErr) {
      return next(insertOrgErr);
    }

    const orgId = orgData.rows[0].id;
    const { type, audience, funding, theme } = orgDetails;
    const subCats = (`${type},${audience},${funding},${theme}`);
    const subCatsArr = subCats.split(',,').join(',').split(',');
    const subCatsIntsArr = subCatsArr.map(value => {
      return parseInt(value);
    });

    insertSubCats(orgId, subCatsIntsArr, insertSubCatsErr => {
      if (insertSubCatsErr) {
        return next(insertSubCatsErr);
      }

      return res.send({ inserted: true });
    });
  });
};
