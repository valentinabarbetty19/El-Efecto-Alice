const express = require("express");
const cors = require('cors');

let app = express();
const mysql = require("mysql");

app.use(cors());

const corsOptions = {
    origin: 'http://localhost:3000', 
    optionsSuccessStatus: 200 
  }

  app.use(cors(corsOptions));

const db = mysql.createConnection({
    host:"bwraz4hqpf89yuawksin-mysql.services.clever-cloud.com",
    user:"uuw8h1m93rkfjbfo",
    password:"wSJ8QpZWDWRlP26ekY2H",
    database:"bwraz4hqpf89yuawksin"
});

app.listen(3001, ()=>{
    console.log("Run server 3001")
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



module.exports = app;