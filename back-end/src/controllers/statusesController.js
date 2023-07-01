const { Statuses } = require("../DB_connect");

const getStatusById = async (req, res) => {
  try {
    const { status_id } = req.params;
    const status = await Statuses.findOne({ where: { status_id } });

    if (status) {
      res.status(200).json({ status });
    } else {
      res.status(404).json({ error: "Status not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getStatusByName = async (req, res) => {
  try {
    const { name } = req.query;
    const status = await Statuses.findOne({ where: { name } });

    if (status) {
      res.status(200).json({ status });
    } else {
      res.status(404).json({ error: "Status not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createStatus = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      throw Error("You must provide a name for the status");
    }
    
    const status = await Statuses.create({ name });

    res.status(201).json({ status });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateStatus = async (req, res) => {
  try {
    const { status_id } = req.params;
    const { name } = req.body;

    const status = await Statuses.findByPk(status_id);

    if (!status) {
      return res.status(404).json({ error: "Status not found" });
    }

    status.name = name || status.name;
    await status.save();

    return res.status(200).json({ status });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteStatus = async (req, res) => {
  const { status_id } = req.params;

  try {
    const statusToDelete = await Statuses.findByPk(status_id);
    if (!statusToDelete) {
      throw new Error("Status not found");
    }

    await statusToDelete.destroy();

    return res.status(200).json({
      message: `The status ${statusToDelete.status_id} was deleted successfully.`,
    });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getStatusById,
  getStatusByName,
  createStatus,
  updateStatus,
  deleteStatus,
};