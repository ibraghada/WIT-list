const dbConnection = require('../dbConnection');

const insertOrg = (orgData, cb) => {
  const { name, website, description, operating, country, city, comments } = orgData;
  const query = {
    text:
    `BEGIN;
    INSERT INTO orgs (name, website, description, operating, country, city, comments) VALUES ($1, $2, $3, $4, $5, $6, $7);
    INSERT INTO orgs (name, website, description, operating, country, city, comments) VALUES ($1, $2, $3, $4, $5, $6, $7);
    COMMIT;`,
    VALUES: [name, website, description, operating, country, city, comments]
  };
  dbConnection.query(query, cb);
};

module.exports = insertOrg;
