const dbConnection = require('../dbConnection');

const insertOrg = (orgDetails, cb) => {
  const { name, website, description, operating, country, city, comments } = orgDetails;
  const query = {
    text: 'INSERT INTO orgs (name, website, description, operating, country, city, comments) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
    values: [name, website, description, operating, country, city, comments]
  };
  dbConnection.query(query, cb);
};

module.exports = insertOrg;
