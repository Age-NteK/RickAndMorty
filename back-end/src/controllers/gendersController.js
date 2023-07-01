const { Genders } = require("../DB_connect");

const getGenderById = async (req, res) => {
  try {
    const { genre_id } = req.params;
    const gender = await Genders.findOne({ where: { genre_id } });

    if (gender) {
      res.status(200).json({ gender });
    } else {
      res.status(404).json({ error: "Gender not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getGenderByName = async (req, res) => {
  try {
    const { name } = req.query;
    const gender = await Genders.findOne({ where: { name } });

    if (gender) {
      res.status(200).json({ gender });
    } else {
      res.status(404).json({ error: "Gender not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createGender = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      throw new Error("Name is required");
    }

    const gender = await Genders.create({ name });

    res.status(201).json(gender);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateGender = async (req, res) => {
  try {
    const { genre_id } = req.params;
    const { name } = req.body;

    const gender = await Genders.findByPk(genre_id);

    if (!gender) {
      return res.status(404).json({ error: "Gender not found" });
    }

    gender.name = name || gender.name;
    await gender.save();

    return res.status(200).json(gender);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteGender = async (req, res) => {
  try {
    const { genre_id } = req.params;

    const genderToDelete = await Genders.findOne({ where: { genre_id } });

    if (!genderToDelete) {
      throw new Error(`Gender with id ${genre_id} not found`);
    }

    await genderToDelete.destroy();

    return res.status(200).json({
      message: `The gender with id ${genre_id} was deleted successfully.`,
    });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getGenderById,
  getGenderByName,
  createGender,
  updateGender,
  deleteGender,
};