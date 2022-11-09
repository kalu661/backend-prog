import { connect } from "mongoose";

//$ Coneccion a la base de datos
const dbConnection = async () => {
	try {
		connect(process.env.MONGODB_URI);
		console.log("Base de Datos conectada correctamente");
	} catch (error) {
		console.log(error);
		throw new Error("Error a la hora de iniciar la base de datos");
	}
};

//* Exportacion de la coneccion a la base de datos
module.exports = { dbConnection };
