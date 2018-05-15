const test = require('tape');
const selectSubCats = require('../../database/queries/selectSubCats');

const selectSubCatsTest = () => {
  test('SELECT SUB CATS TEST:', t => {
    selectSubCats((err, res) => {
      if (err) {
        t.fail();

        return t.end();
      }

      const firstRow = {
        id: 1,
        title: 'Not-for-profit / charity',
        parent_cat: 1
      };

      const lastRow= {
        id: 40,
        title: 'Founders',
        parent_cat: 4
      };

      t.equal(res.rowCount, 40, 'Test Should Return With Row Count Equal [40]');
      t.deepEqual(res.rows[0], firstRow, 'Test Should Return With First Row Equal [const firstRow]');
      t.deepEqual(res.rows[39], lastRow, 'Test Should Return With Last Row Equal [const lastRow]');

      return t.end();
    });
  });
};

module.exports = selectSubCatsTest;
