const { Origins } = require("../DB_connect");

const getOriginById = async (req, res) => {
  try {
    const { origin_id } = req.params;
    const origin = await Origins.findOne({ where: { origin_id } });

    if (origin) {
      res.status(200).json({ origin });
    } else {
      res.status(404).json({ error: "Origin not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOriginByName = async (req, res) => {
  try {
    const { name } = req.query;
    const origin = await Origins.findOne({ where: { name } });

    if (origin) {
      res.status(200).json({ origin });
    } else {
      res.status(404).json({ error: "Origin not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createOrigin = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      throw Error("You must provide a name for the origin");
    }

    const origin = await Origins.create({ name });

    res.status(201).json({ origin });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateOrigin = async (req, res) => {
  try {
    const { origin_id } = req.params;
    const { name } = req.body;

    const origin = await Origins.findByPk(origin_id);

    if (!origin) {
      return res.status(404).json({ error: "Origin not found" });
    }

    origin.name = name || origin.name;
    await origin.save();

    return res.status(200).json({ origin });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteOrigin = async (req, res) => {
  const { origin_id } = req.params;

  try {
    const originToDelete = await Origins.findByPk(origin_id);
    if (!originToDelete) {
      throw new Error("Origin not found");
    }

    await originToDelete.destroy();

    return res.status(200).json({
      message: `The origin ${originToDelete.origin_id} was deleted successfully.`,
    });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getOriginById,
  getOriginByName,
  createOrigin,
  updateOrigin,
  deleteOrigin,
};