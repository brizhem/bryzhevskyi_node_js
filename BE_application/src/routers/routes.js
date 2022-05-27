const express = require("express");
const controller = require("../controllers/userController")();
const isAuth = require("../use_cases/isAuth");

const userRouter = () => {
  const router = express.Router();

  router.route("/login").post(controller.login);
  router
    .route("/")
    .get(isAuth, controller.getAllUsers)
    .post(isAuth, controller.createNewUser);
  router.route("/:userName").get(isAuth, controller.getUserByName);
  router.route("/create").post(isAuth, controller.createNewUser);
  router.route("/:userEmail").delete(isAuth, controller.deleteUser);

  return router;
};

module.exports = userRouter;
