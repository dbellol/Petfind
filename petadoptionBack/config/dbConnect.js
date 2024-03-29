const mongoose = require("mongoose");

/*Conexion de la app con mongo Db Atlas*/
const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Base de datos conectada");
    } catch (error) {
        console.error("Error al conectar a DB:", error.message);
    }
};
module.exports = dbConnect;
