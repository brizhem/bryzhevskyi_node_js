const users = require("../db/memory/users_json.json").users;

let findUser = (module.exports = {});

findUser.findByName = (userName) => {
  return users.find(({ name }) => name === userName);
};

findUser.findByEmail = (userEmail) => {
  return users.find(({ email }, index) => email === userEmail);
};

findUser.findIndexByEmail = (userEmail) => {
  return (findedIndex = users.findIndex(
    ({ email }, index) => email === userEmail
  ));
};
