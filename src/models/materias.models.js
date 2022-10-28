const mongoose = require("mongoose");

//$ Creacion del esquema de la materia
const materiaSchema = new mongoose.Schema({
	nombre: {
		type: String,
		required: true,
		unique: true,
	},
	descripcion: {
		type: String,
		required: true,
	},
	profesor: {
		type: String,
		required: true,
	},
	fechaCreacion: {
		type: Date,
		default: Date.now,
	},
});

//$ Creamos la Const para la exportacion del modelo
const Materia = mongoose.model("Materia", materiaSchema);

//* Exportacion del modelo
module.exports = Materia;
