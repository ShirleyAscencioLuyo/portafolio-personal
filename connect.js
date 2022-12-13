  //====CONEXION CON BASE DE DATOS Y NODE JS ===//

//agregamos el siguiente código
var express = require("express");
var mysql = require("mysql");
var app = express();
var cors = require("cors");

app.use(express.json());
app.use(cors());
//Express
app.use(express.static(__dirname + '/'));

var conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "db_personal",
});


//Para verificar si la conexión se ha realizado
conexion.connect(function (error) {
    if (error) {
      throw error;
    } else {
      console.log("Conexión exitosa");
    }
  });

  //a configurar el puerto de salida
  const puerto = process.env.PUERTO || 3000;

app.listen(puerto, function () {
  console.log("Servidor funcionando en puerto: " + puerto);
});

//permitir la inserción de registros en la tabla.
app.post("/api/contacto", (req, res) => {
	let data = {
    	nomcon: req.body.nombre,
    	corrcon: req.body.correo,
    	descon: req.body.descripcion
	};

    //Insertamos los datos en tabla creada CONTACTO
	let sql = "INSERT INTO contacto SET ?";
	conexion.query(sql, data, function (error, results) {
  	if (error) {
    	throw error;
  	} else {
    	console.log(data);
    	res.send(data);
  	}
	});
  });