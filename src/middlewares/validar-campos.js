const { validationResult } = require("express-validator");

//$ Middlewares
const validarCampos = (req, res, next) => {
	const errores = validationResult(req);
	if (!errores.isEmpty()) {
		return res.status(400).json({
			ok: false,
			errores: errores.mapped(),
		});
	}
	next();
};

//* Exportacion del middleware
export default validarCampos;
