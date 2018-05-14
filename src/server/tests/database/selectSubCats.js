const test = require('tape');
const selectSubCats = require('../../database/queries/selectSubCats');

const selectSubCatsTest = () => {
  test('test selectSubCats query', t => {
    selectSubCats((err, res) => {
      if (err) {
        t.fail();

        return t.end();
      }
      const response0 = {
        id: 1,
        title: 'Not-for-profit / charity',
        parent_cat: 1
      };

      const response39= {
        id: 40,
        title: 'Founders',
        parent_cat: 4
      };
      t.equal(res.rowCount, 40, 'rowCount should equal 40');
      t.deepEqual(res.rows[0], response0, 'res.rows0 should equal response0');
      t.deepEqual(res.rows[39], response39, 'res.rows0 should equal response39');
      return t.end();
    });
  });
};

module.exports = selectSubCatsTest;
