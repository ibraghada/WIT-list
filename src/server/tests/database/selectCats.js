const test = require('tape');
const selectCats = require('../../database/queries/selectCats');

const selectCatsTest = () => {
  test('test selectCats query', t => {
    selectCats((err, res) => {
      if (err) {
        t.fail();

        return t.end();
      }
      const response = [
        { id: 1, title: 'Org. Type' },
        { id: 2, title: 'Audience' },
        { id: 3, title: 'Funding' },
        { id: 4, title: 'Theme' }
      ];
      t.equal(res.rowCount, 4, 'rowCount should equal 4');
      t.deepEqual(res.rows, response, 'res.rows should equal response');
      return t.end();
    });
  });
};

module.exports = selectCatsTest;
