const test = require('tape');
const selectOrgsSubCats = require('../../database/queries/selectOrgsSubCats');

const selectOrgsSubCatsTest = () => {
  test('test selectOrgsSubCats query', t => {
    selectOrgsSubCats((err, res) => {
      if (err) {
        t.fail();

        return t.end();
      }
      console.log(res.rows);
      return t.end();
    });
  });
};

module.exports = selectOrgsSubCatsTest;
