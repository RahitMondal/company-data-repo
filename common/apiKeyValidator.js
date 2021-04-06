const { apiKeys } = require("../apiKeys.json");

const validateApi = (req, res, next) => {
  const { apikey } = req.query;
  if (apikey) {
    let apiValidated = false;
    apiKeys.forEach((curKey) => {
      if (curKey === apikey) {
        apiValidated = true;
      }
    });

    if (apiValidated) next();
    else res.json({ message: "invalid apikey!" });
  } else {
    res.json({ message: "no apikey entered!" });
  }
};

module.exports = validateApi;
