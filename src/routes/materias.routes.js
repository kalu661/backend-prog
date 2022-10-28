const router = require("express").Router();
const { check } = require("express-validator");
const {
	getMaterias,
	postMateria,
	putMateria,
	deleteMateria,
} = require("../controllers/materias.controllers.js");

const mensajeValidacion = "Todos los campos son obligatorios";
const mensajeVal = "Revise los campos y vuelva a intentarlo";

//$ POST => Control para crear una materia
router.post(
	"/materias",
	[
		check("nombre", mensajeValidacion)
			.not()
			.isEmpty()
			.isString()
			.withMessage(mensajeVal),
		check("descripcion", mensajeValidacion)
			.not()
			.isEmpty()
			.isString()
			.withMessage(mensajeVal),
		check("profesor", mensajeValidacion)
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
	postMateria
);

//° GET => Control para listar las materias
router.get("/materias", getMaterias, (req, res) => {
	res.json({
		ok: true,
		msg: "Listar examenes",
	});
});

//° PUT => Control para actualizar una materia
router.put(
	"/materias/:id",
	[
		check("nombre", mensajeValidacion)
			.not()
			.isEmpty()
			.isString()
			.withMessage(mensajeVal),
		check("descripcion", mensajeValidacion)
			.not()
			.isEmpty()
			.isString()
			.withMessage(mensajeVal),
		check("profesor", mensajeValidacion)
			.not()
			.isEmpty()
			.isString()
			.withMessage(mensajeVal),
		check("fechaCreacion", mensajeValidacion)
			.not()
			.isEmpty()
			.isString()
			.withMessage(mensajeVal),
		putMateria,
	],
	(req, res) => {
		res.json({
			ok: true,
			msg: "Materia actualizada correctamente",
		});
	}
);

//!	DELETE => Control para eliminar una materia
router.delete("/materias/:id", deleteMateria, (req, res) => {
	res.json({
		ok: true,
		msg: "Materia eliminada correctamente",
	});
});

//* Exportar el controllador
module.exports = router;
