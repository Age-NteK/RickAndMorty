const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Statuses",
    {
      status_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.ENUM('Alive', 'Dead', 'unknown', 'Presumed dead'),
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};