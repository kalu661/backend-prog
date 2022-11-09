import { User } from "../models/usuarios.model";
import bcrypt from "bcryptjs";
import { generarJWT } from "../helpers/generar.jwt";

//$ POST => Control para el login de usuario
export const postLogin = async (req, res) => {
	const { email, password } = req.body;
	try {
		//$ Verificar email
		const userDB = await User.findOne({ email });
		if (!userDB) {
			return res.status(404).json({
				ok: false,
				msg: "Datos incorrectos",
			});
		}
		//$ Verificar contraseña
		const validPassword = bcrypt.compareSync(password, userDB.password);
		if (!validPassword) {
			return res.status(400).json({
				ok: false,
				msg: "Datos incorrectos",
			});
		}
		//$ Busca credenciales de usuario
		const user = await User.findOne({ email, password });
		if (!user) {
			return res.status(400).json({
				ok: false,
				msg: "Datos incorrectos",
			});
		}
		//$ Generar el TOKEN - JWT
		const token = await generarJWT(userDB.id);
		res.json({
			user,
			token,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: "Hable con el administrador",
		});
	}
};

//$ POST => Control para el registro de usuarios
export const postRegister = async (req, res) => {
	const { email, password } = req.body;
	try {
		//$ Verificar email
		const userDB = await User.findOne({ email });
		if (userDB) {
			return res.status(400).json({
				ok: false,
				msg: "Ya existe un usuario con ese email",
			});
		}
		//$ Crear usuario con el modelo
		const user = new User(req.body);
		//$ Encriptar contraseña
		const salt = bcrypt.genSaltSync();
		user.password = bcrypt.hashSync(password, salt);
		//$ Guardar usuario
		await user.save();
		//$ Generar el TOKEN - JWT
		const token = await generarJWT(user.id);
		res.json({
			user,
			token,
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			ok: false,
			msg: "Error al crear el usuario",
		});
	}
};

//° GET => Control para la obtencion de usuarios
export const getUser = async (req, res) => {
	const users = await User.find();
	res.json(users);
};

//° PUT => Control para la actualizacion de usuarios
export const putUser = async (req, res) => {
	const { id } = req.params;
	const { _id, password, google, email, ...resto } = req.body;
	if (password) {
		const passswordHash = bcrypt.hashSync(password, 10);
		resto.password = passswordHash;
	}
	const user = await User.findByIdAndUpdate(id, resto);
	res.json(user);
};

//! DELETE => Control para la eliminacion de usuarios
export const deleteUser = async (req, res) => {
	const { id } = req.params;
	const user = await User.findByIdAndDelete(id);
	res.json(user);
};
