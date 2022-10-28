const router = require("express").Router();
const { check } = require("express-validator");
const {
	getExamenes,
	postExamen,
	putExamen,
	deleteExamen,
} = require("../controllers/examen.controllers.js");

const mensajeValidacion = "Todos los campos son obligatorios";
const mensajeVal = "Revise los campos y vuelva a intentarlo";

//$ POST => Control para crear un examen
router.post(
	"/examenes",
	[
		check("fecha", mensajeValidacion)
			.not()
			.isEmpty()
			.isString()
			.withMessage(mensajeVal),
		check("materia", mensajeValidacion)
			.not()
			.isEmpty()
			.isString()
			.withMessage(mensajeVal),
		check("nota", mensajeValidacion)
			.not()
			.isEmpty()
			.isString()
			.withMessage(mensajeVal),
		check("estudiante", mensajeValidacion)
			.not()
			.isEmpty()
			.isString()
			.withMessage(mensajeVal),
		postExamen,
	],
	(req, res) => {
		res.json({
			ok: true,
			msg: "Examen creado correctamente",
		});
	}
);
//° GET => Control para listar los examenes
router.get("/examenes", getExamenes, (req, res) => {
	res.json({
		ok: true,
		msg: "Listar examenes",
	});
});
//° PUT => Control para actualizar un examen
router.put(
	"/examenes/:id",
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
		putExamen,
	],
	(req, res) => {
		res.json({
			ok: true,
			msg: "Examen actualizado correctamente",
		});
	}
);
//! DELETE => Control para eliminar un examen
router.delete("/examenes:id", deleteExamen, (req, res) => {
	res.json({
		ok: true,
		msg: "Examen eliminado correctamente",
	});
});

//* Exportar el router
module.exports = router;
