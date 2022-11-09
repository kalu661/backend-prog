import { Asistencias } from "./asistencias.routes";
import { Examenes } from "./examen.routes";
import { materias } from "./materias.routes";
import { user } from "./user.routes";
import { Publicaiones } from "./publicaciones.routes";
import { Rol } from "./rol.routes";

//° Rutas
export const Rutas = () => [
	user,
	Rol,
	materias,
	Asistencias,
	Publicaiones,
	Examenes,
];
