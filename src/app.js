import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import { dbConnection } from "./database/connection";
import { Port } from "../config/config";
import { Rutas } from "./routes/rutas.routes";
import { urlencoded } from "express";

//$ Inicializaciones que se ejecutan al inicio de la aplicación (app)
dotenv.config();
dbConnection();
const app = express();

//$ Configuración de middlewares (funciones que se ejecutan antes de que lleguen a las rutas)
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(urlencoded({ extended: true }));

//° Rutas
app.use("/api/", Rutas);

//$ Configuramos el puerto de escucha y el mensaje
app.listen(Port, () => {
	console.log("Servidor corriendo en http://localhost:" + Port);
});
