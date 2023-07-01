const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Characters",
    {
      character_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};

//PROPIEDADES ESTABLECIDAS EN LAS RELACIONES DB_CONNECT
// status_id: {
//   type: DataTypes.INTEGER,
//   allowNull: false,
//   references: {
//     model: "Statuses",
//     key: "status_id",
//   },
// },
// specie_id: {
//   type: DataTypes.INTEGER,
//   allowNull: false,
//   references: {
//     model: "Species",
//     key: "specie_id",
//   },
// },
// genre_id: {
//   type: DataTypes.INTEGER,
//   allowNull: false,
//   references: {
//     model: "Genders",
//     key: "genre_id",
//   },
// },
// origin_id: {
//   type: DataTypes.INTEGER,
//   allowNull: false,
//   references: {
//     model: "Origins",
//     key: "origin_id",
//   },
// },
// location_id: {
//   type: DataTypes.INTEGER,
//   allowNull: false,
//   references: {
//     model: "Locations",
//     key: "location_id",
//   },
// },
// image_id: {
//   type: DataTypes.STRING,
//   allowNull: false,
// },
