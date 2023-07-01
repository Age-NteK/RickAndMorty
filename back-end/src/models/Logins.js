const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Logins",
    {
      login_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};


// AVERIGUAR PORQUE NO FUNCIONA UUID
