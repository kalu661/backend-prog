import mongoose from "mongoose";

//$ Creacion del esquema de la asistencia
const asistSchema = new mongoose.Schema({
	fecha: {
		type: Date,
		required: true,
	},
	alumno: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Alumno",
		required: true,
	},
	materia: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Materia",
		required: true,
	},
	estado: {
		type: Boolean,
		required: true,
	},
});

//$ Creamos la Const para la exportacion del modelo
const Asistencia = mongoose.model("Asistencia", asistSchema);

//* Exportacion del modelo
module.exports = Asistencia;
