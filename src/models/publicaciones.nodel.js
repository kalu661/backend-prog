const mongoose = require("mongoose");

//$ Creacion del esquema de la publicacion
const postSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			required: true,
			trim: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

//* Exportacion del modelo
model.exports = mongoose.model("Post", postSchema);
