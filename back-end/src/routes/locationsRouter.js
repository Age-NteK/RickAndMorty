const express = require("express");
const locationsRouter = express.Router();
const locationsController = require("../controllers/locationsController");

locationsRouter.get("/:location_id", locationsController.getLocationById);
locationsRouter.get("/", locationsController.getLocationByName);
locationsRouter.post("/", locationsController.createLocation);
locationsRouter.put("/:location_id", locationsController.updateLocation);
locationsRouter.delete("/:location_id", locationsController.deleteLocation);


module.exports = locationsRouter;
