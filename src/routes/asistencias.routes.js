import { Router } from "express";
import {
	postAsist,
	getAsist,
	putAsist,
	deleteAsist,
} from "../controllers/asistencias.controllers";

const router = Router();

//$ POST => Control para crear una asistencia
router.post("/asistencias", postAsist);

//° GET => Control para obtener todas las asistencias
router.get("/asistencia", getAsist);

//° PUT => Control para la actualizacion de una asistencia
router.put("/asistencias/:id", putAsist);

//! DELETE => Control para eliminar una asistencia
router.delete("/asistencias/:id", deleteAsist);

//* Exportar router
module.exports = router;
