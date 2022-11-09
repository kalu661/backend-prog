import mongoose from "mongoose";

//$ Crear un esquema de examen

const examenSchema = new mongoose.Schema({
	nombre: {
		type: String,
		required: true,
	},
	nota: {
		type: Number,
		required: true,
	},
	fecha: {
		type: Date,
		required: true,
	},
	materia: {
		type: String,
		required: true,
	},
	estudiante: {
		type: String,
		required: true,
	},
});

//$ Creamos la constante para la exportacion del modelo
const Examen = mongoose.model("Examen", examenSchema);

// * Exportamos el modelo
module.exports = Examen;
