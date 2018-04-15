const express = require('express');

const router = express.Router();

router.get('/v1/a', (req, res) => {
  return res.json({ msg: 'WitList' });
});

module.exports = router;
