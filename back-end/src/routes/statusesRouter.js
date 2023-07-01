const express = require("express");
const statusesRouter = express.Router();
const statusesController = require("../controllers/statusesController");

statusesRouter.get("/:status_id", statusesController.getStatusById);
statusesRouter.get("/", statusesController.getStatusByName);
statusesRouter.post("/", statusesController.createStatus);
statusesRouter.put("/:status_id", statusesController.updateStatus);
statusesRouter.delete("/:status_id", statusesController.deleteStatus);

module.exports = statusesRouter;