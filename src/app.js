
const express = require('express'); //Utilizar express
const log = require('morgan');
const app = express(); //Inicializar Express
const bodyparser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

//Importar Rutas  
const indexRoutes = require('./routes/index'); 

//Conexion A La Base De Datos
mongoose.connect('mongodb+srv://OmarGlz:12345@clusteromar.ms2iw.mongodb.net/IOT?retryWrites=true&w=majority')
.then(db => console.log('Éxito Al Conectar Con La Base De Datos' ))
.catch(err => console.log(err));

 
//Configuraciones
app.set('port', process.env.PORT || 3000); //Tome El Puerto del SO
app.set('views', path.join(__dirname, 'views')); //Le dice al servidor que la carpeta de vistas esta ahí 
app.set('view engine', 'ejs')

//Middlewares
app.use(log('dev')); //Requerir morgan y darle como parametro el nombre "Dev" (ver mensaje corto)
app.use(bodyparser.urlencoded({extended: false})); //entender los datos que envia un formulario 


//Routes
app.use('/', indexRoutes);

//Iniciando El Servidor (Escuchando en algun puerto)
app.listen(app.get('port'), () =>{
    console.log(`Servidor Funcionando En El Puerto ${app.get('port')}`); //Un mensaje en consola que esta escuchando por cierto puerto
});