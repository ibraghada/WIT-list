const express = require('express');

const router = express.Router();

const getOrgs = require('./getOrgs');
const getAllOrgs = require('./getAllOrgs');
const getCats = require('./getCats');
const getSubCats = require('./getSubCats');
const getOrgsSubCats = require('./getOrgsSubCats');

const postOrg = require('./postOrg');
const approveOrg = require('./approveOrg');

const inputsValidator = require('../mw/orgDetailsValidator');

router.get('/organizations', getOrgs);
router.get('/all-organizations', getAllOrgs);
router.get('/cats', getCats);
router.get('/sub-cats', getSubCats);
router.get('/orgs-sub-cats', getOrgsSubCats);

router.post('/submit-org', inputsValidator, postOrg);
router.post('/approve-org', approveOrg);

module.exports = router;
