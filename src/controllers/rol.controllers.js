import Rols from "../models/rol.model";

//$ POST => Control para crear un rol
export const postRol = async (req, res) => {
	const { Rol } = req.body;
	try {
		const nuevoRol = new rol(req.body);
		await nuevoRol.save();
		res.json({
			nuevoRol,
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			ok: false,
			msg: "Error al crear el rol",
		});
	}
};

//° GET => Control para crear un rol
export const getRol = async (req, res) => {
	const { Rol } = req.body;
	try {
		const nuevoRol = new Rols(Rol);
		await nuevoRol.save();
		res.json({
			nuevoRol,
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			ok: false,
			msg: "Error al crear el rol",
		});
	}
};

//° PUT => Control para la actualizacion de un rol
export const putRol = async (req, res) => {
	const { id } = req.params;
	const { Rol } = req.body;
	try {
		const rolDB = await Rol.findById(id);
		if (!rolDB) {
			return res.status(404).json({
				ok: false,
				msg: "No existe un rol con ese id",
			});
		}
		const nuevoRol = {
			...req.body,
		};
		const rolActualizado = await Rol.findByIdAndUpdate(id, nuevoRol, {
			new: true,
		});
		res.json({
			rolActualizado,
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			ok: false,
			msg: "Error al actualizar el rol",
		});
	}
};

//! DELETE => Control para eliminar un rol
export const deleteRol = async (req, res) => {
	const { id } = req.params;
	try {
		const rolDB = await Rol.findById(id);
		if (!rolDB) {
			return res.status(404).json({
				ok: false,
				msg: "No existe un rol con ese id",
			});
		}
		await Rol.findByIdAndDelete(id);
		res.json({
			msg: "Rol eliminado",
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			ok: false,
			msg: "Error al eliminar el rol",
		});
	}
};
