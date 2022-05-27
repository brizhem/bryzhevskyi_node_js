const users = require("../db/memory/users_json.json").users;

const getUserByName = (userName) => {
  let findedUser = users.find(({ name }) => name === userName);
  return findedUser;
};

module.exports = getUserByName;
