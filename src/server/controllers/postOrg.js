module.exports = (req, res, next) => {
  const { orgDetails } = req.body;
  console.log(orgDetails);
  res.send({ status: 's' });
};
