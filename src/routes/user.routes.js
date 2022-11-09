import { Router } from "express";
import {
	postLogin,
	postRegister,
	getUser,
	putUser,
	deleteUser,
} from "../controllers/user.controllers";
import validarCampos from "../middlewares/validar-campos";

const router = Router();

//$ POST => Control para logear un usuario
router.post("/login", postLogin);

//$ POST => Control para crear un usuario
router.post("/Register", postRegister);

//° GET => Control para listar los usuarios
router.get("/user", getUser);

//° Actualizar usuario
router.put("/user/:id", putUser);

//! Eliminar usuario
router.delete("/user/:id", deleteUser);

// * Exportamos el router
module.exports = router;
