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
        t.equal(res.statusCode, 200, 'statusCode should equal 200');
        t.equal(res.type, 'application/json', 'should return res.type application/json');
        t.equal(res.body.cats.length, 4, 'should return res.cats.length of 4');
        t.equal(res.body.cats[0].title, 'Org. Type', 'First Cat Title Shoud Be: Org. Type');
        t.equal(res.body.cats[3].title, 'Theme', 'First Cat Title Shoud Be: Theme');

        return t.end();
      });
  });
};

module.exports = getCatsTest;
