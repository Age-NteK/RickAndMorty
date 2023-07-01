require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const LoginModel = require("./models/Logins");
const UserModel = require("./models/Users");
const FavoriteModel = require("./models/Favorites");
const StatusesModel = require("./models/Statuses");
const SpeciesModel = require("./models/Species");
const GendersModel = require("./models/Genders");
const OriginsModel = require("./models/Origins");
const LocationsModel = require("./models/Locations");
const ImagesModel = require("./models/Images");
const CharactersModel = require("./models/Characters");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
  { logging: false, native: false }
);

LoginModel(sequelize);
UserModel(sequelize);
FavoriteModel(sequelize);
StatusesModel(sequelize);
SpeciesModel(sequelize);
GendersModel(sequelize);
OriginsModel(sequelize);
LocationsModel(sequelize);
ImagesModel(sequelize);
CharactersModel(sequelize);

const {
  Logins,
  Users,
  Favorites,
  Statuses,
  Species,
  Genders,
  Origins,
  Locations,
  Images,
  Characters,
} = sequelize.models;

//RELACIONES

// Characters => 1:1 => STATUS  //   Status => 1:N => Characters
Characters.belongsTo(Statuses, { foreignKey: "status_id" });
Statuses.hasMany(Characters, { foreignKey: "character_id" });

// Characters => 1:1 => SPECIES  //  Species => 1:N => Characters
Characters.belongsTo(Species, { foreignKey: "specie_id" });
Species.hasMany(Characters, { foreignKey: "character_id" });

// Characters => 1:1 => Genres  // Genres => 1:N => Characters
Characters.belongsTo(Genders, { foreignKey: "genre_id" });
Genders.hasMany(Characters, { foreignKey: "character_id" });

// Characters => 1:1 => Origins  // Origins => 1:N => Characters
Characters.belongsTo(Origins, { foreignKey: "origin_id" });
Origins.hasMany(Characters, { foreignKey: "character_id" });

// Characters =>  1:1 => Locations   // Locations =>  1:N => Characters
Characters.belongsTo(Locations, { foreignKey: "location_id" });
Locations.hasMany(Characters, { foreignKey: "character_id" });

// Characters => 1:1  => Images  // Images => 1:1 => Characters
Characters.belongsTo(Images, { foreignKey: "image_id" });
Images.belongsTo(Characters, { foreignKey: "character_id" });

//  User => 1:1 Login   //  Login => 1:1  => User
Logins.belongsTo(Users, { foreignKey: "user_id" });
Users.belongsTo(Logins, { foreignKey: "login_id" });

// Users => 1:N => Favorites   //  Favorites => 1:N => Users
Favorites.hasMany(Users, { foreignKey: "user_id" });
Users.hasMany(Favorites, { foreignKey: "favorite_id" });

module.exports = {
  Logins,
  Users,
  Favorites,
  Statuses,
  Species,
  Genders,
  Origins,
  Locations,
  Images,
  Characters,
  sequelize,
};
