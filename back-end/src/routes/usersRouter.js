const express = require("express");
const usersRouter = express.Router();
const usersController = require("../controllers/usersController");

usersRouter.get('/:user_id', usersController.getUserById);
usersRouter.post("/", usersController.createUser);
usersRouter.put("/:user_id", usersController.updateUser);
usersRouter.delete("/:user_id", usersController.deleteUser);

module.exports = usersRouter;
