const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
let app = express();
const mysql = require("mysql");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(cors());

const corsOptions = {
    origin: '*', 
    optionsSuccessStatus: 200 
  }

  app.use(cors(corsOptions));

const db = mysql.createConnection({
    host:"bwraz4hqpf89yuawksin-mysql.services.clever-cloud.com",
    user:"uuw8h1m93rkfjbfo",
    password:"wSJ8QpZWDWRlP26ekY2H",
    database:"bwraz4hqpf89yuawksin"
});

app.listen(4000, ()=>{
    console.log("Run server 4000")

  })

app.get('/login',(req,res)=>{
    db.query('SELECT * FROM usuarios', (err, result) => {
        if(err){
            console.log(err);
            res.status(500).send("Error al obtener usuarios");
        } else {
            res.send(result);
        }
    });
});

app.post('/registro',(req,res)=>{
    const { nombre_usuario, correo, contraseña } = req.body;
    const query = 'INSERT INTO usuarios (nombre_usuario, correo, contraseña) VALUES (?, ?, ?)';
    const values = [nombre_usuario, correo, contraseña];
        db.query(query,values, (err, result) => {
        if(err){
            console.log(err);
            res.status(500).send("Error al añadir usuario");
        } else {
            res.send(result);
        }
    });
});

app.put('/escenariousuarios', (req, res) => {
    const { correo, nuevoEstadoEscenario } = req.body;
    const query = 'UPDATE usuarios SET estado_escenario = ? WHERE correo = ?';
    db.query(query, [nuevoEstadoEscenario, correo], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error al actualizar el estado del escenario");
        } else {
            res.send(result);
        }
    });
});


module.exports = app;