const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Locations",
    {
      location_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};