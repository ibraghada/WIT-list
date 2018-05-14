const supertest = require('supertest');
const app = require('../../app');
const test = require('tape');

const postOrg = () => {
  const validOrgDetails = {
    orgDetails: {
      name: 'Valid Org',
      website: 'validOrgTest.com',
      description: 'Description',
      operating: 'Internationally',
      country: 'Algeria',
      city: 'Gaza',
      type: '3,6',
      audience: '13',
      funding: '21',
      theme: '25'
    }
  };

  const notValidOrgDetails = {
    orgDetails: {
      name: 'Valid Org',
      website: 'validOrgTest.com',
      description: 'Description',
      operating: 'Internationally',
      country: 'Algeria',
      city: 'Gaza',
      type: '',
      audience: '',
      funding: '',
      theme: ''
    }
  };

  test('POST VALID ORG TEST:', t => {
    supertest(app)
      .post('/api/v1/submit-org')
      .send(validOrgDetails)
      .expect(200)
      .end((err, res) => {
        if (err) {
          console.log(err);
          t.fail();
          t.end();
        }
        t.equal(res.statusCode, 200, 'statusCode should equal 200');
        t.equal(res.type, 'application/json', 'should return res.type application/json');
        t.equal(res.body.inserted, true, 'Should return res.inserted = true');

        t.end();
      });
  });

  test('POST NOT-VALID ORG TEST:', t => {
    supertest(app)
      .post('/api/v1/submit-org')
      .send(notValidOrgDetails)
      .expect(200)
      .end((err, res) => {
        if (err) {
          t.fail();
          t.end();
        }
        t.equal(res.statusCode, 200, 'statusCode should equal 200');
        t.equal(res.body.inserted, false, 'req.body.inserted Status should be: False');

        t.end();
      });
  });
};
module.exports = postOrg;
