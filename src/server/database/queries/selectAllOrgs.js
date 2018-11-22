const dbConnection = require('../dbConnection');

const selectOrgs = cb => {
  const query = {
    text:
    'SELECT * FROM orgs'
  };

  return dbConnection.query(query, cb);
};

module.exports = selectOrgs;
