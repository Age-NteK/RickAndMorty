const express = require("express");
const morgan = require("morgan");
const serverRouter = express();
const cors = require('cors');
const loginRouter = require("./routes/loginRouter");
const usersRouter = require("./routes/usersRouter");
const charactersRouter = require("./routes/charactersRouter");
const favoritesRouter = require("./routes/favoritesRouter");
const gendersRouter = require("./routes/gendersRouter");
const locationsRouter = require("./routes/locationsRouter");
const originsRouter = require("./routes/originsRouter");
const speciesRouter = require("./routes/speciesRouter");
const statusesRouter = require("./routes/statusesRouter");
const imagesRouter = require("./routes/imagesRouter");

serverRouter.use(morgan("dev"));
serverRouter.use(express.json());
serverRouter.use(cors());

serverRouter.use("/rickandmorty/login", loginRouter);
serverRouter.use("/rickandmorty/users", usersRouter);
serverRouter.use("/rickandmorty/char", charactersRouter);
serverRouter.use("/rickandmorty/fav", favoritesRouter);
serverRouter.use("/rickandmorty/gender", gendersRouter);
serverRouter.use("/rickandmorty/loc", locationsRouter);
serverRouter.use("/rickandmorty/origin", originsRouter);
serverRouter.use("/rickandmorty/specie", speciesRouter);
serverRouter.use("/rickandmorty/status", statusesRouter);
serverRouter.use("/rickandmorty/img", imagesRouter);

module.exports = serverRouter;
