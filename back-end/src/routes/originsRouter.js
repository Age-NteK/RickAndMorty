const express = require("express");
const originsRouter = express.Router();
const originsController = require("../controllers/originsController");

originsRouter.get("/:origin_id", originsController.getOriginById);
originsRouter.get("/", originsController.getOriginByName);
originsRouter.post("/", originsController.createOrigin);
originsRouter.put("/:origin_id", originsController.updateOrigin);
originsRouter.delete("/:origin_id", originsController.deleteOrigin);

module.exports = originsRouter;