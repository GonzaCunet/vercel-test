const methods = require("micro-method-router");

export default methods({
  async get(req, res) {
    res.status(200).send(`It's a GET request!`);
  },
  async patch(req, res) {
    res.status(200).send(`It's a POST request!`);
  },
});
