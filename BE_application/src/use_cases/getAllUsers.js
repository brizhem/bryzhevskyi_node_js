const users = require("../db/memory/users_json.json").users;

const getAllUsers = () => {
  return users;
};

module.exports = getAllUsers;
