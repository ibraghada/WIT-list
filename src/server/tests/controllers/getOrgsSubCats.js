const supertest = require('supertest');
const app = require('../../app');
const test = require('tape');

const getOrgsSubCats = () => {
  test('GET SUB CATS TEST:', t => {
    supertest(app)
      .get('/api/v1/orgs-sub-cats')
      .expect(200)
      .end((err, res) => {
        if (err) {
          t.fail();

          return t.end();
        }

        t.equal(res.statusCode, 200, 'Test Should Return With Statue Code Equal [200]');
        t.equal(res.type, 'application/json', 'Test Should Return With Res Type of [application/json]');
        t.equal(res.body.orgsSubCats.length, 8, 'Test Should Return With Orgs Sub Cats Array of Length [8]');
        t.equal(res.body.orgsSubCats[0].org_id, 1, 'Test Should Return With First Org. ID Equal [1]');
        t.equal(res.body.orgsSubCats[4].org_id, 2, 'Test Should Return With First Org. ID Equal [2]');

        return t.end();
      });
  });
};

module.exports = getOrgsSubCats;
