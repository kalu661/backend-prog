const jwt = require("jsonwebtoken");
const { config } = require("dotenv");
config({
	path: "./config/config.env",
});

//$ Generacion del token
const generarJWT = (uid = "") => {
	return new Promise((resolve, reject) => {
		const payload = { uid };
		jwt.sign(
			payload,
			process.env.SECRETORPRIVATEKEY,
			{
				expiresIn: "4h",
			},
			(err, token) => {
				if (err) {
					console.log(err);
					reject("No se pudo generar el JWT");
				} else {
					resolve(token);
				}
			}
		);
	});
};

//* Exportacion del token
exports.generarJWT;
