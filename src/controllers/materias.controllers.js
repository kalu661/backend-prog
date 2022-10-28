const Materia = require("../models/materias.models.js");

const ctrMateria = {};

//$ POST => Control para crear una materia
ctrMateria.postMateria = async (req, res) => {
	const { Materia } = req.body;
	try {
		const nuevaMateria = new materia(req.body);
		await nuevaMateria.save();
		res.json({
			nuevaMateria,
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			ok: false,
			msg: "Error al crear la materia",
		});
	}
};

//° GET => Control para crear una materia
ctrMateria.postMateria = async (req, res) => {
	const { Materia } = req.body;
	try {
		const nuevaMateria = new Materia(Materia);
		await nuevaMateria.save();
		res.json({
			nuevaMateria,
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			ok: false,
			msg: "Error al crear la materia",
		});
	}
};

//° PUT => Control para la actualizacion de una materia
ctrMateria.putMateria = async (req, res) => {
	const { id } = req.params;
	const { Materia } = req.body;
	try {
		const materiaDB = await Materia.findById(id);
		if (!materiaDB) {
			return res.status(404).json({
				ok: false,
				msg: "No existe una materia con ese id",
			});
		}
		const nuevaMateria = {
			...req.body,
		};
		const materiaActualizada = await Materia.findByIdAndUpdate(
			id,
			nuevaMateria,
			{
				new: true,
			}
		);
		res.json({
			materiaActualizada,
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			ok: false,
			msg: "Error al actualizar la materia",
		});
	}
};

//! DELETE => Control para eliminar una materia
ctrMateria.deleteMateria = async (req, res) => {
	const { id } = req.params;
	try {
		const materiaDB = await Materia.findById(id);
		if (!materiaDB) {
			return res.status(404).json({
				ok: false,
				msg: "No existe una materia con ese id",
			});
		}
		await Materia.findByIdAndDelete(id);
		res.json({
			ok: true,
			msg: "Materia eliminada",
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			ok: false,
			msg: "Error al eliminar la materia",
		});
	}
};

//* Exportando el controlador
module.exports = ctrMateria;
