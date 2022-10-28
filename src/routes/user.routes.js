const router = require("express").Router();
const { check } = require("express-validator");
const {
	getUsers,
	postUser,
	putUser,
	deleteUser,
} = require("../controllers/user.controllers.js");
const validarCampos = require("../middlewares/validar-campos.js");

const mensajeValidacion = "Todos los campos son obligatorios";
const mensajeVal = "Revise los campos y vuelva a intentarlo";

//$ POST => Control para logear un usuario
router.post(
	"/login",
	[
		check("email", mensajeValidacion).not().isEmpty(),
		check("password", mensajeValidacion).not().isEmpty(),
		validarCampos,
	],
	login
);

//$ POST => Control para crear un usuario
router.post(
	"/user",
	[
		check("username")
			.not()
			.isEmpty()
			.withMessage(mensajeValidacion)
			.isString()
			.withMessage(mensajeVal),
		check("password")
			.not()
			.isEmpty()
			.withMessage(mensajeValidacion)
			.isString()
			.withMessage(mensajeVal),
		check("email")
			.not()
			.isEmpty()
			.withMessage(mensajeValidacion)
			.isString()
			.withMessage(mensajeVal),
		check("confirmPassword")
			.not()
			.isEmpty()
			.withMessage(mensajeValidacion)
			.isString()
			.withMessage(mensajeVal),
		validarCampos,
	],
	postUser
);

//° GET => Control para listar los usuarios
router.get(
	"/user",
	[
		check("nombre", mensajeValidacion).not().isEmpty(),
		check("email", mensajeValidacion).not().isEmpty(),
		check("password", mensajeValidacion).not().isEmpty(),
		validarCampos,
	],
	getUsers
);

//° Actualizar usuario
router.put(
	"/user/:id",
	putUser[
		(check("username")
			.not()
			.isEmpty()
			.withMessage(mensajeValidacion)
			.isString()
			.withMessage(mensajeVal),
		check("password")
			.not()
			.isEmpty()
			.withMessage(mensajeValidacion)
			.isString()
			.withMessage(mensajeVal),
		check("email")
			.not()
			.isEmpty()
			.withMessage(mensajeValidacion)
			.isString()
			.withMessage(mensajeVal),
		validarCampos)
	],
	putUser
);

//! Eliminar usuario
router.delete(
	"/user/:id",
	deleteUser[
		(check("username")
			.not()
			.isEmpty()
			.withMessage(mensajeValidacion)
			.isString()
			.withMessage(mensajeVal),
		check("password")
			.not()
			.isEmpty()
			.withMessage(mensajeValidacion)
			.isString()
			.withMessage(mensajeVal),
		check("email")
			.not()
			.isEmpty()
			.withMessage(mensajeValidacion)
			.isString()
			.withMessage(mensajeVal),
		check("confirmPassword")
			.not()
			.isEmpty()
			.withMessage(mensajeValidacion)
			.isString()
			.withMessage(mensajeVal),
		validarCampos)
	],
	deleteUser
);

// * Exportamos el router
module.exports = router;
