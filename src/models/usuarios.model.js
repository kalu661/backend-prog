const { model, Schema } = require("mongoose");

//$ Creacion del esquema del usuario
const UsuarioSchema = new Schema(
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

//* Exportacion del modelo
module.exports = model("Usuario", UsuarioSchema);
