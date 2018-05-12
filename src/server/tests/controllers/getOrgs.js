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
        t.equal(res.statusCode, 200, 'statusCode should equal 200');
        t.equal(res.type, 'application/json', 'should return res.type application/json');
        t.equal(res.body.orgs.length, 2, 'should return res.orgs.length of 2');
        t.equal(res.body.orgs[0].name, 'Astia', 'First Org. Name Should Be - Astia');
        t.equal(res.body.orgs[1].name, 'C.W. Developers', 'First Org. Name Should Be - C.W. Developers');

        return t.end();
      });
  });
};

module.exports = getOrgsTest;
