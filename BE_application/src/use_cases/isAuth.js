const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
  if (!req.headers.authorization) res.send("not authorized");

  const token = req.headers.authorization.split(" ")[1];
  const accessTokenSecret = "MySuPeR_SeCrEt";

  jwt.verify(token, accessTokenSecret, (err) => {
    if (err) {
      res.send("not authorized");
    } else {
      next();
    }
  });
};

module.exports = isAuth;
