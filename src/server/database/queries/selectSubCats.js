const dbConnection = require('../dbConnection');

const selectSubCats = cb => {
  const query = {
    text:
    'SELECT * FROM sub_cats'
  };

  return dbConnection.query(query, cb);
};

module.exports = selectSubCats;
