const dbConnection = require('../dbConnection');

const approveOrg = ({ id, accepted }, cb) => {
  const query = {
    text: `UPDATE orgs SET accepted=${accepted ? 'FALSE' : 'TRUE'} WHERE id=${id}`
  };

  return dbConnection.query(query, cb);
};

module.exports = approveOrg;
