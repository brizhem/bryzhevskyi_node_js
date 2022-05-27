const loginUser = require("../use_cases/loginUser");
const getAllUsersFromDB = require("../use_cases/getAllUsers");
const createNewUserDB = require("../use_cases/createNewUser");
const getUserByNameDB = require("../use_cases/getUserByName");
const deleteUserDB = require("../use_cases/deleteUser");

module.exports = () => {
  const login = (req, res) => {
    let resultLogin = loginUser(req.body);
    res.send(resultLogin);
  };

  const getAllUsers = (req, res) => {
    res.send(getAllUsersFromDB());
  };

  const createNewUser = (req, res) => {
    res.send(createNewUserDB(req.body));
  };

  const getUserByName = (req, res) => {
    res.send(getUserByNameDB(req.params.userName));
  };

  const deleteUser = (req, res) => {
    res.send(deleteUserDB(req.params.userEmail));
  };

  return {
    login,
    getAllUsers,
    createNewUser,
    getUserByName,
    deleteUser,
  };
};
