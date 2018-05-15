const test = require('tape');
const selectOrgs = require('../../database/queries/selectOrgs');

const selectOrgsTest = () => {
  test('test selectOrgs query', t => {
    selectOrgs((err, res) => {
      if (err) {
        t.fail();

        return t.end();
      }
      const response0 =
        {
          id: 1,
          name: 'Astia',
          website: 'http://www.astia.org/',
          description: 'A not-for-profit organization that offers paid, week-long programs to help female entrepreneurs in technology, life sciences, and clean tech to learn skills for revenue generation, sales, and fundraising. Includes a support network of over 200 investors and 300 startup executives.',
          operating: 'Internationally',
          country: 'United States',
          city: 'California',
          comments: 'This is a testery comment, it exists for building purposes.',
          pending: true,
          accepted: true };
      t.equal(res.rowCount, 2, 'rowCount should equal 2');
      t.deepEqual(res.rows[0], response0, 'res.rows0 should equal response0');
      return t.end();
    });
  });
};

module.exports = selectOrgsTest;
