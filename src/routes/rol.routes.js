import { Router } from "express";
import {
	getRol,
	postRol,
	putRol,
	deleteRol,
} from "../controllers/rol.controllers";

const router = Router();

//$ POST => Control para crear un rol
router.post("/rol", postRol);

//° GET => Control para listar los roles
router.get("/rol", getRol);

//° PUT => Control para actualizar un rol
router.put("/rol:id", putRol);

//! DELETE => Control para eliminar un rol
router.delete("/rol:id", deleteRol);

//* Exportar router
module.exports = router;
