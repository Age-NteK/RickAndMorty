const { Images } = require("../DB_connect");

const getImageById = async (req, res) => {
  try {
    const { image_id } = req.params;
    const image = await Images.findByPk(image_id);
    
    if (!image) {
      return res.status(404).json({ error: "Image not found" });
    }

    return res.status(200).json(image);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getImages = async (req, res) => {
  try {
    const images = await Images.findAll();
    return res.status(200).json(images);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createImage = async (req, res) => {
  try {
    const { url } = req.body;
    const image = await Images.create({ url });
    return res.status(201).json(image);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateImage = async (req, res) => {
  try {
    const { image_id } = req.params;
    const { url } = req.body;

    const image = await Images.findByPk(image_id);

    if (!image) {
      return res.status(404).json({ error: "Image not found" });
    }

    image.url = url || image.url;
    await image.save();

    return res.status(200).json(image);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteImage = async (req, res) => {
  try {
    const { image_id } = req.params;

    const image = await Images.findByPk(image_id);

    if (!image) {
      return res.status(404).json({ error: "Image not found" });
    }

    await image.destroy();

    return res.status(204).send(`The image ${image} was successfully deleted`);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getImageById,
  getImages,
  createImage,
  updateImage,
  deleteImage,
};