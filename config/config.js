const dotenv = require("dotenv");

dotenv.config();

//$ Creamos las variables
const MONGODB_URI = process.env.MONGODB_URI;
const port = process.env.PORT;

//* Exportando las variables
module.exports = { MONGODB_URI, port };
