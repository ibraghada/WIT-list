const express = require('express');

const router = express.Router();

const getCats = require('./getCats');
// const postOrg = require('./postOrg');

router.get('/categories', getCats);
// router.post('/submit-org', postOrg);

module.exports = router;
