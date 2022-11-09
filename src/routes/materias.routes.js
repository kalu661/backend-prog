import { Router } from "express";
import {
	postMateria,
	getMateria,
	putMateria,
	deleteMateria,
} from "../controllers/materias.controllers";

const router = Router();

//$ POST => Control para crear una materia
router.post("/materias", postMateria);

//° GET => Control para listar las materias
router.get("/materias", getMateria);

//° PUT => Control para actualizar una materia
router.put("/materias/:id", putMateria);

//!	DELETE => Control para eliminar una materia
router.delete("/materias/:id", deleteMateria);

//* Exportar el controllador
module.exports = router;
