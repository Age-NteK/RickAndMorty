const server = require("./src/app");
const { sequelize } = require("./src/DB_connect"); 
const PORT = 3001;

process.setMaxListeners(20);

(async () => {
  try {
    await server.listen(PORT);
    await sequelize.sync({ force: false });
    console.log('Synchronized database');
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error('Error while synchronizing the database:', error);
  }
})();
