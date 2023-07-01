const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Favorites",
    {   
      favorite_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
      character_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Characters',
          key: 'character_id'
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'user_id'
        }
      }
    },
    { timestamps: false }
  );
};