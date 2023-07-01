const express = require("express");
const charactersRouter = express.Router();
const charactersController = require("../controllers/charactersController");

charactersRouter.get('/', charactersController.getAllCharacters)
charactersRouter.get("/:character_id", charactersController.getCharacterById);
charactersRouter.get("/", charactersController.getCharacterByName);
charactersRouter.post("/", charactersController.createCharacter);
charactersRouter.put("/:character_id", charactersController.updateCharacter);
charactersRouter.delete("/:character_id", charactersController.deleteCharacter);

module.exports = charactersRouter;
