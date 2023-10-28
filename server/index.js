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
    host:"192.168.0.27",
    user:"root",
    password:"",
    database:"bd_novel"
});

app.listen(3001, ()=>{
    console.log("Run server 3001")
  })

app.get(`/login`,(req,res)=>{
    db.query('SELECT * FROM usuario', (err, result) => {
        if(err){
            console.log(err);
            res.status(500).send("Error al obtener usuarios");
        } else {
            res.send(result);
        }
    });
});



module.exports = app;