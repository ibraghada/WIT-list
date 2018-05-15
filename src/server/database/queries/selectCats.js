const dbConnection = require('../dbConnection');

const selectCats = cb => {
  const query = {
    text:
    'SELECT * FROM cats'
  };

  return dbConnection.query(query, cb);
};

module.exports = selectCats;
