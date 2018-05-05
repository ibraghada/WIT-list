const dbConnection = require('../dbConnection');

const selectSubCats = cb => {
  const query = {
    text:
    'SELECT * FROM sub_cats'
  };
  dbConnection.query(query, cb);
};

module.exports = selectSubCats;
