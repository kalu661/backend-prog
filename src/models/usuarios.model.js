import mongoose from "mongoose";

//$ Creacion del esquema del usuario
const UsuarioSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		roles: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Rol", // Referencia al modelo Rol
			},
		],
		isActive: {
			type: Boolean,
			default: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

//$ Usamos el metodo model para exportar el modelo
UsuarioSchema.methods.toJSON = function () {
	const { password, _id, ...usuario } = this.toObject();
	usuario.uid = _id;
	return usuario;
};

//$ Creamos la constante para la exportacion del modelo
const Usuario = mongoose.model("Usuario", UsuarioSchema);

//* Exportacion del modelo
module.exports = Usuario;
