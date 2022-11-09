import Examen from "../models/examen.model";

//$ POST => Control para los examenes
export const postExamen = async (req, res) => {
	const { nombre, nota, fecha, materia, estudiante } = req.body;
	try {
		const examen = new Examen({
			nombre,
			nota,
			fecha,
			materia,
			estudiante,
		});
		await examen.save();
		res.json({
			examen,
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			ok: false,
			msg: "Error al crear el examen",
		});
	}
};

//° GET => Control para obtener los examenes
export const getExamenes = async (req, res) => {
	const examenes = await Examen.find();
	res.json({
		examenes,
	});
};

//° PUT => Control para la actualizacion de un examen
export const putExamen = async (req, res) => {
	const { id } = req.params;
	const { fecha, materia, nota } = req.body;
	try {
		const examen = await Examen.findById(id);
		if (!examen) {
			return res.status(404).json({
				ok: false,
				msg: "No existe un examen con ese id",
			});
		}
		const nuevoExamen = {
			...req.body,
		};
		const examenActualizado = await Examen.findByIdAndUpdate(id, nuevoExamen, {
			new: true,
		});
		res.json({
			examenActualizado,
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			ok: false,
			msg: "Error al actualizar el examen",
		});
	}
};

//! DELETE => Control para la eliminacion de un examen
export const deleteExamen = async (req, res) => {
	const { id } = req.params;
	try {
		const examen = await Examen.findById(id);
		if (!examen) {
			return res.status(404).json({
				ok: false,
				msg: "No existe un examen con ese id",
			});
		}
		await Examen.findByIdAndDelete(id);
		res.json({
			msg: "Examen eliminado",
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			ok: false,
			msg: "Error al eliminar el examen",
		});
	}
};
