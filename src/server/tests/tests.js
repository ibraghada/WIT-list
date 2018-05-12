// Controllers Tests:

// GET Tests:
require('./controllers/getOrgs')();
require('./controllers/getCats')();
require('./controllers/getSubCats')();
require('./controllers/getOrgsSubCats')();

// POST Tests:
require('./controllers/postOrg')();

// Database Queries Tests:

// GET Tests:

// Insert Tests:
require('./database/insertOrg')();
require('./database/insertSubCats')();
