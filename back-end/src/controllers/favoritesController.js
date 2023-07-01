const { Favorites, Users, Characters } = require("../DB_connect");


const getAllFavorites = async (req, res) => {
  try {
    const favorites = await Favorites.findAll();

    return res.status(200).json(favorites);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const addFavorite = async (req, res) => {
  try {
    const { character_id, user_id } = req.body;

    const user = await Users.findByPk(user_id);

    if (!user) {
      throw new Error("User not found");
    }

    const character = await Characters.findByPk(character_id);
    if (!character) {
      throw new Error("Character not found");
    }

    //Crear favorite y asociarlo a Users y a Characters
    const favorite = await Favorites.create({
      user_id: user_id,
      character_id: character_id,
    });

    return res.status(201).json(favorite);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};


const deleteFavorite = async (req, res) => {
  try {
    const { favorite_id } = req.body;

    const favoriteToDelete = await Favorites.findOne({
      where: { favorite_id },
    });

    if (!favoriteToDelete) {
      throw new Error(`Character with id ${favorite_id} not found`);
    }

    await favoriteToDelete.destroy();

    const allFavorites = await Favorites.findAll();

    return res.status(200).json({
      message: `The user ${favoriteToDelete.favorite_id} was deleted successfully.`,
      restFav: allFavorites,
    });
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

module.exports = { addFavorite, deleteFavorite, getAllFavorites };