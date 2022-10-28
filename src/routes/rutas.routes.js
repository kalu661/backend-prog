const Asistencias = require("./asistencias.routes.js");
const Examenes = require("./examen.routes.js");
const materias = require("./materias.routes.js");
const user = require("./user.routes.js");
const Publicaiones = require("./publicaciones.routes.js");
const Rol = require("./rol.routes.js");

//° Rutas
const rutas = (app) => {
	app.use("/api/usuarios", user);
	app.use("/api/roles", Rol);
	app.use("/api/materias", materias);
	app.use("/api/asistencias", Asistencias);
	app.use("/api/publicaciones", Publicaiones);
	app.use("/api/examenes", Examenes);
};

//° Exportar rutas
module.exports = rutas;
