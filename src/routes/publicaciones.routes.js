const router = require("express").Router();
const { check } = require("express-validator");
const {
	postPublicaciones,
	getPublicaciones,
	putPublicaciones,
	deletePublicaciones,
} = Simport("../controllers/publicaciones.controllers.js");

const mensajeValidacion = "Todos los campos son obligatorios";
const mensajeVal = "Revise los campos y vuelva a intentarlo";

//$ POST => Control para crear una publicacion
router.post(
	"/publicaciones",
	[
		check("titulo", mensajeValidacion)
			.not()
			.isEmpty()
			.isString()
			.withMessage(mensajeVal),
		check("descripcion", mensajeValidacion)
			.not()
			.isEmpty()
			.isString()
			.withMessage(mensajeVal),
		check("fecha", mensajeValidacion)
			.not()
			.isEmpty()
			.isString()
			.withMessage(mensajeVal),
		check("imagen", mensajeValidacion)
			.not()
			.isEmpty()
			.isString()
			.withMessage(mensajeVal),
		check("id_usuario", mensajeValidacion)
			.not()
			.isEmpty()
			.isString()
			.withMessage(mensajeVal),
	],
	postPublicaciones
);

//° GET => Control para listar las publicaciones
router.get("/publicaciones", getPublicaciones);

//° PUT => Control para actualizar una publicacion
router.put("/publicaciones:id", [
	check("titulo", mensajeValidacion)
		.not()
		.isEmpty()
		.isString()
		.withMessage(mensajeVal),
	check("descripcion", mensajeValidacion)
		.not()
		.isEmpty()
		.isString()
		.withMessage(mensajeVal),
	check("fecha", mensajeValidacion)
		.not()
		.isEmpty()
		.isString()
		.withMessage(mensajeVal),
	check("imagen", mensajeValidacion)
		.not()
		.isEmpty()
		.isString()
		.withMessage(mensajeVal),
	check("id_usuario", mensajeValidacion)
		.not()
		.isEmpty()
		.isString()
		.withMessage(mensajeVal),
	putPublicaciones,
]);

//! DELETE => Control para eliminar una publicacion
router.delete("/publicaciones:id", deletePublicaciones, (req, res) => {
	res.json({
		ok: true,
		msg: "Publicacion eliminada correctamente",
	});
});

//* Exportar router
module.exports = router;
