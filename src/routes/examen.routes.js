import { Router } from "express";
import {
	getExamenes,
	postExamen,
	putExamen,
	deleteExamen,
} from "../controllers/examen.controllers";

const router = Router();

//$ POST => Control para crear un examen
router.post("/examenes", postExamen);
//° GET => Control para listar los examenes
router.get("/examenes", getExamenes);
//° PUT => Control para actualizar un examen
router.put("/examenes/:id", putExamen);
//! DELETE => Control para eliminar un examen
router.delete("/examenes:id", deleteExamen);

//* Exportar el router
module.exports = router;
