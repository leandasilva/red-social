'use strict'

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var app = require('mongoose-pagination');
var app = require('./app');
var port = 3800;

// Conexión Database
mongoose.set('strictQuery', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/curso_mean_social',{useNewUrlParser:true, useUnifiedTopology: true })
		.then(() => {
			console.log("La conexión a la base de datos red_social se ha realizado correctamente!!");
		
			// Crear servidor
			app.listen(port, () => {
				console.log('Servidor corriendo en http://localhost:3800');
			});
		})
		.catch(err => console.log(err));


		