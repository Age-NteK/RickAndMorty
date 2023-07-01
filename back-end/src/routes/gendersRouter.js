const express = require("express");
const gendersRouter = express.Router();
const gendersController = require("../controllers/gendersController");

gendersRouter.get("/:character_id", gendersController.getGenderById);
gendersRouter.get("/", gendersController.getGenderByName);
gendersRouter.post("/", gendersController.createGender);
gendersRouter.put("/:character_id", gendersController.updateGender);
gendersRouter.delete("/:character_id", gendersController.deleteGender);

module.exports = gendersRouter;
