const { Species } = require("../DB_connect");

const getSpeciesById = async (req, res) => {
  try {
    const { species_id } = req.params;
    const species = await Species.findOne({ where: { species_id } });

    if (species) {
      res.status(200).json({ species });
    } else {
      res.status(404).json({ error: "Species not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSpeciesByName = async (req, res) => {
  try {
    const { name } = req.query;
    const species = await Species.findOne({ where: { name } });

    if (species) {
      res.status(200).json({ species });
    } else {
      res.status(404).json({ error: "Species not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createSpecies = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      throw Error("You must provide a name for the species");
    }

    const species = await Species.create({ name });

    res.status(201).json({ species });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateSpecies = async (req, res) => {
  try {
    const { species_id } = req.params;
    const { name } = req.body;

    const species = await Species.findByPk(species_id);

    if (!species) {
      return res.status(404).json({ error: "Species not found" });
    }

    species.name = name || species.name;
    await species.save();

    return res.status(200).json({ species });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteSpecies = async (req, res) => {
  const { species_id } = req.params;

  try {
    const speciesToDelete = await Species.findByPk(species_id);
    if (!speciesToDelete) {
      throw new Error("Species not found");
    }

    await speciesToDelete.destroy();

    return res.status(200).json({
      message: `The species ${speciesToDelete.species_id} was deleted successfully.`,
    });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getSpeciesById,
  getSpeciesByName,
  createSpecies,
  updateSpecies,
  deleteSpecies,
};