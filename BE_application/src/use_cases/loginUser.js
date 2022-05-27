const users = require("../db/memory/users_json.json").users;
const schema_login = require("../validator/schema_login");
const validator = require("../validator/validator")(schema_login);
const findUser = require("./findUser");
const generateToken = require("./generateToken");

const login = (user) => {
  const resultValidation = validator(user);

  if (resultValidation !== true) return resultValidation;

  let findedUser = findUser.findByEmail(user.email);

  if (!findedUser) return "User with this email not found";

  if (findedUser.password !== user.password) return "incorrect password";

  return generateToken(findedUser);
};

module.exports = login;
