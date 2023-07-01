const express = require("express");
const imagesRouter = express.Router();
const imagesController = require("../controllers/imagesController");

imagesRouter.get("/:image_id", imagesController.getImageById);
imagesRouter.get("/", imagesController.getImages);
imagesRouter.post("/", imagesController.createImage);
imagesRouter.put("/:image_id", imagesController.updateImage);
imagesRouter.delete("/:image_id", imagesController.deleteImage);

module.exports = imagesRouter;