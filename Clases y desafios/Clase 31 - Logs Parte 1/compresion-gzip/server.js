const express = require("express");
const compression = require("compression");

const app = express();

// app.use(compression());

app.get("/saludo", (req,res)=>{
    res.send(("hola que tal ").repeat(1000))
})

app.get("/saludoZip", compression(), (req,res)=>{
    res.send(("hola que tal ").repeat(1000))
})

app.listen(8080, ()=>console.log('listening on port 8080'))