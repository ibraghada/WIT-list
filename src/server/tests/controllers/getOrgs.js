const supertest = require('supertest');
const app = require('../../app');
const test = require('tape');

const getOrgsTest = () => {
  test('GET ORGS TEST:', t => {
    supertest(app)
      .get('/api/v1/organizations')
      .expect(200)
      .end((err, res) => {
        if (err) {
          t.fail();

          return t.end();
        }

        t.equal(res.statusCode, 200, 'Test Should Return With Statue Code Equal [200]');
        t.equal(res.type, 'application/json', 'Test Should Return With Res Type of [application/json]');
        t.equal(res.body.orgs.length, 2, 'Test Should Return With Orgs Array of Length [2]');
        t.equal(res.body.orgs[0].name, 'Astia', 'Test Should Return With First Org. Name As [Astia]');
        t.equal(res.body.orgs[1].name, 'C.W. Developers', 'Test Should Return With Last Org. Name As [C.W. Developers]');

        return t.end();
      });
  });
};

module.exports = getOrgsTest;
