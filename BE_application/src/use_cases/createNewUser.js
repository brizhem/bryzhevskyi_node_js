const usersJSON = require("../db/memory/users_json.json");
const users = usersJSON.users;
const schema_user = require("../validator/schema_user");
const validator = require("../validator/validator")(schema_user);
const User = require("../entities/users");
const fs = require("fs");
const findUser = require("./findUser");

const createNewUser = (user) => {
  const resultValidation = validator(user);

  if (resultValidation !== true) return resultValidation;

  const { name, email, password, role } = user;
  const findedUser = findUser.findByEmail(email);

  if (findedUser) return `user with email: ${email} alredy exists!`;

  const newUser = new User(name, email, password, role);
  const newUserObj = newUser.getUserObject();

  users.push(newUserObj);

  try {
    fs.writeFile(
      "./db/memory/users_json.json",
      JSON.stringify(usersJSON),
      (err) => {
        if (err) return err;
      }
    );
  } catch (err) {
    return err;
  }

  return newUserObj;
};

module.exports = createNewUser;
