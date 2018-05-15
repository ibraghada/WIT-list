const test = require('tape');
const insertOrg = require('../../database/queries/insertOrg');

const insertOrgTest = () => {
  const validOrgDetails = {
    name: 'Valid Org',
    website: 'validorgwebsite.com',
    description: 'Valid Org Description',
    operating: 'Locally',
    city: 'Las Vegas',
    country: 'US',
    comments: 'Some Valid Comments'
  };

  const notValidOrgDetails = {
    name: null,
    website: 'notvalidorgwebsite',
    description: null,
    operating: 'Locally',
    city: 'Las Vegas',
    country: 'US',
    comments: 'Some Valid Comments'
  };

  test('INSERT VALID ORG TEST:', t => {
    insertOrg(validOrgDetails, (err, res) => {
      if (err) {
        t.fail();

        return t.end();
      }

      t.equal(res.rowCount, 1, 'Test Should Return With Row Count Equal [1]');
      t.deepEqual(res.command, 'INSERT', 'Test Should Return With Command As [INSERT]');

      return t.end();
    });
  });

  test('INSERT A NOT VALID ORG TEST:', t => {
    insertOrg(notValidOrgDetails, err => {
      if (err) {
        t.equal(err.name, 'error', 'Test Should Return With ERROR');
        t.equal(err.table, 'orgs', 'Test Should Return With Table Name: orgs');
        t.equal(err.column, 'name', 'Test Should Return With Failing Column Name: name');

        return t.end();
      }

      t.fail();

      return t.end();
    });
  });
};

module.exports = insertOrgTest;
