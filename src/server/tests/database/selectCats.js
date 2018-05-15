const test = require('tape');
const selectCats = require('../../database/queries/selectCats');

const selectCatsTest = () => {
  test('SELECT CATS TEST:', t => {
    selectCats((err, res) => {
      if (err) {
        t.fail();

        return t.end();
      }

      const data = [
        { id: 1, title: 'Org. Type' },
        { id: 2, title: 'Audience' },
        { id: 3, title: 'Funding' },
        { id: 4, title: 'Theme' }
      ];

      t.equal(res.rowCount, 4, 'Test Should Return With Row Count Equal [4]');
      t.deepEqual(res.rows, data, 'Test Should Return With Data Equals [const data]');

      return t.end();
    });
  });
};

module.exports = selectCatsTest;
