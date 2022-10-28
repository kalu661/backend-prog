const User = require("../models/usuarios.model.js");
const bcrypt = require("bcryptjs");
const { generarJWT } = require("../helpers/generar.jwt.js");

const ctrUser = {};

//$ POST => Control para el login de usuario
ctrUser.login = async (req, res) => {
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
ctrUser.postRegister = async (req, res) => {
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

//$ POST => Control para la creacion del usuario
ctrUser.postUser = async (req, res) => {
	const {
		username,
		password,
		confirmpassword,
		email,
		roles = ["common_user"],
	} = req.body;

	if (password !== confirmpassword) {
		return res.status(400).json({
			ok: false,
			msg: "Las contraseñas no coinciden",
		});
	}

	const passswordHash = bcrypt.hashSync(password, 10);

	const nuevoUsuario = new User({
		username,
		password: passswordHash,
		email,
		roles,
	});

	try {
		const usuarioCreado = await nuevoUsuario.save();

		return res.json({
			usuarioCreado,
		});
	} catch (error) {
		console.log(error);
		return res.status(400).json({
			msg: "Error al crear el usuario",
		});
	}
};

//° GET => Control para la obtencion de usuarios
ctrUser.getUsers = async (req, res) => {
	const users = await User.find();
	res.json(users);
};

//° PUT => Control para la actualizacion de usuarios
ctrUser.putUser = async (req, res) => {
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
ctrUser.deleteUser = async (req, res) => {
	const { id } = req.params;
	const user = await User.findByIdAndDelete(id);
	res.json(user);
};

//* Exportacion del controlador
modul.export = ctrUser;
