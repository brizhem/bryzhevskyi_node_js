const usersJSON = require("../db/memory/users_json.json");
const users = usersJSON.users;
const fs = require("fs");
const findUser = require("./findUser");

const deleteUser = (userEmail) => {
  const currentIndex = findUser.findIndexByEmail(userEmail);

  if (currentIndex === -1)
    return `user with email "${userEmail}" alredy exists!`;

  users.splice(currentIndex, 1);
  console.log(usersJSON);

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

  return true;
};

module.exports = deleteUser;
