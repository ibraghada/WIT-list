const dbConnection = require('../dbConnection');

const selectOrgs = cb => {
  const query = {
    text:
    'SELECT * FROM orgs WHERE accepted=true'
  };
  dbConnection.query(query, cb);
};

module.exports = selectOrgs;
