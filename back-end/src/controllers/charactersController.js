const { Characters } = require("../DB_connect");
const axios = require("axios");

//NOTA: NECESITO QUE ESTE CONTROLLER FUNCIONE PARA PODER ESTABLECER LOS FAVORITES
const getAllCharacters = async (req, res) => {
  try {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    const charsData = response.data.results;

    console.log(charsData);
    //Me llega la respuesta

    //PRUEBAS
    // const filteredChars = charsData.filter(
    //   (charData) => charData.status === "Alive"
    // );
    // // console.log(filteredChars);

    for (const charData of charsData) {
      await Characters.create({
        character_id: charData.id,
        name: charData.name,
        status_id: charData.status,
        specie_id: charData.species,
        gender_id: charData.gender,
        origin_id: charData.origin.name,
        location_id: charData.location.name,
        image_id: charData.image,
      });

      //Aca ya no la recibe correctamente a pesar de que tengo en mi tabla
      //Todas esas columnas como FKeys
      // console.log(charsData);
      // console.log(Characters);
    }

    res.status(200).json({
      message:
        "Los personajes se han guardado en la base de datos correctamente.",
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener los personajes de la API" });
  }
};

const getCharacterById = async (req, res) => {
  try {
    const { character_id } = req.params;
    const character = await Characters.findByPk(character_id);

    if (character) {
      res.status(200).json({ character });
    } else {
      res.status(404).json({ error: "Character not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCharacterByName = async (req, res) => {
  try {
    const { name } = req.query;
    const character = await Characters.findOne({ where: { name } });

    if (character) {
      res.status(200).json({ character });
    } else {
      res.status(404).json({ error: "Character not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createCharacter = async (req, res) => {
  try {
    const {
      name,
      status_id,
      specie_id,
      genre_id,
      origin_id,
      location_id,
      image_id,
    } = req.body;

    if (
      !name ||
      !status_id ||
      !specie_id ||
      !genre_id ||
      !origin_id ||
      !location_id ||
      !image_id
    ) {
      throw new Error("All fields are required");
    }

    const character = await Characters.create({
      name,
      status_id,
      specie_id,
      genre_id,
      origin_id,
      location_id,
      image_id,
    });

    return res.status(201).json(character);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

const updateCharacter = async (req, res) => {
  try {
    const { character_id } = req.params;
    const {
      name,
      status_id,
      specie_id,
      genre_id,
      origin_id,
      location_id,
      image_id,
    } = req.body;

    const character = await Characters.findByPk(character_id);

    if (!character) {
      return res.status(404).json({ error: "Character not found" });
    }
    //Logica que implemento aquí =>   ||
    //Si name se proporciona en el cuerpo de la solicitud, se asigna a character.name.
    //De lo contrario, se mantiene el valor actual de character.name.
    character.name = name || character.name;
    character.status_id = status_id || character.status_id;
    character.specie_id = specie_id || character.species_id;
    character.genre_id = genre_id || character.genre_id;
    character.origin_id = origin_id || character.origin_id;
    character.location_id = location_id || character.location_id;
    character.image_id = image_id || character.image_id;

    await character.save();

    return res.status(200).json(character);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteCharacter = async (req, res) => {
  const { character_id } = req.params;

  try {
    const characterToDelete = await Characters.findByPk(character_id);
    if (!characterToDelete) {
      throw new Error("Character not found");
    }

    await characterToDelete.destroy();

    return res.status(200).json({
      message: `The character with ID ${character_id} was deleted successfully.`,
    });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getAllCharacters,
  getCharacterById,
  getCharacterByName,
  createCharacter,
  updateCharacter,
  deleteCharacter,
};
