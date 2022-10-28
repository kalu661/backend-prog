const mongoose = require("mongoose");

//$ Creacion del esquema del rol
const rolSchema = new mongoose.Schema({
	nombre: ["admin", "profesor", "alumno"],
});

//* Exportacion del modelo
model.exports = mongoose.model("Rols", rolSchema);
