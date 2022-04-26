const express = require("express");
const app = express()
const {fork} = require("child_process");

app.listen(8080,()=>console.log("listening on port 8080"))

let visitas = 0;
app.get('/',(req,res)=>{
    res.send(`vistas ${++visitas}`)
})

const calcular = ()=>{
    let suma = 0;
    for(let i=0;i<10e9;i++){
        suma +=i
    }
    return suma
}

app.get('/calculo-bloq',(req,res)=>{
    const resultado = calcular()
    res.send(`resultado ${resultado}`)
})

const child = fork("./child.js");

app.get('/calculo-nobloq',(req,res)=>{
    child.send("iniciar")
    child.on("message", childMsg=>{
        res.send(`resultado ${childMsg}`)
    })
    // const resultado = calcular()
})