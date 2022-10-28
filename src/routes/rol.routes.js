const router = require("express").Router();
const { check } = require("express-validator");
const {
	getRol,
	postRol,
	putRol,
	deleteRol,
} = require("../controllers/rol.controllers.js");

const mensajeValidacion = "Todos los campos son obligatorios";
const mensajeVal = "Revise los campos y vuelva a intentarlo";

//$ POST => Control para crear un rol
router.post(
	"/rol",
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
		postRol,
	],
	(req, res) => {
		res.json({
			ok: true,
			msg: "Rol creado correctamente",
		});
	}
);

//° GET => Control para listar los roles
router.get("/rol", getRol, (req, res) => {
	res.json({
		ok: true,
		msg: "Listar roles",
	});
});

//° PUT => Control para actualizar un rol
router.put(
	"/rol:id",
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
		putRol,
	],
	(req, res) => {
		res.json({
			ok: true,
			msg: "Rol actualizado correctamente",
		});
	}
);

//! DELETE => Control para eliminar un rol
router.delete("/rol:id", deleteRol, (req, res) => {
	res.json({
		ok: true,
		msg: "Rol eliminado correctamente",
	});
});

//* Exportar router
module.exports = router;
