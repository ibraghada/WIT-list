const test = require('tape');
const insertSubCats = require('../../database/queries/insertSubCats');

const insertOrgTest = () => {
  test('INSERT ORG SUB CATS TEST:', t => {
    const orgId = 1;
    const subCats = [1,2,3,4,5];
    insertSubCats(orgId, subCats, (err, res) => {
      if (err) {
        t.fail();

        return t.end();
      }

      t.equal(res.rowCount, 5, 'Test Should Return With Row Count Equal [5]');
      t.deepEqual(res.command, 'INSERT', 'Test Should Return With Command As [INSERT]');

      return t.end();
    });
  });
};

module.exports = insertOrgTest;
