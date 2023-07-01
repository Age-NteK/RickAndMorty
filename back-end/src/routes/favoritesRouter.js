const express = require("express");
const favoritesRouter = express.Router();
const favoritesController = require("../controllers/favoritesController");

favoritesRouter.get("/", favoritesController.getAllFavorites);
favoritesRouter.post("/", favoritesController.addFavorite);
favoritesRouter.delete("/", favoritesController.deleteFavorite);

module.exports = favoritesRouter;
