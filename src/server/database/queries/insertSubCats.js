const dbConnection = require('../dbConnection');

const insertSubCats = (orgId, subCats, cb) => {
  const newCols = {
    text: 'INSERT INTO orgs_sub_cats(org_id, sub_cat_id) VALUES ',
    values: [orgId]
  };
  let colsCount = 1;

  newCols.text += subCats.map(subCatId => {
    newCols.values.push(subCatId);
    return `($1, $${++colsCount})`;
  });

  return dbConnection.query(newCols, cb);
};

module.exports = insertSubCats;
