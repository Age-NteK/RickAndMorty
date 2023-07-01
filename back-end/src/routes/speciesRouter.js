const express = require("express");
const speciesRouter = express.Router();
const speciesController = require("../controllers/speciesController");

speciesRouter.get("/:species_id", speciesController.getSpeciesById);
speciesRouter.get("/", speciesController.getSpeciesByName);
speciesRouter.post("/", speciesController.createSpecies);
speciesRouter.put("/:species_id", speciesController.updateSpecies);
speciesRouter.delete("/:species_id", speciesController.deleteSpecies);

module.exports = speciesRouter;