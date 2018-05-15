const supertest = require('supertest');
const app = require('../../app');
const test = require('tape');

const getCatsTest = () => {
  test('GET CATS TEST:', t => {
    supertest(app)
      .get('/api/v1/cats')
      .expect(200)
      .end((err, res) => {
        if (err) {
          t.fail();

          return t.end();
        }

        t.equal(res.statusCode, 200, 'Test Should Return With Status Code Equal [200]');
        t.equal(res.type, 'application/json', 'Test Should Return With Res Type of [application/json]');
        t.equal(res.body.cats.length, 4, 'Test Should Return With Cats Array of Length [4]');
        t.equal(res.body.cats[0].title, 'Org. Type', 'Test Should Return With First Cat Title As [Org. Type]');
        t.equal(res.body.cats[3].title, 'Theme', 'Test Should Return With Last Cat Title As [Theme]');

        return t.end();
      });
  });
};

module.exports = getCatsTest;
