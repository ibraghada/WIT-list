const supertest = require('supertest');
const app = require('../../app');
const test = require('tape');

const getSubCatsTest = () => {
  test('GET SUB CATS TEST:', t => {
    supertest(app)
      .get('/api/v1/sub-cats')
      .expect(200)
      .end((err, res) => {
        if (err) {
          t.fail();

          return t.end();
        }

        t.equal(res.statusCode, 200, 'Test Should Return With Statue Code Equal [200]');
        t.equal(res.type, 'application/json', 'Test Should Return With Res Type of [application/json]');
        t.equal(res.body.subCats.length, 40, 'Test Should Return With Sub Cats Array of Length [40]');
        t.equal(res.body.subCats[0].title, 'Not-for-profit / charity', 'Test Should Return With First Sub Cat Title As [Not-for-profit / charity]');
        t.equal(res.body.subCats[39].title, 'Founders', 'Test Should Return With Last Sub Cat Title As [Founders]');

        return t.end();
      });
  });
};

module.exports = getSubCatsTest;
