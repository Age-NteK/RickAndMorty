const { Locations } = require("../DB_connect");

const getLocationById = async (req, res) => {
  try {
    const { location_id } = req.params;
    const location = await Locations.findOne({ where: { location_id } });

    if (location) {
      res.status(200).json({ location });
    } else {
      res.status(404).json({ error: "Location not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getLocationByName = async (req, res) => {
  try {
    const { name } = req.query;
    const location = await Locations.findOne({ where: { name } });

    if (location) {
      res.status(200).json({ location });
    } else {
      res.status(404).json({ error: "Location not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createLocation = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      throw Error("You must provide a name for the location");
    }

    const location = await Locations.create({ name });

    res.status(201).json({ location });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateLocation = async (req, res) => {
  try {
    const { location_id } = req.params;
    const { name } = req.body;

    const location = await Locations.findByPk(location_id);

    if (!location) {
      return res.status(404).json({ error: "Location not found" });
    }

    location.name = name || location.name;
    await location.save();

    return res.status(200).json({ location });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteLocation = async (req, res) => {
  const { location_id } = req.params;

  try {
    const locationToDelete = await Locations.findByPk(location_id);
    if (!locationToDelete) {
      throw new Error("Location not found");
    }

    await locationToDelete.destroy();

    return res.status(200).json({
      message: `The location ${locationToDelete.location.name} was deleted successfully.`,
    });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getLocationById,
  getLocationByName,
  createLocation,
  updateLocation,
  deleteLocation,
};