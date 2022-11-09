import { Router } from "express";
import {
	postPublic,
	getPublic,
	putPublic,
	deletePublic,
} from "../controllers/publicaciones.controllers";

const router = Router();

const mensajeValidacion = "Todos los campos son obligatorios";
const mensajeVal = "Revise los campos y vuelva a intentarlo";

//$ POST => Control para crear una publicacion
router.post("/publicaciones", postPublic);

//° GET => Control para listar las publicaciones
router.get("/publicaciones", getPublic);

//° PUT => Control para actualizar una publicacion
router.put("/publicaciones:id", putPublic);

//! DELETE => Control para eliminar una publicacion
router.delete("/publicaciones:id", deletePublic);

//* Exportar router
module.exports = router;
