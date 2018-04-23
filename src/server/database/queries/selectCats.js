const dbConnection = require('../dbConnection');

const selectCats = cb => {
  const query = {
    text:
    'SELECT * FROM sub_cats'
  };
  dbConnection.query(query, cb);
};

module.exports = selectCats;
