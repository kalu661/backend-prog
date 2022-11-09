import Materia from "../models/materias.models";

//$ POST => Control para crear una materia
export const postMateria = async (req, res) => {
	const { Materia } = req.body;
	try {
		const nuevaMateria = new Materia(req.body);
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

//° GET => Control para Llamar a las materias
export const getMateria = async (req, res) => {
	const materias = await Materia.find();
	res.json({
		materias,
	});
};

//° PUT => Control para la actualizacion de una materia
export const putMateria = async (req, res) => {
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
export const deleteMateria = async (req, res) => {
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
