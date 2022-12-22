const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
mongoose
    .connect("mongodb://127.0.0.1:27017/Dulceria", {
//        useNewUrlParser: true,
//        useCreateIndex: true,
//        useUnifiedTopology: true,
//        useFindAndModify: false,

    }, (err, res) => {
        if(err){
            throw err;
        } else{
            console.log('La Conexion a la Base de datos fue un exito...')
        }
    });

    module.exports = mongoose;

    //mongodb://localhost:27017/