const test = require('tape');
const selectOrgsSubCats = require('../../database/queries/selectOrgsSubCats');

const selectOrgsSubCatsTest = () => {
  test('SELECT ORGS SUB CATS TEST:', t => {
    selectOrgsSubCats((err, res) => {
      if (err) {
        t.fail();

        return t.end();
      }

      const firstRow = {
        id: 1,
        org_id: 1,
        sub_cat_id: 1,
        title: 'Not-for-profit / charity',
        parent_cat: 1
      };

      t.equal(res.rowCount, 13, 'Test Should Return With Row Count Equal [13]');
      t.deepEqual(res.rows[0], firstRow, 'Test Should Return With First Row Equal [const firstRow]');

      return t.end();
    });
  });
};

module.exports = selectOrgsSubCatsTest;
