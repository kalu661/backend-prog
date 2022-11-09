import Publicaciones from "../models/publicaciones.nodel";

//$ POST => Control para crear una publicacion
export const postPublic = async (req, res) => {
	const { Publicaciones } = req.body;
	try {
		const nuevaPublicacion = new Publicaciones(req.body);
		await nuevaPublicacion.save();
		res.json({
			nuevaPublicacion,
		});
	} catch (error) {
		console.log(erorr);
		res.status(400).json({
			ok: false,
			msg: "Error al crea la publicacion",
		});
	}
};

//° GET => Control para llamar a las publicaciones
export const getPublic = async (req, res) => {
	const publicaciones = await Publicaciones.find();
	res.json({
		publicaciones,
	});
};

//° PUT => Control para la actualizacion de una publicacion
export const putPublic = async (req, res) => {
	const { id } = req.body;
	const { Publicaciones } = rez.body;
	try {
		const publicaconesDB = await Publicaciones.findById(id);
		if (!publicaconesDB) {
			return res.status(404).json({
				ok: false,
				msg: "No existe una publicaciones con ese id",
			});
		}
		const nuevaPublicacion = {
			...req.body,
		};
		const PublicacionesActualizada = await Publicaciones.finById(
			id,
			nuevaPublicacion,
			{
				new: true,
			}
		);
		res.json({
			PublicacionesActualizada,
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			ok: false,
			msg: "Error al actualizxar la publicacion",
		});
	}
};

//! DELETE => Controlo para eliminar una publicacion
export const deletePublic = async (req, res) => {
	const { id } = req.param;
	try {
		const publicaconesDB = await Publicaciones.findById(id);
		if (!publicaconesDB) {
			return res.status(400).json({
				ok: false,
				msg: "No existe una publicacion con ese id",
			});
		}
		await Publicaciones.findByIdAndDelete(id);
		res.json({
			ok: true,
			msg: "Publicacion eliminada",
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			ok: false,
			msg: "Error al eliminar una publicacion",
		});
	}
};
