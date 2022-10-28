const express = require("express");
const helmet = require("helmet");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const { dbConnection } = require("./database/connection.js");
const { port } = require("../config/config.js");
const { rutas } = require("./routes/rutas.routes.js");

//$ Inicializaciones que se ejecutan al inicio de la aplicación (app)
dotenv.config();
dbConnection();
const app = express();

//$ Configuración de middlewares (funciones que se ejecutan antes de que lleguen a las rutas)
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.urlencoded({ extended: true });

//° Rutas
app.use("/api/", rutas);

//$ Configuramos el puerto de escucha y el mensaje
app.listen(port, () => {
	console.log("Servidor corriendo en https://localhost:" + port);
});
