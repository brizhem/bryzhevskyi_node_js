const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const data = {
    name: user.name,
    email: user.email,
  };
  const signature = "MySuPeR_SeCrEt";

  return jwt.sign(data, signature);
};

module.exports = generateToken;
