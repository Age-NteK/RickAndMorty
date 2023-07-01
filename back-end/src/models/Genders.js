const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Genders",
    {
      genre_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.ENUM('Male', 'Female', 'Genderless', 'unknown'),
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};