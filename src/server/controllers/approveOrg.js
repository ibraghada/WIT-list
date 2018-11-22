const approveOrg = require('../database/queries/approveOrg');

module.exports = (req, res, next) => {
  const { id, accepted } = req.body;

  approveOrg({ id, accepted }, approveErr => {
    if (approveErr) {
      return next(approveErr);
    }

    return res.send({ updated: true });
  });
};
