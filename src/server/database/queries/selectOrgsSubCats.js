const dbConnection = require('../dbConnection');

const selectOrgsSubCats = cb => {
  const query = {
    text:
    'SELECT * FROM orgs_sub_cats INNER JOIN sub_cats on orgs_sub_cats.sub_cat_id = sub_cats.id'
  };
  dbConnection.query(query, cb);
};

module.exports = selectOrgsSubCats;
