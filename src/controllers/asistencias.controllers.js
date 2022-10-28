const Asistencia = require("../models/asistencias.model.js");

const ctrAsist = {};

//$ POST => Control para las asistencias
ctrAsist.postAsist = async (req, res) => {
	//const { fecha, alumno, materia, estado } = req.body;
	try {
		const asist = new Asistencia(req.body);
		await asist.save();
		res.json({
			asist,
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			ok: false,
			msg: "Error al crear la asistencia",
		});
	}
};

//° GET => Control para obtener todas las asistencias
ctrAsist.getAsist = async (req, res) => {
	const asist = await Asistencia.find();
	res.json({
		asist,
	});
};

//° PUT => Control para la actualizacion de asistencias
ctrAsist.putAsist = async (req, res) => {
	const { id } = req.params;
	const { fecha, alumno, materia, estado } = req.body;
	try {
		const asist = await Asistencia.findById(id);
		if (!asist) {
			return res.status(404).json({
				ok: false,
				msg: "No existe una asistencia con ese id",
			});
		}
		const nuevaAsist = {
			...req.body,
		};
		const asistActualizada = await Asistencia.findByIdAndUpdate(
			id,
			nuevaAsist,
			{ new: true }
		);
		res.json({
			asistActualizada,
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			ok: false,
			msg: "Error al actualizar la asistencia",
		});
	}
};

//! DELETE => Control para la eliminacion de asistencias
ctrAsist.deleteAsist = async (req, res) => {
	const { id } = req.params;
	try {
		const asist = await Asistencia.findById(id);
		if (!asist) {
			return res.status(404).json({
				ok: false,
				msg: "No existe una asistencia con ese id",
			});
		}
		await Asistencia.findByIdAndDelete(id);
		res.json({
			ok: true,
			msg: "Asistencia eliminada",
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			ok: false,
			msg: "Error al eliminar la asistencia",
		});
	}
};

//° Exportamos el controlador
module.exports = ctrAsist;
