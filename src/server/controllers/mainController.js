const express = require('express');

const router = express.Router();

const getCats = require('./getCats');
const postOrg = require('./postOrg');
const inputsValidator = require('../mw/orgDetailsValidator');

router.get('/categories', getCats);
router.post('/submit-org',inputsValidator, postOrg);

module.exports = router;
