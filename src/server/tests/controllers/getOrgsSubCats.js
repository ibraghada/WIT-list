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
        t.equal(res.statusCode, 200, 'statusCode should equal 200');
        t.equal(res.type, 'application/json', 'should return res.type application/json');
        t.equal(res.body.orgsSubCats.length, 8, 'should return res.orgsSubCats.length of 8');
        t.equal(res.body.orgsSubCats[0].org_id, 1, 'First orgSubCat org_id Shoud Be: 1');
        t.equal(res.body.orgsSubCats[4].org_id, 2, 'First orgSubCat org_id Shoud Be: 2');

        return t.end();
      });
  });
};

module.exports = getOrgsSubCats;
