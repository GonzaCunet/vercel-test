const methods = require("micro-method-router");
export default methods({
  async patch(req, res) {
    res.status(200).send(`It's a PATCH request!`);
  },
});
