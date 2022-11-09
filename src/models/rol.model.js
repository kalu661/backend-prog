import mongoose from "mongoose";

//$ Creacion del esquema del rol
const rolSchema = new mongoose.Schema({
	nombre: ["admin", "profesor", "alumno"],
});

//$ Creamos la constante para la exportacion del modelo
const Rol = mongoose.model("Rol", rolSchema);

//* Exportacion del modelo
module.exports = Rol;
