const router = require("express").Router();
const { check } = require("express-validator");
const {
	postAsist,
	getAsist,
	putAsist,
	deleteAsist,
} = require("../controllers/asistencias.controllers.js");

const mensajeValidacion = "Todos los campos son obligatorios";
const mensajeVal = "Revise los campos y vuelva a intentarlo";

//$ POST => Control para crear una asistencia
router.post(
	"/asistencias",
	[
		check("fecha", mensajeValidacion)
			.not()
			.isEmpty()
			.isString()
			.withMessage(mensajeVal),
		check("hora", mensajeValidacion)
			.not()
			.isEmpty()
			.isString()
			.withMessage(mensajeVal),
		check("idAlumno", mensajeValidacion)
			.not()
			.isEmpty()
			.isString()
			.withMessage(mensajeVal),
		check("idCurso", mensajeValidacion)
			.not()
			.isEmpty()
			.isString()
			.withMessage(mensajeVal),
		postAsist,
	],
	(req, res) => {
		res.json({
			ok: true,
			msg: "Asistencia creada correctamente",
		});
	}
);

//° GET => Control para obtener todas las asistencias
router.get("/asistencia", getAsist, (req, res) => {
	res.json({
		ok: true,
		msg: "Listar asistencias",
	});
});

//° PUT => Control para la actualizacion de una asistencia
router.put(
	"/asistencias/:id",
	[
		check("fecha", mensajeValidacion)
			.not()
			.isEmpty()
			.isString()
			.withMessage(mensajeVal),
		check("hora", mensajeValidacion)
			.not()
			.isEmpty()
			.isString()
			.withMessage(mensajeVal),
		check("idAlumno", mensajeValidacion)
			.not()
			.isEmpty()
			.isString()
			.withMessage(mensajeVal),
		check("idCurso", mensajeValidacion)
			.not()
			.isEmpty()
			.isString()
			.withMessage(mensajeVal),
		putAsist,
	],
	(req, res) => {
		res.json({
			ok: true,
			msg: "Asistencia actualizada correctamente",
		});
	}
);

//! DELETE => Control para eliminar una asistencia
router.delete("/asistencias/:id", deleteAsist, (req, res) => {
	res.json({
		ok: true,
		msg: "Asistencia eliminada correctamente",
	});
});

//* Exportar router
module.exports = router;
