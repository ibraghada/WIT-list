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
        t.equal(res.statusCode, 200, 'statusCode should equal 200');
        t.equal(res.type, 'application/json', 'should return res.type application/json');
        t.equal(res.body.subCats.length, 40, 'should return res.subCats.length of 40');
        t.equal(res.body.subCats[0].title, 'Not-for-profit / charity', 'First SubCat Title Shoud Be: Not-for-profit / charity');
        t.equal(res.body.subCats[39].title, 'Founders', 'First SubCat Title Shoud Be: Founders');

        return t.end();
      });
  });
};

module.exports = getSubCatsTest;
