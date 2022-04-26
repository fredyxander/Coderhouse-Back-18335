const {fork} = require("child_process");

//creamos el proceso hijo
const child = fork("./child.js");

console.log("incia proceso parent")
child.send("iniciar")

//recibimos mensaje desde el hijo
child.on('message', childMsg=>{
    console.log("mensaje del hijo: ", childMsg)
    setTimeout(() => {
        child.send("terminar")
    }, 4000);
})