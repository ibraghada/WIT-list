// Controllers Tests:

// GET Tests:
require('./controllers/getOrgs')();
require('./controllers/getCats')();
require('./controllers/getSubCats')();
require('./controllers/getOrgsSubCats')();

// POST Tests:
require('./controllers/postOrg')();

// Database Queries Tests:

// SELECT Tests (DB)
require('./database/selectCats')();
require('./database/selectSubCats')();
require('./database/selectOrgs')();
require('./database/selectOrgsSubCats')();

// INSERT Tests:
require('./database/insertOrg')();
require('./database/insertSubCats')();
